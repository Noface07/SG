'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function FilterBar({ currentCategory, currentSort }: { currentCategory?: string, currentSort?: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        if (name === 'category') params.delete('page'); // reset page on category change
        return params.toString();
    };

    const categories = [
        { label: 'All Pieces', value: 'all' },
        { label: 'Necklaces & Haar', value: 'necklaces' },
        { label: 'Earrings & Jhumkas', value: 'earrings' },
        { label: 'Bangles & Kadas', value: 'bangles' },
        { label: 'Bridal Parures', value: 'bridal-sets' },
    ];

    return (
        <div className="sticky top-[80px] z-40 bg-[#F9F7F2]/95 backdrop-blur-md py-4 mb-12 border-y border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                {categories.map((cat) => {
                    const isActive = (currentCategory || 'all') === cat.value;
                    return (
                        <button
                            key={cat.value}
                            onClick={() => router.push(`${pathname}?${createQueryString('category', cat.value)}`)}
                            className={`whitespace-nowrap font-label text-xs uppercase tracking-widest transition-colors ${isActive ? 'text-maroon border-b border-maroon pb-1' : 'text-foreground/60 hover:text-gold'
                                }`}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            <div className="w-full md:w-auto flex justify-end">
                <select
                    value={currentSort || 'newest'}
                    onChange={(e) => router.push(`${pathname}?${createQueryString('sort', e.target.value)}`)}
                    className="bg-transparent border-none text-xs font-label uppercase tracking-widest text-foreground focus:ring-0 cursor-pointer"
                >
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}
