'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

type ProductImage = {
    url: string;
    alt_text: string | null;
    is_primary: boolean;
    sort_order: number | null;
};

type Product = {
    id: string;
    sku: string;
    name: string;
    slug: string;
    tagline: string | null;
    description: string | null;
    gold_karat: number;
    gold_weight_grams: number | null;
    stone_details: string | null;
    craft_type: string[] | null;
    base_price_inr: number;
    making_charges_inr: number;
    gst_percentage: number;
    is_new_arrival: boolean;
    is_bestseller: boolean;
    is_made_to_order: boolean;
    lead_time_days: number;
    categories: { name: string; slug: string } | null;
    product_images: ProductImage[];
};

function formatPrice(price: number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}

export function ProductDetailClient({ product }: { product: Product }) {
    const [selectedImageIdx, setSelectedImageIdx] = useState(0);
    const { addItem, openDrawer } = useCartStore();

    const totalPrice = product.base_price_inr + product.making_charges_inr;
    const gstAmount = (totalPrice * product.gst_percentage) / 100;
    const currentImage = product.product_images[selectedImageIdx];

    function handleAddToCart() {
        addItem({
            id: product.id,
            name: product.name,
            price: totalPrice,
            image: product.product_images[0]?.url ?? '',
            slug: product.slug,
        });
        openDrawer();
    }

    return (
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 py-8 lg:px-12 lg:py-12">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-sm">
                <Link className="text-primary/60 hover:text-primary transition-colors" href="/">Home</Link>
                <span className="text-primary/40">/</span>
                <Link className="text-primary/60 hover:text-primary transition-colors" href="/collections">Collections</Link>
                {product.categories && (
                    <>
                        <span className="text-primary/40">/</span>
                        <Link className="text-primary/60 hover:text-primary transition-colors" href={`/collections?cat=${product.categories.slug}`}>
                            {product.categories.name}
                        </Link>
                    </>
                )}
                <span className="text-primary/40">/</span>
                <span className="text-foreground font-medium">{product.name}</span>
            </div>

            {/* Product Section Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left Column: Images */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    {/* Main Image */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none z-10" />
                        {currentImage ? (
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url("${currentImage.url}")` }}
                            />
                        ) : (
                            <div className="w-full h-full bg-[#1a1714] flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary/20 text-8xl">diamond</span>
                            </div>
                        )}
                        <div className="absolute bottom-4 right-4 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full text-white cursor-pointer hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined">zoom_in</span>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    {product.product_images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {product.product_images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImageIdx(idx)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${idx === selectedImageIdx ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100 hover:border-primary/50'
                                        }`}
                                >
                                    <div
                                        className="w-full h-full bg-center bg-cover"
                                        style={{ backgroundImage: `url("${img.url}")` }}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-5 flex flex-col">
                    {/* Badges */}
                    <div className="flex gap-3 mb-4">
                        {product.craft_type?.map(craft => (
                            <span key={craft} className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-wider rounded-full uppercase border border-primary/20">
                                {craft}
                            </span>
                        ))}
                        {product.is_new_arrival && (
                            <span className="px-3 py-1 bg-maroon text-white text-xs font-bold tracking-wider rounded-full uppercase">New Arrival</span>
                        )}
                        {product.is_bestseller && (
                            <span className="px-3 py-1 bg-primary text-[#171512] text-xs font-bold tracking-wider rounded-full uppercase">Bestseller</span>
                        )}
                    </div>

                    {/* Title & Price */}
                    <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-2 leading-tight">{product.name}</h1>
                    {product.tagline && (
                        <p className="text-foreground/60 italic mb-4">{product.tagline}</p>
                    )}

                    <div className="mb-2">
                        <div className="text-3xl font-medium text-primary">{formatPrice(totalPrice)}</div>
                        <p className="text-xs text-foreground/40 mt-1">+ GST {product.gst_percentage}% ({formatPrice(gstAmount)}) at checkout</p>
                    </div>

                    {/* Description */}
                    {product.description && (
                        <p className="text-foreground/70 text-sm leading-relaxed mb-6 mt-2">{product.description}</p>
                    )}

                    {/* Specifications Grid */}
                    <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/10">
                        <h3 className="text-lg font-medium mb-4 border-b border-primary/10 pb-2">Product Specifications</h3>
                        <div className="grid grid-cols-2 gap-y-4 text-sm">
                            <div>
                                <span className="block text-primary/60 text-xs uppercase tracking-wide mb-1">Gold Purity</span>
                                <span className="font-medium">{product.gold_karat}K Hallmarked</span>
                            </div>
                            {product.gold_weight_grams && (
                                <div>
                                    <span className="block text-primary/60 text-xs uppercase tracking-wide mb-1">Weight</span>
                                    <span className="font-medium">{product.gold_weight_grams}g</span>
                                </div>
                            )}
                            {product.stone_details && (
                                <div>
                                    <span className="block text-primary/60 text-xs uppercase tracking-wide mb-1">Stones</span>
                                    <span className="font-medium">{product.stone_details}</span>
                                </div>
                            )}
                            {product.craft_type && product.craft_type.length > 0 && (
                                <div>
                                    <span className="block text-primary/60 text-xs uppercase tracking-wide mb-1">Craft</span>
                                    <span className="font-medium">{product.craft_type.join(', ')}</span>
                                </div>
                            )}
                            <div>
                                <span className="block text-primary/60 text-xs uppercase tracking-wide mb-1">Availability</span>
                                <span className="font-medium">
                                    {product.is_made_to_order ? `Made to Order (${product.lead_time_days} days)` : 'In Stock'}
                                </span>
                            </div>
                            <div>
                                <span className="block text-primary/60 text-xs uppercase tracking-wide mb-1">SKU</span>
                                <span className="font-medium text-xs text-foreground/50">{product.sku}</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4 mb-8">
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-[#800000] hover:bg-[#600000] text-white font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">shopping_bag</span>
                            {product.is_made_to_order ? 'Request to Order' : 'Add to Cart'}
                        </button>
                        <Link
                            href="/appointments"
                            className="w-full bg-primary hover:bg-yellow-600 text-[#171512] font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">calendar_month</span>
                            Book a Private Viewing
                        </Link>
                    </div>

                    {/* Trust Row */}
                    <div className="grid grid-cols-4 gap-2 border-t border-b border-primary/10 py-6 mb-8">
                        {[
                            { icon: 'verified', label: 'BIS Hallmarked' },
                            { icon: 'local_shipping', label: 'Free Shipping' },
                            { icon: 'replay_30', label: '30-Day Returns' },
                            { icon: 'chat', label: 'WhatsApp Support' },
                        ].map(({ icon, label }) => (
                            <div key={icon} className="flex flex-col items-center gap-2 text-center group">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-wider text-primary/70">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
