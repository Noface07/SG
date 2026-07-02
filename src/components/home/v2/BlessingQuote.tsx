'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

const WORDS = 'सांवरिया सेठ दे दे, तो बेड़ा पार है'.split(' ');

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' } },
};

export function BlessingQuote() {
    return (
        <section className="relative bg-[radial-gradient(ellipse_at_center,_#3D0A14_0%,_#1a0508_75%)] dark-grain-overlay py-32 md:py-44 text-center overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 0.4, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-gold text-3xl mb-10"
                >
                    ❖
                </motion.span>

                <motion.blockquote
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-120px' }}
                >
                    <p className="font-hindi text-4xl md:text-6xl lg:text-7xl text-gold leading-snug flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {WORDS.map((word, i) => (
                            <motion.span key={i} variants={wordVariants} className="inline-block">
                                {word}
                            </motion.span>
                        ))}
                    </p>
                </motion.blockquote>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="mt-10 font-body italic text-lg md:text-2xl text-cream/80 max-w-2xl"
                >
                    When the Seth of Seths bestows his grace, every vessel finds its shore.
                </motion.p>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="mt-6 font-label text-[10px] md:text-xs uppercase tracking-[0.4em] text-cream"
                >
                    A saying of Mewar
                </motion.footer>
            </div>
        </section>
    );
}
