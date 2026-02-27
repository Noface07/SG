-- =============================================
-- SANWARIYA GOLD - Full Database Schema
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- 1. PROFILES (extends Supabase auth.users)
-- =============================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    date_of_birth DATE,
    anniversary_date DATE,
    preferred_language TEXT DEFAULT 'en',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 2. ADDRESSES
-- =============================================
CREATE TABLE IF NOT EXISTS public.addresses (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    label TEXT DEFAULT 'Home',           -- Home / Office / Other
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    line1 TEXT NOT NULL,
    line2 TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL,
    country TEXT DEFAULT 'India',
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 3. CATEGORIES
-- =============================================
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    image_url TEXT,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default categories
INSERT INTO public.categories (name, slug, description, sort_order) VALUES
    ('Necklaces & Haars', 'necklaces', 'Regal necklaces and haars crafted in Jadau, Kundan & Polki', 1),
    ('Earrings & Jhumkas', 'earrings', 'Traditional jhumkas and statement earrings', 2),
    ('Bangles & Kadas', 'bangles', 'Handcrafted bangles and kadas in 22K gold', 3),
    ('Maang Tikka & Matha Patti', 'maang-tikka', 'Bridal headpieces steeped in tradition', 4),
    ('Rings & Bichua', 'rings', 'Intricately designed rings and toe rings', 5),
    ('Bridal Sets', 'bridal', 'Complete bridal collections for the discerning bride', 6),
    ('Men''s Jewellery', 'mens', 'Masculine gold jewellery for the modern maharaja', 7)
ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- 4. PRODUCTS
-- =============================================
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    sku TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    tagline TEXT,
    description TEXT,
    category_id UUID REFERENCES public.categories(id),
    
    -- Craft & Materials
    craft_type TEXT[],            -- ['Jadau', 'Kundan', 'Polki', 'Meenakari']
    gold_karat INTEGER DEFAULT 22,
    gold_weight_grams DECIMAL(8,3),
    stone_details TEXT,
    
    -- Pricing
    base_price_inr DECIMAL(12,2) NOT NULL,
    making_charges_inr DECIMAL(12,2) DEFAULT 0,
    gst_percentage DECIMAL(4,2) DEFAULT 3,
    
    -- Inventory
    is_made_to_order BOOLEAN DEFAULT false,
    stock_quantity INTEGER DEFAULT 0,
    lead_time_days INTEGER DEFAULT 21,
    
    -- Display
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    is_new_arrival BOOLEAN DEFAULT false,
    is_bestseller BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    
    -- SEO
    meta_title TEXT,
    meta_description TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 5. PRODUCT IMAGES
-- =============================================
CREATE TABLE IF NOT EXISTS public.product_images (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
    url TEXT NOT NULL,
    alt_text TEXT,
    is_primary BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 6. ORDERS
-- =============================================
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_number TEXT UNIQUE NOT NULL,   -- SG-2024-0001
    user_id UUID REFERENCES public.profiles(id),
    
    -- Status
    status TEXT DEFAULT 'pending' CHECK (status IN (
        'pending', 'payment_failed', 'confirmed', 
        'in_production', 'quality_check', 'dispatched', 
        'delivered', 'cancelled', 'refunded'
    )),
    
    -- Pricing
    subtotal_inr DECIMAL(12,2) NOT NULL,
    making_charges_inr DECIMAL(12,2) DEFAULT 0,
    gst_inr DECIMAL(12,2) DEFAULT 0,
    shipping_inr DECIMAL(12,2) DEFAULT 0,
    discount_inr DECIMAL(12,2) DEFAULT 0,
    total_inr DECIMAL(12,2) NOT NULL,
    
    -- Shipping address snapshot
    shipping_address JSONB NOT NULL,
    
    -- Payment
    payment_method TEXT DEFAULT 'razorpay',
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    razorpay_signature TEXT,
    payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN (
        'pending', 'paid', 'failed', 'refunded'
    )),
    paid_at TIMESTAMPTZ,
    
    -- Delivery
    tracking_id TEXT,
    courier_name TEXT,
    estimated_delivery DATE,
    delivered_at TIMESTAMPTZ,
    
    -- Notes
    customer_note TEXT,
    internal_note TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 7. ORDER ITEMS
-- =============================================
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
    product_id UUID REFERENCES public.products(id),
    
    -- Snapshot at time of order
    product_name TEXT NOT NULL,
    product_sku TEXT NOT NULL,
    product_image_url TEXT,
    unit_price_inr DECIMAL(12,2) NOT NULL,
    making_charges_inr DECIMAL(12,2) DEFAULT 0,
    quantity INTEGER DEFAULT 1,
    total_price_inr DECIMAL(12,2) NOT NULL,
    
    -- Customization
    size TEXT,
    custom_note TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 8. CART (persisted server-side)
-- =============================================
CREATE TABLE IF NOT EXISTS public.cart_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
    quantity INTEGER DEFAULT 1,
    size TEXT,
    custom_note TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);

-- =============================================
-- 9. WISHLIST
-- =============================================
CREATE TABLE IF NOT EXISTS public.wishlist_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);

-- =============================================
-- 10. BESPOKE REQUESTS
-- =============================================
CREATE TABLE IF NOT EXISTS public.bespoke_requests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    request_number TEXT UNIQUE NOT NULL,  -- BR-2024-0001
    user_id UUID REFERENCES public.profiles(id),
    
    -- Contact
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    
    -- Request Details
    occasion TEXT,               -- Wedding, Anniversary, Gift, etc.
    jewelry_type TEXT,           -- Necklace, Earrings, etc.
    gold_karat INTEGER DEFAULT 22,
    budget_range TEXT,           -- e.g. "5L-10L"
    reference_images TEXT[],     -- Array of Storage URLs
    description TEXT NOT NULL,
    
    -- Status & Follow-up
    status TEXT DEFAULT 'received' CHECK (status IN (
        'received', 'under_review', 'quote_sent', 
        'approved', 'in_production', 'completed', 'cancelled'
    )),
    assigned_to TEXT,
    quote_amount_inr DECIMAL(12,2),
    internal_notes TEXT,
    
    -- Timeline
    preferred_delivery_by DATE,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 11. APPOINTMENTS (Atelier Visit)
-- =============================================
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id),
    
    -- Contact
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    
    -- Appointment
    appointment_date DATE NOT NULL,
    appointment_time TEXT NOT NULL,  -- '10:00 AM' etc.
    purpose TEXT,                    -- Bespoke consultation, Viewing, etc.
    guests INTEGER DEFAULT 1,
    special_requests TEXT,
    
    -- Status
    status TEXT DEFAULT 'pending' CHECK (status IN (
        'pending', 'confirmed', 'completed', 'cancelled', 'no_show'
    )),
    confirmation_code TEXT,
    notes TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 12. CERTIFICATES (for products)
-- =============================================
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_item_id UUID REFERENCES public.order_items(id),
    user_id UUID REFERENCES public.profiles(id),
    
    certificate_number TEXT UNIQUE NOT NULL,
    product_name TEXT NOT NULL,
    gold_karat INTEGER,
    gold_weight_grams DECIMAL(8,3),
    stone_details TEXT,
    craft_type TEXT[],
    
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    certificate_url TEXT  -- Storage URL to PDF
);

-- =============================================
-- 13. REVIEWS
-- =============================================
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    order_item_id UUID REFERENCES public.order_items(id),
    
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title TEXT,
    body TEXT,
    is_verified_purchase BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT false,
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlist_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bespoke_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Public tables (read-only for all)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only see/edit their own
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Addresses: users manage their own
CREATE POLICY "Users manage own addresses" ON public.addresses USING (auth.uid() = user_id);

-- Cart: users manage their own
CREATE POLICY "Users manage own cart" ON public.cart_items USING (auth.uid() = user_id);

-- Wishlist: users manage their own
CREATE POLICY "Users manage own wishlist" ON public.wishlist_items USING (auth.uid() = user_id);

-- Orders: users view their own
CREATE POLICY "Users view own orders" ON public.orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users view own order items" ON public.order_items FOR SELECT 
    USING (EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()));

-- Products: publicly readable
CREATE POLICY "Products are publicly readable" ON public.products FOR SELECT USING (is_active = true);
CREATE POLICY "Product images are publicly readable" ON public.product_images FOR SELECT USING (true);
CREATE POLICY "Categories are publicly readable" ON public.categories FOR SELECT USING (is_active = true);

-- Bespoke: users view their own, anyone can insert
CREATE POLICY "Users view own bespoke requests" ON public.bespoke_requests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Anyone can submit bespoke request" ON public.bespoke_requests FOR INSERT WITH CHECK (true);

-- Appointments: users view their own, anyone can insert
CREATE POLICY "Users view own appointments" ON public.appointments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Anyone can book appointment" ON public.appointments FOR INSERT WITH CHECK (true);

-- Reviews: publicly readable, only own can insert
CREATE POLICY "Published reviews are public" ON public.reviews FOR SELECT USING (is_published = true);
CREATE POLICY "Users can submit reviews" ON public.reviews FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Certificates: users view their own
CREATE POLICY "Users view own certificates" ON public.certificates FOR SELECT USING (auth.uid() = user_id);

-- =============================================
-- TRIGGERS (auto-update updated_at)
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bespoke_requests_updated_at BEFORE UPDATE ON public.bespoke_requests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON public.appointments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cart_items_updated_at BEFORE UPDATE ON public.cart_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- AUTO-CREATE PROFILE ON SIGNUP trigger
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- SEQUENCE for order numbers
-- =============================================
CREATE SEQUENCE IF NOT EXISTS order_number_seq START 1;
CREATE SEQUENCE IF NOT EXISTS bespoke_request_number_seq START 1;
