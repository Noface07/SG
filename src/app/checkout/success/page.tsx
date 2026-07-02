'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GoldButton } from '@/components/ui/GoldButton';
import { useCartStore } from '@/store/cartStore';

export default function CheckoutSuccessPage() {
    const clearCart = useCartStore((s) => s.clearCart);

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#3D0A14_0%,_#0D0906_80%)] dark-grain-overlay flex items-center justify-center px-6 py-32">
            <div className="relative z-20 max-w-xl text-center flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                    className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-8"
                >
                    <motion.svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#C8922A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <motion.path
                            d="M4 12.5l5 5L20 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        />
                    </motion.svg>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="font-heading text-4xl md:text-6xl text-cream mb-6"
                >
                    Order <span className="italic font-light text-shimmer">Blessed</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="font-body text-lg md:text-xl text-cream/80 leading-relaxed mb-4"
                >
                    Thank you. Your commission has been received and will be offered for blessing before it begins its journey to you. A confirmation is on its way by WhatsApp and email.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="font-hindi text-gold text-2xl mb-12"
                >
                    श्री सांवरिया जी की जय
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <GoldButton href="/account/orders">View My Commissions</GoldButton>
                    <GoldButton href="/collections" variant="outline">Continue Shopping</GoldButton>
                </motion.div>
            </div>
        </div>
    );
}
