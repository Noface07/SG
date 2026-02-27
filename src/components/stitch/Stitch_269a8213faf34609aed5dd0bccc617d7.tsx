import React from 'react';
import Link from 'next/link';

export function Stitch_269a8213faf34609aed5dd0bccc617d7() {
    return (
        <>

            <div className="relative flex min-h-screen w-full flex-col">
                {/* Header */}

                {/* Hero Section */}
                <section className="relative h-screen w-full overflow-hidden bg-hero-gradient flex items-center" style={{ paddingTop: '80px' }}>
                    {/* Jali Pattern Overlay */}
                    <div className="absolute inset-0 z-0 jali-pattern pointer-events-none opacity-40"></div>

                    {/* Desktop: Two-column split | Mobile: Centered text */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 h-full pb-16">

                        {/* Left: Typography */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                            {/* Badge */}
                            <p className="font-serif italic text-xs tracking-[0.15em] text-cream/60 border-l border-primary pl-3 py-1 mb-8 hidden md:block">
                                EST. IN MEWAR &nbsp;·&nbsp; <span className="uppercase not-italic font-sans text-[10px] tracking-widest">Chittorgarh, Rajasthan</span>
                            </p>

                            <h1 className="font-display italic text-7xl md:text-8xl xl:text-[9rem] text-primary leading-none tracking-tighter drop-shadow-2xl">
                                Sanwariya
                            </h1>
                            <h2 className="font-decorative text-2xl md:text-3xl text-cream tracking-[0.35em] mt-1 md:mt-2 drop-shadow-lg">
                                GOLD
                            </h2>

                            {/* Divider */}
                            <div className="flex items-center gap-4 w-full max-w-xs opacity-50 my-6">
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/80 to-transparent"></div>
                                <span className="material-symbols-outlined text-primary text-sm">diamond</span>
                                <div className="h-[1px] flex-1 bg-gradient-to-l from-primary/80 to-transparent"></div>
                            </div>

                            <p className="font-serif text-base md:text-lg text-cream/80 italic font-light tracking-wide max-w-sm leading-relaxed">
                                Where the blessings of the Seth of Seths are wrought in gold
                            </p>

                            <div className="flex items-center gap-6 mt-10">
                                <a href="/collections" className="inline-flex items-center gap-2 bg-primary text-near-black font-label text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-primary/90 transition-colors">
                                    Explore Collection
                                </a>
                                <a href="/heritage" className="inline-flex items-center gap-2 text-primary font-label text-xs tracking-[0.2em] uppercase border-b border-primary/40 pb-0.5 hover:border-primary transition-colors">
                                    Our Heritage
                                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        {/* Right: Product Image (desktop only) */}
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <div className="relative w-72 xl:w-96 group cursor-pointer">
                                {/* Glow */}
                                <div className="absolute inset-0 bg-primary/25 blur-[80px] rounded-full scale-75 group-hover:bg-primary/35 transition-all duration-700"></div>
                                {/* Frame lines */}
                                <div className="absolute -inset-3 border border-primary/20 pointer-events-none"></div>
                                <div className="absolute -inset-6 border border-primary/10 pointer-events-none"></div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIRGBB1glR54gvU19LoGEF6MoJbpLLx8jF5cSmEuCSa0OJ_NM-Hz39-UuEr6CFpNXH3pngoaFUzkaoVVFRi7Tl6LW0WgtjQShkS7mJPBv_wuBAy85cn8Wv6HyAHms5vrQ-sMoD2S6GoFWD-Ull-6qUerudzBt-bVWLoqQ3YGhi98taLU87uMhTK2EMKP5SzbJZZAMMeLzjJ9TDhbkr67hmDJKV16d8xzdGSZf9w1Pwp67gzqXUgs-RWpfIjv6NDtjVj-t5hPpgtQ"
                                    alt="Intricate Jadau bridal necklace"
                                    className="relative z-10 w-full h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out object-contain rounded-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile badge */}
                    <div className="absolute top-24 left-6 z-10 opacity-70 md:hidden">
                        <p className="font-serif italic text-[10px] tracking-[0.12em] text-cream border-l border-primary pl-3 py-1">
                            EST. IN MEWAR<br />
                            <span className="uppercase not-italic font-sans text-[9px] tracking-widest">Chittorgarh, Rajasthan</span>
                        </p>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
                        <div className="flex flex-col items-center gap-2 animate-bounce cursor-pointer">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-sans">Scroll to discover</span>
                            <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
                        </div>
                    </div>
                </section>
                {/* Heritage Story Section (Sticky Split) */}
                <section className="relative w-full bg-background-dark">
                    <div className="flex flex-col lg:flex-row min-h-screen">
                        {/* Left: Sticky Image (Desktop) / Static (Mobile) */}
                        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden relative border-r border-primary/10">
                            <div className="absolute inset-0 bg-deep-maroon/40 z-10 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 lg:hidden"></div>
                            <img alt="Chittorgarh Fort silhouette against a dramatic sunset" className="w-full h-full object-cover scale-110" data-alt="Majestic fort walls at sunset" data-location="Chittorgarh, India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBllKSoHwbVZY2GzwHwZdUOTWl7Z1LojkhdszZw5T-gSmGZWMEAUSkkVRCV7i_liN5tCt7GA69Onl2snad_oo_w6UZzjMjeza6nkbdvBZOIDFEreaTaVfCUXt4NjNGW_krutRaHXrhio69o7ODQdYvu8OgsmcWGCCE4Gn641DIuMUp7F2x37mqSolxA8EN5_60xcAIyHo6m3Tmvt_SJIRJDCiy1e1hI-d96FhswEOtcohhKW5wcoKL75fGEuYXVplfa7GwAJWW7kw" />
                            <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
                                <p className="text-primary font-decorative text-lg tracking-widest">CHITTORGARH</p>
                                <p className="text-cream/60 font-sans text-xs tracking-wide mt-1">THE LAND OF VALOUR</p>
                            </div>
                        </div>
                        {/* Right: Scrolling Content */}
                        <div className="w-full lg:w-1/2 relative bg-background-dark border-t border-primary/10 lg:border-t-0">
                            <div className="max-w-xl mx-auto px-8 py-20 lg:py-32 flex flex-col gap-24 lg:gap-40">
                                {/* Card 1 */}
                                <article className="flex flex-col gap-6 group">
                                    <div className="flex items-center gap-3 text-primary/60 mb-2">
                                        <span className="text-sm font-sans tracking-widest uppercase">01. Heritage</span>
                                        <div className="h-[1px] w-12 bg-primary/40"></div>
                                    </div>
                                    <h2 className="font-display font-bold text-4xl md:text-5xl text-cream leading-tight group-hover:text-primary transition-colors duration-500">
                                        Born in the <br /> <span className="italic font-light text-primary">City of Valour</span>
                                    </h2>
                                    <p className="font-serif text-lg md:text-xl text-cream/80 leading-relaxed">
                                        Rooted in the ancient soil of <span className="text-white border-b border-primary/30 pb-0.5">Chittorgarh</span>, our craft echoes the valour and devotion of Mewar. This is not merely jewelry; it is a repository of history.
                                    </p>
                                    <p className="font-serif text-lg md:text-xl text-cream/80 leading-relaxed">
                                        Each piece is a testament to centuries of tradition, forged in fires that have witnessed the rise of legends. The intricate filigree work mimics the jalis of the Vijay Stambh, while the bold settings reflect the unyielding spirit of the Rajputana.
                                    </p>
                                    <Link href="/heritage" className="mt-4 flex items-center gap-3 text-primary uppercase text-xs font-bold tracking-[0.2em] group/btn w-fit">
                                        Read Our Story
                                        <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </article>
                                {/* Divider Glyph */}
                                <div className="flex justify-center py-4 opacity-30">
                                    <span className="material-symbols-outlined text-primary text-3xl">local_fire_department</span>
                                </div>
                                {/* Card 2 */}
                                <article className="flex flex-col gap-6 group">
                                    <div className="flex items-center gap-3 text-primary/60 mb-2">
                                        <span className="text-sm font-sans tracking-widest uppercase">02. Devotion</span>
                                        <div className="h-[1px] w-12 bg-primary/40"></div>
                                    </div>
                                    <h2 className="font-display font-bold text-4xl md:text-5xl text-cream leading-tight group-hover:text-primary transition-colors duration-500">
                                        Blessed by the <br /> <span className="italic font-light text-primary">Seth of Seths</span>
                                    </h2>
                                    <blockquote className="border-l-2 border-primary pl-6 my-4">
                                        <p className="font-display italic text-2xl text-primary leading-normal mb-2">
                                            "सांवरिया सेठ दे दे, तो बेड़ा पार है"
                                        </p>
                                        <footer className="text-xs font-sans uppercase tracking-widest text-cream/50">Local Saying</footer>
                                    </blockquote>
                                    <p className="font-serif text-lg md:text-xl text-cream/80 leading-relaxed">
                                        We craft more than jewelry; we craft devotion. Our designs are inspired by the divine grace of Sanwariya Seth. It is believed that gold purchased here carries the blessings of the Lord himself.
                                    </p>
                                    <p className="font-serif text-lg md:text-xl text-cream/80 leading-relaxed">
                                        From the auspicious <em className="text-white">Kundan</em> settings to the vibrant <em className="text-white">Meenakari</em> enameling, every stroke of the artisan's hand is a prayer offered in metal and stone.
                                    </p>
                                    <Link href="/collections" className="mt-4 flex items-center gap-3 text-primary uppercase text-xs font-bold tracking-[0.2em] group/btn w-fit">
                                        View Temple Collection
                                        <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </article>
                                {/* Decorative End Mark */}
                                <div className="flex justify-center py-10 opacity-30">
                                    <div className="h-24 w-[1px] bg-gradient-to-b from-primary via-primary to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer Preview */}
                <footer className="bg-near-black py-12 border-t border-primary/20">
                    <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-primary font-decorative text-2xl font-bold tracking-widest">SG</div>
                        <p className="text-cream/40 text-sm font-serif">© 2024 Sanwariya Gold. Chittorgarh.</p>
                    </div>
                </footer>
            </div>

        </>
    );
}
