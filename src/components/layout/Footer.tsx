import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';

export function Footer() {
    return (
        <footer className="bg-maroon-dark text-background dark-grain-overlay border-t-4 border-gold pt-20 pb-10">
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h2 className="font-heading text-3xl text-gold mb-4">SANWARIYA</h2>
                        <p className="font-label text-xs tracking-[0.2em] uppercase opacity-80 mb-6">Chittorgarh</p>
                        <p className="font-body text-background/80 text-lg leading-relaxed mb-6 italic">
                            &quot;Crafting the heritage of Mewar in pure gold, passing down legacies from our family to yours.&quot;
                        </p>
                        <p className="font-hindi text-gold text-2xl">श्री सांवरिया जी की जय</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-label text-gold tracking-widest uppercase mb-6 text-sm">Collections</h3>
                        <ul className="space-y-4 font-body text-background/80">
                            <li><Link href="/collections?category=necklaces" className="hover:text-gold transition-colors">Necklaces & Haar</Link></li>
                            <li><Link href="/collections?category=earrings" className="hover:text-gold transition-colors">Earrings & Jhumkas</Link></li>
                            <li><Link href="/collections?category=bangles" className="hover:text-gold transition-colors">Bangles & Kadas</Link></li>
                            <li><Link href="/collections?category=bridal-sets" className="hover:text-gold transition-colors">Bridal Parures</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-label text-gold tracking-widest uppercase mb-6 text-sm">The Atelier</h3>
                        <ul className="space-y-4 font-body text-background/80">
                            <li><Link href="/heritage" className="hover:text-gold transition-colors">Our Legacy</Link></li>
                            <li><Link href="/visit" className="hover:text-gold transition-colors">Visit Boutique</Link></li>
                            <li><Link href="/bespoke" className="hover:text-gold transition-colors">Bespoke Commissions</Link></li>
                            <li><Link href="/policies/shipping" className="hover:text-gold transition-colors">Safe Passage (Shipping)</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-label text-gold tracking-widest uppercase mb-6 text-sm">Concierge</h3>
                        <ul className="space-y-4 font-body text-background/80">
                            <li>WhatsApp: <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`} className="hover:text-gold transition-colors">{CONTACT_INFO.whatsapp}</a></li>
                            <li>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors">{CONTACT_INFO.email}</a></li>
                            <li className="pt-4 text-sm leading-relaxed max-w-[200px]">{CONTACT_INFO.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-body text-background/60">
                    <p>© {new Date().getFullYear()} Sanwariya Gold. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/policies/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
                        <Link href="/policies/returns" className="hover:text-gold transition-colors">30-Day Promise</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
