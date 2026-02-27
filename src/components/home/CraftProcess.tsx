'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const steps = [
    {
        id: 1,
        title: "Ghaat (Framework)",
        desc: "The base structural framework is shaped from pure 24K gold alloyed to 22K by master chiterias.",
        image: "https://images.unsplash.com/photo-1599643477874-ec5d7f8d6de9?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Meenakari (Enameling)",
        desc: "Vibrant colors are painted onto the reverse by our master painters, then baked in fires of devotion.",
        image: "https://images.unsplash.com/photo-1620658461876-0bfdc5bd3a6a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Jadai (Setting)",
        desc: "Uncut polki diamonds and precious stones are meticulously set into the gold using pure 24K foil.",
        image: "https://images.unsplash.com/photo-1650720452335-eec32ca181cb?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Polishing",
        desc: "The final piece is polished using traditional methods, ready to be offered for blessing.",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800"
    }
];

export function CraftProcess() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-[#F9F7F2]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                <div className="absolute top-24 left-6 md:left-16 z-20">
                    <h2 className="font-heading text-4xl md:text-5xl text-maroon">The Craft Process</h2>
                    <p className="font-label text-gold tracking-widest uppercase text-sm mt-3">4 Months · 8 Hands · 1 Blessing</p>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-6 md:px-16 pt-32 w-[300vw] lg:w-[200vw]">
                    {steps.map((step) => (
                        <div key={step.id} className="w-[85vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 flex flex-col group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden border border-gold/20 mb-8 p-2 bg-white">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-maroon-dark/20 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="font-label text-gold text-3xl opacity-80 mt-1">0{step.id}</span>
                                <div>
                                    <h3 className="font-heading text-3xl text-foreground mb-3">{step.title}</h3>
                                    <p className="font-body text-foreground/70 text-lg leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
