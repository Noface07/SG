'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { GoldButton } from '@/components/ui/GoldButton';
import { calculateOrderTotal, formatWeight } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
    const { items, isDrawerOpen, closeDrawer, removeItem } = useCartStore();
    const router = useRouter();

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const totalGoldWeight = items.reduce((sum, item) => sum + (item.gold_weight_grams ?? 0), 0);
    const { total, makingCharges, gstAmount } = calculateOrderTotal(subtotal);

    const handleCheckout = () => {
        closeDrawer();
        router.push('/checkout');
    };

    return (
        <AnimatePresence>
            {isDrawerOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDrawer}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-background shadow-2xl z-[101] flex flex-col"
                    >
                        {/* Header */}
                        <div className="px-6 py-6 border-b border-gold/20 flex items-center justify-between bg-white">
                            <h2 className="font-label text-xl tracking-widest uppercase text-maroon">Your Coffret</h2>
                            <button
                                onClick={closeDrawer}
                                className="p-2 hover:bg-gold/10 rounded-full transition-colors hidden sm:block delay-75 duration-200"
                            >
                                <X size={24} className="text-foreground" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F9F7F2]">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-24 h-24 rounded-full bg-gold/5 flex items-center justify-center border border-gold/20">
                                        <span className="font-hindi text-4xl text-gold">ॐ</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-2xl mb-2">Your Coffret is Empty</h3>
                                        <p className="font-body text-foreground/60">Discover our handcrafted masterpieces.</p>
                                    </div>
                                    <GoldButton onClick={closeDrawer} href="/collections">
                                        Explore Collections
                                    </GoldButton>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div key={item.cartItemId} className="flex gap-4 p-4 bg-white border border-gold/20 relative group">
                                            <div className="relative w-24 h-24 bg-gray-100 flex-shrink-0">
                                                {item.images && item.images[0] && (
                                                    <Image
                                                        src={item.images[0].url}
                                                        alt={item.images[0].alt || item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <Link href={`/product/${item.slug}`} onClick={closeDrawer}>
                                                    <h4 className="font-heading text-lg leading-tight truncate hover:text-gold transition-colors">{item.name}</h4>
                                                </Link>
                                                <p className="font-label text-[10px] tracking-widest uppercase text-foreground/60 mt-1 mb-2">
                                                    {item.gold_purity ?? ''} {item.gold_weight_grams != null ? `| ${formatWeight(item.gold_weight_grams)}` : ''}
                                                </p>
                                                <PriceDisplay amount={item.price} className="text-maroon" />
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.cartItemId)}
                                                className="absolute right-4 top-4 text-foreground/40 hover:text-red-500 transition-colors"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-gold/20 bg-white p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                                <div className="space-y-3 font-body text-sm mb-6">
                                    <div className="flex justify-between text-foreground/70">
                                        <span>Subtotal</span>
                                        <PriceDisplay amount={subtotal} />
                                    </div>
                                    <div className="flex justify-between text-foreground/70">
                                        <span>Making Charges (5%)</span>
                                        <PriceDisplay amount={makingCharges} />
                                    </div>
                                    <div className="flex justify-between text-foreground/70">
                                        <span>GST (3%)</span>
                                        <PriceDisplay amount={gstAmount} />
                                    </div>
                                    <div className="flex justify-between text-green-700 font-medium pt-2">
                                        <span>Complimentary Secure Shipping</span>
                                        <span>₹0</span>
                                    </div>
                                    <div className="border-t border-dashed border-gold/40 pt-4 flex justify-between items-center">
                                        <span className="font-label tracking-widest uppercase md:text-lg">Total</span>
                                        <PriceDisplay amount={total} className="text-xl md:text-2xl text-maroon font-serif" />
                                    </div>
                                </div>

                                <GoldButton fullWidth onClick={handleCheckout} className="flex justify-between items-center group">
                                    <span>Proceed to Reserve</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </GoldButton>

                                <p className="text-center font-body text-xs text-foreground/50 mt-4 flex items-center justify-center gap-2">
                                    <span>Total Gold Weight: {formatWeight(totalGoldWeight)}</span>
                                    <span>•</span>
                                    <span>100% Insured Transit</span>
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
