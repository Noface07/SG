import React from 'react';
import Image from 'next/image';
import { GoldButton } from '@/components/ui/GoldButton';

export function SignaturePiece() {
    return (
        <section className="py-24 md:py-32 bg-maroon-dark dark-grain-overlay text-[#F5EDD8]">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col text-center items-center mb-16">
                    <span className="font-label text-gold tracking-widest uppercase mb-4 text-xs md:text-sm">Masterpiece Collection</span>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#F5EDD8]">The Padmini Bridal Haar</h2>
                    <div className="h-px w-24 bg-gold/50 my-8"></div>
                    <p className="font-body text-lg md:text-xl text-[#F5EDD8]/80 max-w-2xl">
                        A 127g pure 22K gold parure featuring 68 uncut Polki diamonds and reverse Meenakari detailing.
                        Crafted over 120 days by 4 master karigaars.
                    </p>
                </div>

                <div className="relative aspect-square md:aspect-video w-full rounded-sm overflow-hidden border border-gold/20 group">
                    <Image
                        src="https://images.unsplash.com/photo-1599643478524-fbfa8c49e793?auto=format&fit=crop&q=80&w=1600"
                        alt="Padmini Bridal Haar Set"
                        fill
                        className="object-cover transition-transform duration-[20s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-maroon-dark/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <div className="max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="font-label text-gold tracking-widest uppercase text-xs mb-2 block">Only 1 Available</span>
                            <p className="font-body text-[#F5EDD8] text-lg mb-6 leading-relaxed">
                                Currently undergoing the final blessing at Sanwariya Ji Dham. This piece will not be recreated.
                            </p>
                            <GoldButton href="/product/padmini-bridal-haar-set">
                                View Details & Reserve
                            </GoldButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
