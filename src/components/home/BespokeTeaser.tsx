import React from 'react';
import { MaroonButton } from '@/components/ui/MaroonButton';

export function BespokeTeaser() {
    return (
        <section className="py-32 bg-[#F5EDD8] border-y border-gold/20 text-center px-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <span className="font-hindi text-6xl text-gold mb-6 opacity-30">ॐ</span>
                <h2 className="font-heading text-4xl md:text-5xl text-maroon mb-6">Commission a Legacy</h2>
                <p className="font-body text-maroon/80 text-lg md:text-xl mb-10 leading-relaxed">
                    Our master artisans await to translate your vision into a timeless heirloom.
                    From sketching the initial motif to the final blessing, experience the true luxury of custom jadau jewelry.
                </p>
                <MaroonButton href="/bespoke">Begin Your Consultation</MaroonButton>
            </div>
        </section>
    );
}
