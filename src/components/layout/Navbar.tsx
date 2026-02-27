'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { items, openDrawer } = useCartStore();

    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = `${isHome ? 'fixed' : 'sticky'} top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || !isHome
        ? 'bg-background/90 backdrop-blur-md border-gold/20 text-foreground py-4'
        : 'bg-transparent border-transparent text-white py-6'
        }`;

    const linkClass = (path: string) =>
        `font-label tracking-widest uppercase text-sm transition-colors hover:text-gold ${pathname === path ? 'text-gold' : ''}`;

    return (
        <nav className={navClasses}>
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-current"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Links - Left */}
                <div className="hidden lg:flex items-center space-x-8 flex-1">
                    <Link href="/collections" className={linkClass('/collections')}>Collections</Link>
                    <Link href="/heritage" className={linkClass('/heritage')}>Heritage</Link>
                </div>

                {/* Logo */}
                <Link href="/" className="flex-1 lg:flex-none text-center">
                    <h1 className="font-heading text-3xl md:text-4xl tracking-wider text-gold">SANWARIYA</h1>
                    <p className="font-label text-[10px] md:text-xs tracking-[0.3em] uppercase mt-1 opacity-80">Chittorgarh</p>
                </Link>

                {/* Desktop Links - Right */}
                <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
                    <Link href="/bespoke" className={linkClass('/bespoke')}>Bespoke</Link>
                    <Link href="/visit" className={linkClass('/visit')}>Atelier</Link>

                    <div className="flex items-center space-x-6 ml-4 border-l pl-8 border-current/20">
                        <Link href="/account/wishlist" className="hover:text-gold transition-colors">
                            <Heart size={20} className="stroke-1" />
                        </Link>
                        <Link href="/account" className="hover:text-gold transition-colors">
                            <User size={20} className="stroke-1" />
                        </Link>
                        <button onClick={openDrawer} className="hover:text-gold transition-colors relative">
                            <ShoppingBag size={20} className="stroke-1" />
                            {items.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
                                    {items.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Cart Button */}
                <div className="lg:hidden">
                    <button onClick={openDrawer} className="hover:text-gold transition-colors relative">
                        <ShoppingBag size={24} className="stroke-1" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
                                {items.length}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-gold/20 shadow-xl">
                    <div className="flex flex-col p-6 space-y-6 text-foreground">
                        <Link href="/collections" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/collections')}>Collections</Link>
                        <Link href="/heritage" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/heritage')}>Heritage</Link>
                        <Link href="/bespoke" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/bespoke')}>Bespoke</Link>
                        <Link href="/visit" onClick={() => setIsMobileMenuOpen(false)} className={linkClass('/visit')}>Atelier</Link>
                        <div className="pt-6 border-t border-gold/20 flex space-x-8">
                            <Link href="/account/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 font-label text-sm uppercase tracking-widest">
                                <Heart size={18} /> <span>Wishlist</span>
                            </Link>
                            <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 font-label text-sm uppercase tracking-widest">
                                <User size={18} /> <span>Account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
