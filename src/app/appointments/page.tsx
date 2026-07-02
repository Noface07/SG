'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import { MaroonButton } from '@/components/ui/MaroonButton';
import { CONTACT_INFO } from '@/lib/constants';

const TYPES = ['Bridal Consultation', 'Bespoke Commission', 'Signature Collection Viewing', 'Valuation & Buyback'];
const SLOTS = ['11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

const EXPECT = [
    'A private, unhurried hour with our design concierge',
    'Pieces drawn from the vault to match your occasion',
    'Gold rate and making charge transparency, in writing',
    'Chai, always',
];

const inputClass = 'w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold';
const labelClass = 'block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2';

export default function AppointmentsPage() {
    const [form, setForm] = useState({ name: '', phone: '', date: '', slot: SLOTS[0], type: TYPES[0] });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `Namaste! I would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nType: ${form.type}\nDate: ${form.date}\nPreferred time: ${form.slot}`
        );
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${text}`, '_blank');
    };

    return (
        <>
            <PageHero
                eyebrow="Private Appointments"
                title={<>Reserve the <em className="italic font-light text-shimmer">Atelier</em></>}
                subtitle="An hour set aside entirely for you, your occasion, and the vault."
            />

            <section className="bg-[#F9F7F2] py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* What to expect */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <h2 className="font-heading text-3xl text-maroon mb-6">What to Expect</h2>
                        <ul className="space-y-5">
                            {EXPECT.map((item) => (
                                <li key={item} className="flex gap-4 items-start font-body text-lg text-foreground/75">
                                    <span className="text-gold mt-1 text-sm">❖</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 font-body text-sm text-foreground/50 border-l-2 border-gold/40 pl-4">
                            Appointments are confirmed on WhatsApp within a few hours. There is never a charge, and never an obligation.
                        </p>
                    </motion.div>

                    {/* Booking form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 bg-white border border-gold/20 p-8 md:p-10 shadow-sm space-y-6 h-fit"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>Your Name</label>
                                <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Full name" />
                            </div>
                            <div>
                                <label className={labelClass}>Phone</label>
                                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+91" />
                            </div>
                        </div>
                        <div>
                            <label className={labelClass}>Purpose of Visit</label>
                            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={inputClass}>
                                {TYPES.map((t) => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClass}>Preferred Date</label>
                                <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Preferred Time</label>
                                <select value={form.slot} onChange={(e) => setForm({ ...form, slot: e.target.value })} className={inputClass}>
                                    {SLOTS.map((s) => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                        </div>
                        <MaroonButton type="submit" fullWidth>Request via WhatsApp</MaroonButton>
                    </motion.form>
                </div>
            </section>
        </>
    );
}
