import React from 'react';
import { ProductCard } from '@/components/collections/ProductCard';
import { createClient } from '@/lib/supabase/server';
import { Product } from '@/types/product';

export async function CompleteTheLook({ currentProductId }: { currentProductId: string }) {
    const supabase = createClient();
    const { data: recommendations } = await supabase
        .from('products')
        .select('*')
        .neq('id', currentProductId)
        .eq('is_active', true)
        .limit(3);

    if (!recommendations || recommendations.length === 0) return null;

    return (
        <div className="py-24 border-t border-gold/20">
            <div className="text-center mb-12">
                <h3 className="font-heading text-3xl lg:text-4xl text-maroon mb-4">Complete the Parure</h3>
                <p className="font-body text-foreground/60 max-w-lg mx-auto">
                    Complement your choice with these masterworks, crafted to harmonize in brilliance and legacy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {(recommendations as { id: string }[]).map((recommendation) => (
                    <ProductCard key={recommendation.id} product={recommendation as unknown as Product} />
                ))}
            </div>
        </div>
    );
}
