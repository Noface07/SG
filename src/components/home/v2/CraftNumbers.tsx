'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const STATS = [
    { value: 60, suffix: '+', label: 'Years of Legacy' },
    { value: 22, suffix: 'K', label: 'Purest Gold' },
    { value: 120, suffix: '', label: 'Days per Masterpiece' },
    { value: 8, suffix: '', label: 'Master Karigars' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, value, {
            duration: 2.2,
            ease: 'easeOut',
            onUpdate: (v) => setDisplay(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, value]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

export function CraftNumbers() {
    return (
        <section className="bg-cream border-y border-gold/20 py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: i * 0.12 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <span className="font-heading text-5xl md:text-6xl text-maroon">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </span>
                            <div className="h-px w-10 bg-gold/60" />
                            <span className="font-label text-gold-dark uppercase tracking-[0.25em] text-[10px] md:text-xs">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
