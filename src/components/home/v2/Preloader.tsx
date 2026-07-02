'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = 'SANWARIYA'.split('');

export function Preloader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 2300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D0906]"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-hindi text-gold text-xl md:text-2xl mb-6"
                    >
                        श्री सांवरिया जी की जय
                    </motion.p>
                    <div className="flex overflow-hidden">
                        {LETTERS.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: '110%' }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.4 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="font-heading text-4xl md:text-6xl text-cream tracking-[0.2em] inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
                        className="mt-8 h-px w-48 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
