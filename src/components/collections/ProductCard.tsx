import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { Product } from '@/types/product';

export function ProductCard({ product }: { product: Product }) {
    // Use placeholder image if none exists
    const primaryImage = product.images?.[0]?.url || "https://images.unsplash.com/photo-1599643478524-fbfa8c49e793?auto=format&fit=crop&q=80&w=600";
    const hoverImage = product.images?.[1]?.url || primaryImage;

    return (
        <div className="group flex flex-col">
            <Link href={`/product/${product.slug}`} className="relative aspect-[4/5] bg-white border border-gold/10 overflow-hidden mb-4 p-4">
                {product.is_new_arrival && (
                    <div className="absolute top-4 left-4 z-10 bg-maroon text-[#F5EDD8] text-[10px] font-label tracking-widest uppercase px-2 py-1">
                        New
                    </div>
                )}
                {product.stock_quantity === 1 && (
                    <div className="absolute top-4 right-4 z-10 bg-gold text-white text-[10px] font-label tracking-widest uppercase px-2 py-1 shadow-sm">
                        Only 1 Left
                    </div>
                )}
                <Image
                    src={primaryImage}
                    alt={product.images?.[0]?.alt || product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white">
                    <Image
                        src={hoverImage}
                        alt={product.images?.[1]?.alt || product.name}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>
            <div className="flex flex-col flex-1 justify-between px-2">
                <div>
                    <Link href={`/product/${product.slug}`}>
                        <h3 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors line-clamp-2 leading-tight mb-2">
                            {product.name}
                        </h3>
                    </Link>
                    <p className="font-label text-[10px] tracking-widest uppercase text-foreground/50 mb-3">
                        {product.gold_purity} | {product.gold_weight_grams}g
                    </p>
                </div>
                <PriceDisplay amount={product.price} className="text-maroon font-serif text-lg" />
            </div>
        </div>
    );
}
