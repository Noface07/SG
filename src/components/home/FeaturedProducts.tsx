import React from 'react';
import { GoldButton } from '@/components/ui/GoldButton';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturedProducts() {
    const products = [
        {
            id: '1',
            name: 'Meera Jhumka',
            price: 125000,
            slug: 'meera-jhumka',
            image: 'https://images.unsplash.com/photo-1535632066927-1428ef9182a4?auto=format&fit=crop&q=80&w=400'
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

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="font-label text-gold tracking-widest uppercase mb-2 block text-sm">New Arrivals</span>
                        <h2 className="font-heading text-4xl text-foreground">Curated for the Season</h2>
                    </div>
                    <Link href="/collections" className="hidden md:block font-label text-maroon hover:text-gold uppercase tracking-widest text-sm transition-colors border-b border-transparent hover:border-gold pb-1">
                        View All Pieces
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <Link href={`/product/${product.slug}`} key={product.id} className="group">
                            <div className="aspect-[4/5] relative bg-[#F9F7F2] border border-gold/10 overflow-hidden mb-4 p-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-heading text-2xl text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
                            <PriceDisplay amount={product.price} className="text-maroon mt-2" />
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <GoldButton href="/collections" variant="outline">View All Pieces</GoldButton>
                </div>
            </div>
        </section>
    );
}
