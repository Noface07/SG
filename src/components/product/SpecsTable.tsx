import React from 'react';
import { Product } from '@/types/product';
import { CraftBadge } from '@/components/ui/CraftBadge';

export function SpecsTable({ product }: { product: Product }) {
    return (
        <div className="py-16 border-t border-gold/10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

            <div>
                <h3 className="font-heading text-2xl lg:text-3xl text-maroon mb-6">Object Details</h3>
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-gold/10 pb-2">
                        <span className="font-label text-xs tracking-widest uppercase text-foreground/60">Gold Purity</span>
                        <span className="font-body text-foreground">{product.gold_purity}</span>
                    </div>
                    <div className="flex justify-between border-b border-gold/10 pb-2">
                        <span className="font-label text-xs tracking-widest uppercase text-foreground/60">Gold Weight</span>
                        <span className="font-body text-foreground">{product.gold_weight_grams}g</span>
                    </div>
                    <div className="flex justify-between border-b border-gold/10 pb-2">
                        <span className="font-label text-xs tracking-widest uppercase text-foreground/60">Setting Style</span>
                        <span className="font-body text-foreground">{product.setting_type || 'Traditional Kundan'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gold/10 pb-2">
                        <span className="font-label text-xs tracking-widest uppercase text-foreground/60">Reverse Meenakari</span>
                        <span className="font-body text-foreground">{product.has_meenakari_reverse ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-2">
                        {product.craft_techniques?.map((technique) => (
                            <CraftBadge key={technique} technique={technique} />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-heading text-2xl lg:text-3xl text-maroon mb-6">Precious Stones</h3>
                <div className="space-y-4">
                    {product.stones && product.stones.length > 0 ? (
                        product.stones.map((stone, idx) => (
                            <div key={idx} className="flex justify-between border-b border-gold/10 pb-2">
                                <span className="font-label text-xs tracking-widest uppercase text-foreground/60">{stone.type}</span>
                                <span className="font-body text-foreground">
                                    {stone.count} {stone.count === 1 ? 'Piece' : 'Pieces'}
                                    {stone.origin && <span className="text-foreground/50 ml-2 italic">({stone.origin})</span>}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="text-foreground/50 font-body italic border-b border-gold/10 pb-2">
                            Pure gold masterpiece with no stone setting.
                        </div>
                    )}
                </div>

                <div className="mt-8 bg-white p-6 border border-gold/10 text-center">
                    <p className="font-body text-sm text-foreground/70 leading-relaxed">
                        All pieces bear the BIS Hallmark for purity.
                        A digital certificate detailing the exact specifications,
                        karigaar signature, and provenance is issued with every purchase.
                    </p>
                </div>
            </div>

        </div>
    );
}
