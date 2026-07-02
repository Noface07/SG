'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import { MaroonButton } from '@/components/ui/MaroonButton';
import { CONTACT_INFO } from '@/lib/constants';

const STEPS = [
    { n: '01', title: 'Consultation', desc: 'Share your vision with our design concierge over chai, in person or on a video call.' },
    { n: '02', title: 'Design & Sketch', desc: 'Master artisans translate your story into hand-drawn motifs and a gold-and-stone blueprint.' },
    { n: '03', title: 'The Crafting', desc: 'Over 60 to 120 days, eight hands shape, enamel, and set your piece using centuries-old technique.' },
    { n: '04', title: 'Blessing & Delivery', desc: 'Your heirloom is offered at Sanwariya Ji Dham before reaching you in secure, insured passage.' },
];

const BUDGETS = ['₹1L – ₹3L', '₹3L – ₹5L', '₹5L – ₹10L', 'Above ₹10L'];

const inputClass = 'w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold';
const labelClass = 'block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2';

export default function BespokePage() {
    const [form, setForm] = useState({ name: '', occasion: '', budget: BUDGETS[0], vision: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `Namaste! I would like to commission a bespoke piece.\n\nName: ${form.name}\nOccasion: ${form.occasion}\nBudget: ${form.budget}\nVision: ${form.vision}`
        );
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${text}`, '_blank');
    };

    return (
        <>
            <PageHero
                eyebrow="Bespoke Commissions"
                title={<>Commission a <em className="italic font-light text-shimmer">Legacy</em></>}
                subtitle="From the first sketch to the final blessing, a piece that exists for you alone."
            />

            {/* Process */}
            <section className="bg-[#F9F7F2] py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={step.n}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.7, delay: i * 0.12 }}
                                className="bg-white border border-gold/20 p-8 shadow-sm flex flex-col gap-4"
                            >
                                <span className="font-label text-gold text-3xl">{step.n}</span>
                                <h3 className="font-heading text-2xl text-maroon">{step.title}</h3>
                                <p className="font-body text-foreground/70 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commission form */}
            <section className="bg-cream border-t border-gold/20 py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="text-center mb-12">
                        <span className="font-hindi text-5xl text-gold/30 block mb-4">ॐ</span>
                        <h2 className="font-heading text-3xl md:text-4xl text-maroon mb-3">Begin Your Consultation</h2>
                        <p className="font-body text-foreground/60">Tell us about the piece you dream of. Our concierge replies on WhatsApp within a day.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white border border-gold/20 p-8 md:p-10 shadow-sm space-y-6">
                        <div>
                            <label className={labelClass}>Your Name</label>
                            <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Full name" />
                        </div>
                        <div>
                            <label className={labelClass}>Occasion</label>
                            <input required type="text" value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className={inputClass} placeholder="Wedding, anniversary, temple offering..." />
                        </div>
                        <div>
                            <label className={labelClass}>Budget Range</label>
                            <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass}>
                                {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>Your Vision</label>
                            <textarea required rows={4} value={form.vision} onChange={(e) => setForm({ ...form, vision: e.target.value })} className={inputClass} placeholder="Describe motifs, stones, or a story you want the piece to carry" />
                        </div>
                        <MaroonButton type="submit" fullWidth>Send via WhatsApp</MaroonButton>
                    </form>
                </div>
            </section>
        </>
    );
}
