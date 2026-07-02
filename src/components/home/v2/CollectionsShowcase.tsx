'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const COLLECTIONS = [
    {
        title: 'Bridal Parures',
        tag: 'The Padmini Edit',
        href: '/collections?category=bridal-sets',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
        span: 'md:col-span-7',
    },
    {
        title: 'Jhumkas & Earrings',
        tag: 'Whispers of Mewar',
        href: '/collections?category=earrings',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
        span: 'md:col-span-5',
    },
    {
        title: 'Polki Haar & Chokers',
        tag: 'Uncut Radiance',
        href: '/collections?category=necklaces',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200',
        span: 'md:col-span-5',
    },
    {
        title: 'Maang Tikkas & Kadas',
        tag: 'Crown of Devotion',
        href: '/collections?category=bangles',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200',
        span: 'md:col-span-7',
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRX = useSpring(rotateX, { stiffness: 120, damping: 18 });
    const springRY = useSpring(rotateY, { stiffness: 120, damping: 18 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateX.set(-py * 7);
        rotateY.set(px * 7);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: springRX, rotateY: springRY, transformStyle: 'preserve-3d' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function CollectionsShowcase() {
    return (
        <section className="bg-[#171512] py-28 md:py-36 text-cream">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="font-label text-gold tracking-[0.4em] uppercase text-xs md:text-sm block mb-4">The Collections</span>
                    <h2 className="font-heading text-4xl md:text-6xl">
                        Treasures of <span className="italic font-light text-shimmer">the Atelier</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ staggerChildren: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 [perspective:1400px]"
                >
                    {COLLECTIONS.map((c) => (
                        <motion.div key={c.title} variants={cardVariants} className={c.span}>
                            <TiltCard className="h-full">
                                <Link href={c.href} className="group relative block h-72 md:h-[420px] overflow-hidden border border-gold/15 gold-sheen">
                                    <Image
                                        src={c.image}
                                        alt={c.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0906]/95 via-[#0D0906]/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10">
                                        <p className="font-label text-gold text-[10px] md:text-xs tracking-[0.35em] uppercase mb-2 opacity-80">{c.tag}</p>
                                        <h3 className="font-heading text-2xl md:text-4xl text-cream group-hover:text-gold-light transition-colors duration-500">
                                            {c.title}
                                        </h3>
                                        <p className="mt-3 flex items-center gap-2 text-gold text-xs font-label uppercase tracking-[0.25em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                            Explore <span aria-hidden="true">→</span>
                                        </p>
                                    </div>
                                </Link>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
