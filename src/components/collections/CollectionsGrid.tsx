'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

type Product = {
    id: string;
    name: string;
    slug: string;
    tagline: string | null;
    base_price_inr: number;
    making_charges_inr: number;
    gold_karat: number;
    craft_type: string[] | null;
    is_new_arrival: boolean;
    is_bestseller: boolean;
    is_featured: boolean;
    is_made_to_order: boolean;
    categories: { name: string; slug: string } | null;
    product_images: { url: string; alt_text: string | null; is_primary: boolean; sort_order: number }[];
};

function getPrimaryImage(images: Product['product_images']) {
    if (!images || images.length === 0) return null;
    const primary = images.find(img => img.is_primary);
    return primary ?? images.sort((a, b) => a.sort_order - b.sort_order)[0];
}

function formatPrice(price: number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}

function ProductCard({ product }: { product: Product }) {
    const { addItem, openDrawer } = useCartStore();
    const primaryImage = getPrimaryImage(product.product_images);
    const totalPrice = product.base_price_inr + product.making_charges_inr;

    function handleAddToCart(e: React.MouseEvent) {
        e.preventDefault();
        addItem({
            id: product.id,
            name: product.name,
            price: totalPrice,
            image: primaryImage?.url ?? '',
            slug: product.slug,
        });
        openDrawer();
    }

    return (
        <div className="group relative flex flex-col velvet-card rounded-lg overflow-hidden border border-[#37332a]/30 hover:-translate-y-2 transition-transform duration-500">
            <Link href={`/product/${product.slug}`} className="relative w-full aspect-[3/4] overflow-hidden block">
                {primaryImage ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${primaryImage.url}')` }}
                    />
                ) : (
                    <div className="absolute inset-0 bg-[#2a2620] flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary/30 text-6xl">diamond</span>
                    </div>
                )}
                {product.is_new_arrival && (
                    <div className="absolute top-4 right-4 bg-maroon text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                        New Arrival
                    </div>
                )}
                {product.is_bestseller && !product.is_new_arrival && (
                    <div className="absolute top-4 right-4 bg-primary text-[#171512] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                        Bestseller
                    </div>
                )}
            </Link>
            <div className="p-6 flex flex-col flex-grow items-center text-center bg-[#171512]">
                <Link href={`/product/${product.slug}`}>
                    <h3 className="font-display text-white text-2xl font-medium mb-1 hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                {product.categories && (
                    <p className="text-[#b6aea0] text-xs uppercase tracking-widest mb-3">{product.categories.name}</p>
                )}
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-primary font-display text-lg italic">{product.gold_karat}K Gold</span>
                    <span className="text-primary/50 text-xs">•</span>
                    <span className="text-primary font-display text-lg italic">{formatPrice(totalPrice)}</span>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="mt-auto w-full bg-maroon hover:bg-[#70131e] text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide group-hover:bg-primary group-hover:text-[#171512]"
                >
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    {product.is_made_to_order ? 'Made to Order' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}

export function CollectionsGrid({ products }: { products: Product[] }) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = Array.from(
        new Map(
            products
                .filter(p => p.categories)
                .map(p => [p.categories!.slug, p.categories!])
        ).values()
    );

    const filtered = activeCategory
        ? products.filter(p => p.categories?.slug === activeCategory)
        : products;

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            {/* Section: Collections Grid */}
            <section className="bg-cream dark:bg-[#F5EDD8] py-20 px-6 lg:px-16 text-center">
                <div className="max-w-[1280px] mx-auto flex flex-col items-center">
                    <span className="text-maroon text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Collections</span>
                    <h2 className="font-display text-[#171512] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        Crafted for Queens,<br />Blessed for Life
                    </h2>

                    {/* Category Filter */}
                    {categories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wide border transition-all ${activeCategory === null
                                        ? 'bg-[#171512] text-primary border-[#171512]'
                                        : 'text-[#171512] border-[#37332a]/50 hover:border-[#171512]'
                                    }`}
                            >
                                All
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat.slug}
                                    onClick={() => setActiveCategory(cat.slug)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wide border transition-all ${activeCategory === cat.slug
                                            ? 'bg-[#171512] text-primary border-[#171512]'
                                            : 'text-[#171512] border-[#37332a]/50 hover:border-[#171512]'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    )}

                    {filtered.length === 0 ? (
                        <div className="py-20 text-[#171512]/50 text-lg">
                            No products found in this category.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                            {filtered.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#12100e] border-t border-[#37332a] py-12 px-6">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h4 className="font-display text-xl font-bold text-white">Sanwariya Gold</h4>
                        <p className="text-[#b6aea0] text-sm">Chittorgarh, Rajasthan.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link className="text-[#b6aea0] hover:text-primary transition-colors text-sm" href="/shipping-returns">Shipping Policy</Link>
                        <Link className="text-[#b6aea0] hover:text-primary transition-colors text-sm" href="/shipping-returns">Returns</Link>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto text-center mt-8 pt-8 border-t border-[#37332a]/50">
                    <p className="text-[#b6aea0]/60 text-xs">© 2025 Sanwariya Gold. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
