'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeritageStory() {
    return (
        <section className="relative w-full bg-[#171512] text-[#F5EDD8]">
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left: Sticky Image (Desktop) / Static (Mobile) */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden relative border-r border-gold/10">
                    <div className="absolute inset-0 bg-[#3D0A14]/40 z-10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171512] via-transparent to-transparent z-10 lg:hidden"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBllKSoHwbVZY2GzwHwZdUOTWl7Z1LojkhdszZw5T-gSmGZWMEAUSkkVRCV7i_liN5tCt7GA69Onl2snad_oo_w6UZzjMjeza6nkbdvBZOIDFEreaTaVfCUXt4NjNGW_krutRaHXrhio69o7ODQdYvu8OgsmcWGCCE4Gn641DIuMUp7F2x37mqSolxA8EN5_60xcAIyHo6m3Tmvt_SJIRJDCiy1e1hI-d96FhswEOtcohhKW5wcoKL75fGEuYXVplfa7GwAJWW7kw"
                        alt="Majestic fort walls at sunset"
                        fill
                        className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute bottom-12 left-8 md:bottom-20 md:left-16 z-20 hidden lg:block">
                        <p className="text-gold font-label text-xl tracking-widest uppercase">Chittorgarh</p>
                        <p className="text-[#F5EDD8]/60 font-sans text-xs tracking-widest mt-2">THE LAND OF VALOUR</p>
                    </div>
                </div>

                {/* Right: Scrolling Content */}
                <div className="w-full lg:w-1/2 relative bg-[#171512] border-t border-gold/10 lg:border-t-0">
                    <div className="max-w-xl mx-auto px-8 py-20 lg:py-32 flex flex-col gap-24 lg:gap-40">
                        {/* Card 1 */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-6 group"
                        >
                            <div className="flex items-center gap-3 text-gold/60 mb-2">
                                <span className="text-sm font-sans tracking-widest uppercase">01. Heritage</span>
                                <div className="h-[1px] w-12 bg-gold/40"></div>
                            </div>
                            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight group-hover:text-gold transition-colors duration-500">
                                Born in the <br /> <span className="italic font-light text-gold">City of Valour</span>
                            </h2>
                            <p className="font-body text-lg md:text-xl text-[#F5EDD8]/80 leading-relaxed">
                                Rooted in the ancient soil of <span className="text-white border-b border-gold/30 pb-0.5">Chittorgarh</span>, our craft echoes the valour and devotion of Mewar. This is not merely jewelry; it is a repository of history.
                            </p>
                            <p className="font-body text-lg md:text-xl text-[#F5EDD8]/80 leading-relaxed">
                                Each piece is a testament to centuries of tradition, forged in fires that have witnessed the rise of legends. The intricate filigree work mimics the jalis of the Vijay Stambh, while the bold settings reflect the unyielding spirit of the Rajputana.
                            </p>
                            <button className="mt-4 flex items-center gap-3 text-gold uppercase text-xs font-bold tracking-[0.2em] group/btn w-fit">
                                Read Our Story
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.article>

                        {/* Divider Glyph */}
                        <div className="flex justify-center py-4 opacity-30 text-gold text-2xl">
                            ❖
                        </div>

                        {/* Card 2 */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-6 group"
                        >
                            <div className="flex items-center gap-3 text-gold/60 mb-2">
                                <span className="text-sm font-sans tracking-widest uppercase">02. Devotion</span>
                                <div className="h-[1px] w-12 bg-gold/40"></div>
                            </div>
                            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight group-hover:text-gold transition-colors duration-500">
                                Blessed by the <br /> <span className="italic font-light text-gold">Seth of Seths</span>
                            </h2>
                            <blockquote className="border-l-2 border-gold pl-6 my-4">
                                <p className="font-hindi italic text-2xl text-gold leading-normal mb-2">
                                    &quot;सांवरिया सेठ दे दे, तो बेड़ा पार है&quot;
                                </p>
                                <footer className="text-xs font-sans uppercase tracking-widest text-[#F5EDD8]/50">Local Saying</footer>
                            </blockquote>
                            <p className="font-body text-lg md:text-xl text-[#F5EDD8]/80 leading-relaxed">
                                We craft more than jewelry; we craft devotion. Our designs are inspired by the divine grace of Sanwariya Seth. It is believed that gold purchased here carries the blessings of the Lord himself.
                            </p>
                            <p className="font-body text-lg md:text-xl text-[#F5EDD8]/80 leading-relaxed">
                                From the auspicious <em className="text-white not-italic">Kundan</em> settings to the vibrant <em className="text-white not-italic">Meenakari</em> enameling, every stroke of the artisan&apos;s hand is a prayer offered in metal and stone.
                            </p>
                            <button className="mt-4 flex items-center gap-3 text-gold uppercase text-xs font-bold tracking-[0.2em] group/btn w-fit">
                                View Temple Collection
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.article>

                        <div className="flex justify-center pb-20 opacity-30">
                            <div className="h-24 w-[1px] bg-gradient-to-b from-gold via-gold to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
