import React from 'react';

export default function ProfilePage() {
    return (
        <div className="animate-fade-in">
            <h2 className="font-heading text-3xl text-maroon mb-8">Profile Settings</h2>

            <div className="bg-white border border-gold/20 p-6 md:p-8 shadow-sm">
                <form className="max-w-md space-y-6">
                    <div>
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Full Name</label>
                        <input type="text" defaultValue="Guest User" className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                    </div>
                    <div>
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Email Address</label>
                        <input type="email" defaultValue="guest@example.com" className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                    </div>
                    <div>
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Phone Number</label>
                        <input type="tel" defaultValue="+91 98765 43210" className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                    </div>
                    <div className="pt-4">
                        <button type="button" className="bg-maroon text-[#F5EDD8] px-8 py-4 font-label text-sm uppercase tracking-widest hover:bg-[#2A070E] transition-colors">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
