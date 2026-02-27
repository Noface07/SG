export interface ProductImage {
    url: string;
    alt: string;
    is_primary: boolean;
}

export interface Stone {
    type: string;
    count: number;
    origin?: string;
    weight_carats?: number;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    meta_title?: string;
    meta_description?: string;
    description?: string;
    story?: string;
    price: number;
    making_charges?: number;
    gold_purity?: string;
    gold_weight_grams?: number;
    stones?: Stone[];
    craft_techniques?: string[];
    setting_type?: string;
    artisan_time_days?: number;
    has_meenakari_reverse?: boolean;
    images?: ProductImage[];
    image?: string;       // shorthand: single image URL for cart display
    is_active?: boolean;
    is_new_arrival?: boolean;
    is_featured?: boolean;
    is_signature_piece?: boolean;
    stock_quantity?: number;
}

