'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GoldButton } from '@/components/ui/GoldButton';

export function FinaleCTA() {
    return (
        <section className="relative bg-[#0D0906] dark-grain-overlay py-32 md:py-48 text-center overflow-hidden">
            {/* Radial gold glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-gold/10 blur-[130px] rounded-full pointer-events-none"
            />

            <div className="container mx-auto px-6 max-w-3xl relative z-10 flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="font-label text-gold tracking-[0.4em] uppercase text-xs mb-6"
                >
                    The Invitation
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="font-heading text-5xl md:text-7xl text-cream leading-tight mb-8"
                >
                    Begin Your <span className="italic font-light text-shimmer">Legacy</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="font-body text-lg md:text-xl text-cream/80 leading-relaxed max-w-xl mb-12"
                >
                    Step into the atelier where four generations of karigars translate devotion into gold. Your heirloom awaits its first chapter.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.9, delay: 0.45 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <GoldButton href="/appointments">Book a Private Viewing</GoldButton>
                    <GoldButton href="/bespoke" variant="outline">Commission a Piece</GoldButton>
                </motion.div>
            </div>
        </section>
    );
}
