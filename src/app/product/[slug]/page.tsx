import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import { ProductDetailClient } from '@/components/product/ProductDetailClient';

type Props = { params: { slug: string } };

type ProductImage = {
    url: string;
    alt_text: string | null;
    is_primary: boolean;
    sort_order: number | null;
};

type ProductRow = {
    id: string;
    sku: string;
    name: string;
    slug: string;
    tagline: string | null;
    description: string | null;
    gold_karat: number;
    gold_weight_grams: number | null;
    stone_details: string | null;
    craft_type: string[] | null;
    base_price_inr: number;
    making_charges_inr: number;
    gst_percentage: number;
    is_new_arrival: boolean;
    is_bestseller: boolean;
    is_made_to_order: boolean;
    lead_time_days: number;
    categories: { name: string; slug: string } | null;
    product_images: ProductImage[];
};

export default async function ProductPage({ params }: Props) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('products')
        .select(`
      id, sku, name, slug, tagline, description,
      gold_karat, gold_weight_grams, stone_details, craft_type,
      base_price_inr, making_charges_inr, gst_percentage,
      is_new_arrival, is_bestseller, is_made_to_order, lead_time_days,
      categories ( name, slug ),
      product_images ( url, alt_text, is_primary, sort_order )
    `)
        .eq('slug', params.slug)
        .eq('is_active', true)
        .single();

    if (error || !data) {
        notFound();
    }

    const product = data as unknown as ProductRow;

    const sortedImages = [...product.product_images].sort((a, b) => {
        if (a.is_primary && !b.is_primary) return -1;
        if (!a.is_primary && b.is_primary) return 1;
        return (a.sort_order ?? 0) - (b.sort_order ?? 0);
    });

    return <ProductDetailClient product={{ ...product, product_images: sortedImages }} />;
}

export async function generateStaticParams() {
    // generateStaticParams runs outside a request scope - cookies() is unavailable.
    // Use a direct REST fetch with the anon key instead.
    try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (!url || !key) return [];
        const res = await fetch(
            `${url}/rest/v1/products?select=slug&is_active=eq.true`,
            { headers: { apikey: key, Authorization: `Bearer ${key}` } }
        );
        const data = await res.json() as { slug: string }[];
        return data.map(p => ({ slug: p.slug }));
    } catch {
        return [];
    }
}
