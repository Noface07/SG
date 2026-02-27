'use client';

import React from 'react';
import { Product } from '@/types/product';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { MaroonButton } from '@/components/ui/MaroonButton';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { useCartStore } from '@/store/cartStore';
import { Heart } from 'lucide-react';

export function ProductInfo({ product }: { product: Product }) {
    const { addItem } = useCartStore();

    return (
        <div className="flex flex-col md:py-10">
            <div className="mb-2 flex items-center gap-4">
                {product.is_new_arrival && (
                    <span className="bg-maroon text-[#F5EDD8] text-[10px] font-label tracking-widest uppercase px-2 py-1">
                        New Arrival
                    </span>
                )}
                {product.is_signature_piece && (
                    <span className="bg-gold text-white text-[10px] font-label tracking-widest uppercase px-2 py-1">
                        Signature Piece
                    </span>
                )}
            </div>

            <h1 className="font-heading text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
                {product.name}
            </h1>

            <div className="flex flex-col gap-1 mb-8">
                <span className="font-label text-xs tracking-widest uppercase text-foreground/50">
                    {product.gold_purity} | {product.gold_weight_grams}g
                </span>
                <PriceDisplay amount={product.price} className="text-2xl lg:text-3xl text-maroon mt-2" />
                <span className="font-body text-xs text-foreground/50 mt-1">
                    Includes 5% making charges & 3% GST. Complimentary insured shipping.
                </span>
            </div>

            <GoldDivider className="mb-8 justify-start" />

            <div className="font-body text-foreground/80 text-lg leading-relaxed space-y-4 mb-10">
                <p>{product.description}</p>
                {product.story && (
                    <p className="italic text-foreground/70">{product.story}</p>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {(product.stock_quantity ?? 0) > 0 ? (
                    <MaroonButton
                        className="flex-1 py-4 text-xs font-bold"
                        onClick={() => addItem(product)}
                    >
                        Add to Coffret
                    </MaroonButton>
                ) : (
                    <MaroonButton className="flex-1 py-4 text-xs font-bold" disabled onClick={(e) => e.preventDefault()}>
                        Out of Stock
                    </MaroonButton>
                )}
                <button className="flex items-center justify-center p-4 border border-maroon text-maroon hover:bg-maroon hover:text-[#F5EDD8] transition-colors rounded-none">
                    <Heart size={20} className="stroke-1" />
                </button>
            </div>

            <div className="bg-gold/5 border border-gold/20 p-6 flex flex-col gap-3 font-body text-sm text-foreground/80">
                <div className="flex justify-between items-center border-b border-gold/10 pb-3">
                    <span className="font-label tracking-widest uppercase text-[10px] text-foreground/60">Availability</span>
                    {(product.stock_quantity ?? 0) === 1 ? (
                        <span className="text-maroon font-medium">Only 1 Available - One-of-a-kind</span>
                    ) : (
                        <span>{product.stock_quantity ?? 0} Available</span>
                    )}
                </div>
                <div className="flex justify-between items-center border-b border-gold/10 pb-3">
                    <span className="font-label tracking-widest uppercase text-[10px] text-foreground/60">Crafting Time</span>
                    <span>{product.artisan_time_days || 45} Days</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                    <span className="font-label tracking-widest uppercase text-[10px] text-foreground/60">Delivery</span>
                    <span>100% Insured Transit within India</span>
                </div>
            </div>
        </div>
    );
}
