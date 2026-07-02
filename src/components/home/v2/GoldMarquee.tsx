import React from 'react';

const ITEMS = ['JADAU', 'KUNDAN', 'POLKI', 'MEENAKARI', 'THEWA', '22K GOLD'];

export function GoldMarquee() {
    return (
        <section className="bg-[#0D0906] border-y border-gold/20 py-6 overflow-hidden pause-on-hover" aria-hidden="true">
            <div className="flex w-max animate-marquee">
                {[0, 1].map((half) => (
                    <div key={half} className="flex shrink-0 items-center">
                        {ITEMS.map((item) => (
                            <span
                                key={`${item}-${half}`}
                                className="flex items-center font-label text-gold/80 tracking-[0.35em] text-sm md:text-base uppercase"
                            >
                                <span className="px-8 md:px-12">{item}</span>
                                <span className="text-gold/40 text-xs">❖</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
