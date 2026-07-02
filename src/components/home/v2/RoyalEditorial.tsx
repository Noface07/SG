'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GoldButton } from '@/components/ui/GoldButton';

export function RoyalEditorial() {
    return (
        <section className="bg-background py-24 md:py-36 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image with cinematic clip-path reveal */}
                    <motion.div
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-[4/5] w-full border border-gold/20"
                    >
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBllKSoHwbVZY2GzwHwZdUOTWl7Z1LojkhdszZw5T-gSmGZWMEAUSkkVRCV7i_liN5tCt7GA69Onl2snad_oo_w6UZzjMjeza6nkbdvBZOIDFEreaTaVfCUXt4NjNGW_krutRaHXrhio69o7ODQdYvu8OgsmcWGCCE4Gn641DIuMUp7F2x37mqSolxA8EN5_60xcAIyHo6m3Tmvt_SJIRJDCiy1e1hI-d96FhswEOtcohhKW5wcoKL75fGEuYXVplfa7GwAJWW7kw"
                            alt="Majestic fort walls of Chittorgarh at sunset"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-deep-maroon/25 mix-blend-multiply" />
                        <div className="absolute bottom-6 left-6">
                            <p className="font-label text-cream tracking-[0.3em] uppercase text-xs drop-shadow">Chittorgarh · The Land of Valour</p>
                        </div>
                    </motion.div>

                    {/* Copy */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ staggerChildren: 0.14 }}
                        className="flex flex-col gap-6"
                    >
                        {[
                            <span key="eyebrow" className="font-label text-gold tracking-[0.4em] uppercase text-xs">01 · Heritage</span>,
                            <h2 key="title" className="font-heading text-4xl md:text-6xl text-maroon leading-tight">
                                Born in the <span className="italic font-light text-shimmer">City of Valour</span>
                            </h2>,
                            <p key="p1" className="font-body text-lg md:text-xl text-foreground/75 leading-relaxed">
                                Rooted in the ancient soil of Chittorgarh, our craft echoes the valour and devotion of Mewar. Each piece is a repository of history, forged in fires that have witnessed the rise of legends.
                            </p>,
                            <p key="p2" className="font-body text-lg md:text-xl text-foreground/75 leading-relaxed">
                                The intricate filigree mimics the jalis of the Vijay Stambh, while bold Kundan settings reflect the unyielding spirit of the Rajputana.
                            </p>,
                            <div key="cta" className="mt-4">
                                <GoldButton href="/heritage" variant="outline">Read Our Story</GoldButton>
                            </div>,
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 28 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                                }}
                            >
                                {node}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
