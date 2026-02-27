'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/types/product';

export function ImageGallery({ images }: { images: ProductImage[] }) {
    const [mainImageIndex, setMainImageIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="aspect-[4/5] bg-[#F9F7F2] border border-gold/10 flex items-center justify-center">
                <span className="font-hindi text-6xl text-gold opacity-20">ॐ</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 lg:gap-6 h-full max-h-[80vh]">
            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto scrollbar-hide md:w-24 flex-shrink-0">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setMainImageIndex(idx)}
                            className={`relative aspect-[4/5] border transition-all flex-shrink-0 md:w-full w-20 
                ${mainImageIndex === idx ? 'border-maroon opacity-100' : 'border-gold/20 opacity-50 hover:opacity-100 hover:border-gold'}`}
                        >
                            <Image
                                src={img.url}
                                alt={img.alt || `Product thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Main Image */}
            <div className="relative aspect-[4/5] md:aspect-auto md:flex-1 bg-white border border-gold/10 overflow-hidden w-full">
                <Image
                    src={images[mainImageIndex].url}
                    alt={images[mainImageIndex].alt || 'Product Image'}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}
