'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { GoldButton } from '@/components/ui/GoldButton';

const TITLE = 'SANWARIYA'.split('');

// Place your video file at public/assets/hero.mp4
const VIDEO_SRC = '/assets/hero.mp4';

// Deterministic positions to avoid hydration mismatches
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
    left: (i * 41 + 7) % 100,
    top: (i * 61 + 13) % 100,
    size: 2 + (i % 3),
    delay: (i % 8) * 0.9,
    duration: 7 + (i % 5) * 2,
}));

export function HeroCinematic() {
    const containerRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
    const videoX = useTransform(springX, (v) => v * 18);
    const videoY = useTransform(springY, (v) => v * 18);
    const titleX = useTransform(springX, (v) => v * -14);
    const titleY = useTransform(springY, (v) => v * -14);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0D0906] dark-grain-overlay"
        >
            {/* Full-bleed video background with cursor drift */}
            <motion.div style={{ x: videoX, y: videoY }} className="absolute -inset-[3%] z-0 scale-[1.04]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    src={VIDEO_SRC}
                />
                {/* Legibility overlays */}
                <div className="absolute inset-0 bg-[#0D0906]/50" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0D0906_95%)]" />
            </motion.div>

            {/* Blend into the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0906] to-transparent z-[2] pointer-events-none" />

            {/* Floating gold dust */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                {PARTICLES.map((p, i) => (
                    <motion.span
                        key={i}
                        className="absolute rounded-full bg-gold-light"
                        style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
                        animate={{ y: [0, -44, 0], opacity: [0, 0.65, 0] }}
                        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                    />
                ))}
            </div>

            {/* Foreground content, drifting with the cursor */}
            <motion.div
                style={{ x: titleX, y: titleY, translateY: contentY, opacity: contentOpacity }}
                className="relative z-10 flex flex-col items-center text-center px-4"
            >
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.8 }}
                    className="font-label text-[10px] md:text-xs tracking-[0.5em] uppercase text-cream/70 mb-6"
                >
                    Est. in Mewar · Chittorgarh, Rajasthan
                </motion.p>

                <h1 className="flex overflow-hidden font-heading text-[13vw] md:text-8xl lg:text-9xl leading-none text-cream drop-shadow-2xl">
                    {TITLE.map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: '112%' }}
                            animate={{ y: 0 }}
                            transition={{ delay: 2.0 + i * 0.055, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </h1>

                <motion.h2
                    initial={{ opacity: 0, letterSpacing: '0.2em' }}
                    animate={{ opacity: 1, letterSpacing: '0.6em' }}
                    transition={{ delay: 2.6, duration: 1.2, ease: 'easeOut' }}
                    className="font-label text-2xl md:text-4xl text-shimmer mt-2 mb-8 pl-[0.6em]"
                >
                    GOLD
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.8, duration: 1 }}
                    className="flex items-center justify-center gap-4 w-full max-w-md opacity-60 mb-8 origin-center"
                >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                    <div className="w-2 h-2 rotate-45 border border-gold shrink-0" />
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.0, duration: 0.9 }}
                    className="font-body text-lg md:text-2xl text-cream/90 italic font-light tracking-wide max-w-lg mb-10"
                >
                    Where the blessings of the Seth of Seths are wrought in gold
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.3, duration: 0.9 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <GoldButton href="/collections">Explore Collections</GoldButton>
                    <GoldButton href="/appointments" variant="outline">Book a Private Viewing</GoldButton>
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.8, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-label">Scroll</span>
                <div className="h-10 w-px overflow-hidden">
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-full w-full bg-gradient-to-b from-transparent via-gold to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
}
