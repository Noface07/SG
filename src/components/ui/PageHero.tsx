'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
    return (
        <section className="relative bg-[radial-gradient(ellipse_at_center,_#3D0A14_0%,_#0D0906_80%)] dark-grain-overlay pt-40 pb-20 md:pt-48 md:pb-28 text-center overflow-hidden">
            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="font-label text-gold tracking-[0.4em] uppercase text-xs mb-5"
                >
                    {eyebrow}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-heading text-4xl md:text-6xl text-cream leading-tight"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-6 font-body italic text-lg md:text-xl text-cream/80"
                    >
                        {subtitle}
                    </motion.p>
                )}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mx-auto mt-8 h-px w-32 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
                />
            </div>
        </section>
    );
}
