import { createClient } from '@/lib/supabase/server';
import { CollectionsGrid } from '@/components/collections/CollectionsGrid';

type ProductImage = {
  url: string;
  alt_text: string | null;
  is_primary: boolean;
  sort_order: number;
};

type ProductRow = {
  id: string;
  name: string;
  slug: string;
  tagline: string | null;
  base_price_inr: number;
  making_charges_inr: number;
  gold_karat: number;
  craft_type: string[] | null;
  is_new_arrival: boolean;
  is_bestseller: boolean;
  is_featured: boolean;
  is_made_to_order: boolean;
  categories: { name: string; slug: string } | null;
  product_images: ProductImage[];
};

export default async function CollectionsPage() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('products')
    .select(`
      id, name, slug, tagline,
      base_price_inr, making_charges_inr, gold_karat, craft_type,
      is_new_arrival, is_bestseller, is_featured, is_made_to_order,
      categories ( name, slug ),
      product_images ( url, alt_text, is_primary, sort_order )
    `)
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching products:', error);
  }

  const products = (data ?? []) as unknown as ProductRow[];

  return <CollectionsGrid products={products} />;
}
