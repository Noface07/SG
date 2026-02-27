import React from 'react';
import Link from 'next/link';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F7F2]">
            <div className="container mx-auto px-6 max-w-6xl">
                <h1 className="font-heading text-4xl text-maroon mb-12">My Sanctum</h1>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <nav className="flex flex-col space-y-2">
                            <Link href="/account/orders" className="p-4 font-label uppercase tracking-widest text-sm bg-white border border-gold/20 text-maroon hover:border-gold transition-colors shadow-sm">
                                My Commissions
                            </Link>
                            <Link href="/account/certificates" className="p-4 font-label uppercase tracking-widest text-sm bg-transparent border border-transparent text-foreground/70 hover:text-maroon transition-colors">
                                Digital Certificates
                            </Link>
                            <Link href="/account/wishlist" className="p-4 font-label uppercase tracking-widest text-sm bg-transparent border border-transparent text-foreground/70 hover:text-maroon transition-colors">
                                Wishlist
                            </Link>
                            <Link href="/account/profile" className="p-4 font-label uppercase tracking-widest text-sm bg-transparent border border-transparent text-foreground/70 hover:text-maroon transition-colors">
                                Profile Settings
                            </Link>
                            <button className="p-4 pt-12 font-label uppercase tracking-widest text-sm bg-transparent text-left text-foreground/40 hover:text-red-500 transition-colors">
                                Sign Out
                            </button>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
