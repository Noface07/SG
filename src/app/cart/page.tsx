'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';
import { GST_RATE } from '@/lib/constants';
import { GoldButton } from '@/components/ui/GoldButton';
import { MaroonButton } from '@/components/ui/MaroonButton';

export default function CartPage() {
    const { items, removeItem } = useCartStore();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const gst = Math.round(subtotal * GST_RATE);
    const total = subtotal + gst;

    if (!mounted) {
        return <div className="min-h-screen bg-[#F9F7F2]" />;
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-[#F9F7F2] pt-40 pb-24 flex flex-col items-center text-center px-6">
                <span className="font-hindi text-6xl text-gold/30 mb-6">ॐ</span>
                <h1 className="font-heading text-4xl md:text-5xl text-maroon mb-4">Your Treasury Awaits</h1>
                <p className="font-body text-lg text-foreground/60 max-w-md mb-10">
                    No pieces rest here yet. Explore the collections and find the heirloom destined for you.
                </p>
                <GoldButton href="/collections">Explore Collections</GoldButton>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F9F7F2] pt-32 md:pt-40 pb-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <h1 className="font-heading text-4xl md:text-5xl text-maroon mb-2">Your Treasury</h1>
                <p className="font-body text-foreground/60 mb-12">
                    {items.length} {items.length === 1 ? 'piece' : 'pieces'} awaiting checkout
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        {items.map((item) => {
                            const img = item.images?.[0]?.url ?? item.image;
                            return (
                                <div key={item.cartItemId} className="flex gap-6 bg-white border border-gold/20 p-4 md:p-6 shadow-sm">
                                    <Link href={`/product/${item.slug}`} className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden border border-gold/10 bg-[#F9F7F2]">
                                        {img ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={img} alt={item.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gold/30 font-hindi text-3xl">ॐ</div>
                                        )}
                                    </Link>
                                    <div className="flex flex-col flex-grow min-w-0">
                                        <Link href={`/product/${item.slug}`} className="font-heading text-xl md:text-2xl text-foreground hover:text-gold transition-colors">
                                            {item.name}
                                        </Link>
                                        {item.gold_purity && (
                                            <p className="font-body text-sm text-foreground/60 mt-1">
                                                {item.gold_purity}
                                                {item.gold_weight_grams ? ` · ${item.gold_weight_grams}g` : ''}
                                            </p>
                                        )}
                                        <p className="font-body text-maroon font-medium mt-2">{formatPrice(item.price)}</p>
                                        <button
                                            onClick={() => removeItem(item.cartItemId)}
                                            className="mt-auto self-start font-label text-[10px] uppercase tracking-[0.25em] text-foreground/40 hover:text-red-600 transition-colors pt-3"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <aside className="lg:sticky lg:top-32 h-fit bg-white border border-gold/20 p-6 md:p-8 shadow-sm">
                        <h2 className="font-heading text-2xl text-maroon mb-6">Summary</h2>
                        <div className="space-y-3 font-body text-foreground/70 border-b border-gold/20 pb-4 mb-4">
                            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                            <div className="flex justify-between"><span>GST (3%)</span><span>{formatPrice(gst)}</span></div>
                            <div className="flex justify-between items-center"><span>Insured Shipping</span><span className="text-gold uppercase text-[10px] font-label tracking-widest">Free</span></div>
                        </div>
                        <div className="flex justify-between items-baseline mb-8">
                            <span className="font-heading text-xl text-foreground">Total</span>
                            <span className="font-heading text-3xl text-maroon">{formatPrice(total)}</span>
                        </div>
                        <MaroonButton href="/checkout" fullWidth>Proceed to Checkout</MaroonButton>
                        <GoldButton href="/collections" variant="ghost" fullWidth className="mt-3">Continue Shopping</GoldButton>
                    </aside>
                </div>
            </div>
        </div>
    );
}
