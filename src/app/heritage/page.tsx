'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { GoldButton } from '@/components/ui/GoldButton';

const FORT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBllKSoHwbVZY2GzwHwZdUOTWl7Z1LojkhdszZw5T-gSmGZWMEAUSkkVRCV7i_liN5tCt7GA69Onl2snad_oo_w6UZzjMjeza6nkbdvBZOIDFEreaTaVfCUXt4NjNGW_krutRaHXrhio69o7ODQdYvu8OgsmcWGCCE4Gn641DIuMUp7F2x37mqSolxA8EN5_60xcAIyHo6m3Tmvt_SJIRJDCiy1e1hI-d96FhswEOtcohhKW5wcoKL75fGEuYXVplfa7GwAJWW7kw';

const TIMELINE = [
    {
        year: '1962',
        title: 'A Bench Near Rampol Gate',
        desc: 'The house begins with a single bench, two apprentices, and an oath of purity taken before Sanwariya Seth. Every gram weighed in the open, every promise kept.',
    },
    {
        year: '1987',
        title: 'The Meenakari Atelier',
        desc: 'The second generation brings master enamellers into the family, and the house signature is born: reverse meenakari so fine it is worn against the skin, seen only by the wearer.',
    },
    {
        year: '2004',
        title: 'The Vault of Signatures',
        desc: 'The first one-of-one bridal parure leaves the atelier under a new covenant: a signature piece, once blessed and delivered, is never recreated.',
    },
    {
        year: '2026',
        title: 'The Digital Atelier',
        desc: 'The same eight hands, the same fires, now a doorstep away. The atelier opens its doors to the world without leaving Chittorgarh.',
    },
];

const PILLARS = [
    { n: '01', title: 'Ghaat', sub: 'The Framework', desc: 'Pure 24K gold, alloyed to 22K and shaped into the bones of the piece by the eldest hands in the room.' },
    { n: '02', title: 'Meenakari', sub: 'The Enamel', desc: 'Colour laid petal by petal on the reverse, then baked in fires of devotion until it outlives its wearer.' },
    { n: '03', title: 'Jadai', sub: 'The Setting', desc: 'Uncut polki and precious stones seated in pure gold foil, each one angled to catch temple lamplight.' },
    { n: '04', title: 'Polish', sub: 'The Blessing', desc: 'Burnished by hand, weighed a final time, and carried to Sanwariya Ji Dham before it ever meets a velvet box.' },
];

const VALUES = [
    { hindi: '\u092a\u0935\u093f\u0924\u094d\u0930\u0924\u093e', title: 'Purity as Prayer', desc: 'BIS hallmarked, openly weighed, honestly priced. Purity here is not a standard. It is worship.' },
    { hindi: '\u0915\u093e\u0930\u0940\u0917\u0930\u0940', title: 'Craft as Devotion', desc: 'No piece leaves in under sixty days. Some take a season. The hands do not hurry, and neither do we.' },
    { hindi: '\u092a\u0930\u093f\u0935\u093e\u0930', title: 'Family as Covenant', desc: 'Four generations at the bench, and every patron received as kin. Gold binds us to you for life.' },
];

export default function HeritagePage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

    const lineRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress: lineProgress } = useScroll({ target: lineRef, offset: ['start 0.75', 'end 0.5'] });

    return (
        <>
            {/* Parallax fort hero */}
            <section ref={heroRef} className="relative h-[92vh] overflow-hidden flex items-end">
                <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
                    <Image src={FORT_IMG} alt="The fort walls of Chittorgarh at dusk" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-deep-maroon/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0906] via-[#0D0906]/30 to-[#0D0906]/40" />
                </motion.div>

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 max-w-5xl pb-24 md:pb-32">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-label text-gold tracking-[0.45em] uppercase text-xs md:text-sm mb-6"
                    >
                        Chittorgarh · Since 1962
                    </motion.p>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05]">
                        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }} className="block">
                            Sixty Years of
                        </motion.span>
                        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65 }} className="block italic font-light text-shimmer">
                            Gold & Devotion
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-8 font-body italic text-lg md:text-2xl text-cream/80 max-w-xl"
                    >
                        The story of a family, a fort city, and a promise kept in 22 karats.
                    </motion.p>
                </motion.div>
            </section>

            {/* Legacy timeline */}
            <section className="bg-[#F9F7F2] py-24 md:py-36 overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-20">
                        <span className="font-label text-gold tracking-[0.4em] uppercase text-xs block mb-4">The Legacy</span>
                        <h2 className="font-heading text-4xl md:text-6xl text-maroon">Four Generations, One Flame</h2>
                    </div>

                    <div ref={lineRef} className="relative flex flex-col gap-16 md:gap-24">
                        <motion.div
                            style={{ scaleY: lineProgress }}
                            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent origin-top hidden md:block"
                        />
                        {TIMELINE.map((entry, i) => (
                            <motion.article
                                key={entry.year}
                                initial={{ opacity: 0, y: 44 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
                            >
                                <div className={`absolute top-3 hidden md:block w-2.5 h-2.5 rotate-45 bg-gold ${i % 2 === 0 ? '-right-[5px]' : '-left-[5px]'}`} />
                                <span className="font-label text-gold text-3xl md:text-4xl block mb-3">{entry.year}</span>
                                <h3 className="font-heading text-2xl md:text-3xl text-maroon mb-3">{entry.title}</h3>
                                <p className="font-body text-foreground/70 text-lg leading-relaxed">{entry.desc}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Craft pillars */}
            <section className="bg-[#171512] py-24 md:py-36 text-cream">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="font-label text-gold tracking-[0.4em] uppercase text-xs block mb-4">The Craft</span>
                        <h2 className="font-heading text-4xl md:text-6xl">
                            Four Months · Eight Hands · <span className="italic font-light text-shimmer">One Blessing</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PILLARS.map((pillar, i) => (
                            <motion.div
                                key={pillar.n}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.7, delay: i * 0.12 }}
                                className="group border border-gold/15 hover:border-gold/60 transition-colors duration-500 p-8 md:p-10 flex flex-col gap-4 min-h-[300px]"
                            >
                                <span className="font-label text-gold/50 text-4xl group-hover:text-gold transition-colors duration-500">{pillar.n}</span>
                                <div className="mt-auto">
                                    <h3 className="font-heading text-3xl text-cream group-hover:text-gold-light transition-colors duration-500">{pillar.title}</h3>
                                    <p className="font-label text-[10px] tracking-[0.35em] uppercase text-gold/70 mt-1 mb-4">{pillar.sub}</p>
                                    <p className="font-body text-cream/70 leading-relaxed">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values band */}
            <section className="bg-cream border-y border-gold/20 py-24 md:py-32">
                <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
                    {VALUES.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <span className="font-hindi text-4xl text-gold/40">{value.hindi}</span>
                            <h3 className="font-heading text-2xl md:text-3xl text-maroon">{value.title}</h3>
                            <div className="h-px w-10 bg-gold/60" />
                            <p className="font-body text-foreground/70 leading-relaxed max-w-xs">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Closing quote + CTA */}
            <section className="relative bg-[radial-gradient(ellipse_at_center,_#3D0A14_0%,_#0D0906_80%)] dark-grain-overlay py-28 md:py-40 text-center">
                <div className="container mx-auto px-6 max-w-3xl relative z-20 flex flex-col items-center">
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.9 }}
                        className="font-heading italic text-3xl md:text-5xl text-cream leading-snug mb-10"
                    >
                        We do not sell gold. We hand over a piece of our family, blessed and burning bright.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <GoldButton href="/visit">Visit the Atelier</GoldButton>
                        <GoldButton href="/bespoke" variant="outline">Commission a Piece</GoldButton>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
