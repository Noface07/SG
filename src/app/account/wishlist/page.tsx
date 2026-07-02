'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';
import { MaroonButton } from '@/components/ui/MaroonButton';

export default function WishlistPage() {
    const { items, removeItem } = useWishlistStore();
    const addToCart = useCartStore((s) => s.addItem);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="animate-fade-in">
            <h2 className="font-heading text-3xl text-maroon mb-8">Wishlist</h2>

            {items.length === 0 ? (
                <div className="bg-white border border-gold/20 p-10 md:p-16 shadow-sm text-center flex flex-col items-center">
                    <span className="font-hindi text-5xl text-gold/30 mb-6">ॐ</span>
                    <h3 className="font-heading text-2xl text-foreground mb-3">Nothing saved yet</h3>
                    <p className="font-body text-foreground/60 max-w-sm mb-8">
                        Tap the heart on any piece to keep it here while you decide.
                    </p>
                    <MaroonButton href="/collections">Explore Collections</MaroonButton>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {items.map((item) => {
                        const img = item.images?.[0]?.url ?? item.image;
                        return (
                            <div key={item.id} className="bg-white border border-gold/20 shadow-sm flex flex-col">
                                <Link href={`/product/${item.slug}`} className="block aspect-[4/5] overflow-hidden bg-[#F9F7F2] border-b border-gold/10">
                                    {img ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={img} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gold/30 font-hindi text-4xl">ॐ</div>
                                    )}
                                </Link>
                                <div className="p-5 flex flex-col gap-2 flex-grow">
                                    <Link href={`/product/${item.slug}`} className="font-heading text-xl text-foreground hover:text-gold transition-colors leading-tight">
                                        {item.name}
                                    </Link>
                                    <p className="font-body text-maroon font-medium">{formatPrice(item.price)}</p>
                                    <div className="flex gap-3 mt-auto pt-3">
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="flex-1 bg-maroon text-cream font-label text-xs uppercase tracking-widest py-3 px-4 hover:bg-maroon-dark transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="font-label text-[10px] uppercase tracking-widest text-foreground/40 hover:text-red-600 transition-colors px-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
