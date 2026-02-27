'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_#3D0A14_0%,_#0D0906_100%)] dark-grain-overlay">
            <div className="absolute top-32 left-6 md:top-40 md:left-12 z-20 opacity-80 animate-fade-in">
                <p className="font-body italic text-xs md:text-sm tracking-[0.1em] text-[#F5EDD8] border-l border-gold pl-3 py-1">
                    EST. IN MEWAR <br />
                    <span className="uppercase not-italic font-sans text-[10px] tracking-widest">Chittorgarh, Rajasthan</span>
                </p>
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-20"
            >
                <h1 className="font-heading italic text-6xl md:text-8xl lg:text-9xl text-gold leading-none tracking-tighter drop-shadow-2xl">
                    Sanwariya
                </h1>
                <h2 className="font-label text-2xl md:text-4xl text-[#F5EDD8] tracking-[0.2em] -mt-2 md:-mt-4 mb-6 drop-shadow-lg">
                    GOLD
                </h2>

                <div className="flex items-center justify-center gap-4 w-full max-w-md opacity-60 mb-6">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                    <div className="w-2 h-2 rotate-45 border border-gold"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                </div>

                <p className="font-body text-lg md:text-2xl text-[#F5EDD8]/90 italic font-light tracking-wide max-w-lg mb-12">
                    Where the blessings of the Seth of Seths are wrought in gold
                </p>

                <div className="mt-8 md:mt-12 w-64 md:w-96 relative group cursor-pointer perspective-1000">
                    <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full group-hover:bg-gold/30 transition-all duration-700"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIRGBB1glR54gvU19LoGEF6MoJbpLLx8jF5cSmEuCSa0OJ_NM-Hz39-UuEr6CFpNXH3pngoaFUzkaoVVFRi7Tl6LW0WgtjQShkS7mJPBv_wuBAy85cn8Wv6HyAHms5vrQ-sMoD2S6GoFWD-Ull-6qUerudzBt-bVWLoqQ3YGhi98taLU87uMhTK2EMKP5SzbJZZAMMeLzjJ9TDhbkr67hmDJKV16d8xzdGSZf9w1Pwp67gzqXUgs-RWpfIjv6NDtjVj-t5hPpgtQ"
                        alt="Intricate golden Jadau bridal necklace glowing in dark"
                        width={600}
                        height={600}
                        className="relative z-10 w-full h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out object-contain rounded-lg"
                        priority
                    />
                </div>
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-sans">Scroll to discover</span>
                <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
            </div>
        </section>
    );
}
