'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { GoldButton } from '@/components/ui/GoldButton';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        id: '1',
        name: 'Meera Jhumka',
        price: 125000,
        slug: 'meera-jhumka',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '2',
        name: 'Vijay Stambh Choker',
        price: 480000,
        slug: 'vijay-stambh-choker',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '3',
        name: 'Maharani Maang Tikka',
        price: 210000,
        slug: 'maharani-maang-tikka',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400'
    }
];

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.18 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 48 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
};

export function FeaturedProducts() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex justify-between items-end mb-12"
                >
                    <div>
                        <span className="font-label text-gold tracking-widest uppercase mb-2 block text-sm">New Arrivals</span>
                        <h2 className="font-heading text-4xl text-foreground">Curated for the Season</h2>
                    </div>
                    <Link href="/collections" className="hidden md:block font-label text-maroon hover:text-gold uppercase tracking-widest text-sm transition-colors border-b border-transparent hover:border-gold pb-1">
                        View All Pieces
                    </Link>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {products.map(product => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <Link href={`/product/${product.slug}`} className="group block">
                                <div className="aspect-[4/5] relative bg-[#F9F7F2] border border-gold/10 overflow-hidden mb-4 p-4 gold-sheen transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-gold/10">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-heading text-2xl text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
                                <PriceDisplay amount={product.price} className="text-maroon mt-2" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center md:hidden">
                    <GoldButton href="/collections" variant="outline">View All Pieces</GoldButton>
                </div>
            </div>
        </section>
    );
}
