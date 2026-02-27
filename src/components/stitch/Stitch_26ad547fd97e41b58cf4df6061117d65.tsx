import React from 'react';
import Link from 'next/link';

export function Stitch_26ad547fd97e41b58cf4df6061117d65() {
    return (
        <>

            <div className="relative flex flex-col min-h-screen w-full">

                {/* Hero Section */}
                <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" data-alt="Cinematic shot of ancient Indian architecture in warm light" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeaXGQsX7HxgP2IyB_M5JZYo3M2V0DvaGrmLdbNNX7KO6J7TVIaiokHdHO4pjpIPmNThAWAkVdhzQrrpw8skpZr5YTAVyzkOktWzYRURE-iuBgnYnUu70MSCJTkg2WzUKp5Qa1_EijbEL2k-1ga10rhylC8AHHsd1u3sJ4ZvoDP9KZoAo1cnSGuahQLKZi-Azr3qJe1Qg4pikkH6Zt9T1cNTL9rFWFQ9BSy9UH-Svtu18Not_rRHQe03FPB6kh45_PoqUgooHKgA')" }}>
                    </div>
                    {/* Maroon Overlay */}
                    <div className="absolute inset-0 bg-[#4a0404]/35 mix-blend-multiply"></div>
                    {/* Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/40"></div>
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                        <span className="mb-6 text-sm font-bold tracking-[0.2em] text-primary uppercase font-cinzel">The Atelier</span>
                        <h1 className="mb-8 max-w-4xl text-5xl md:text-7xl lg:text-[84px] font-medium leading-[1.1] text-white font-cormorant italic">
                            Come, See the Gold <br className="hidden md:block" />Being Born.
                        </h1>
                        <Link href="/visit" className="mt-4 flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold tracking-wider text-background-dark transition-transform hover:scale-105 hover:bg-white">
                            BOOK A VISIT →
                        </Link>
                    </div>
                </div>
                {/* Location & Hours Section */}
                <div className="bg-background-dark px-4 py-16 md:px-10 lg:px-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white font-cormorant italic">Location &amp; Hours</h2>
                            <p className="mt-2 text-[#b9b49d]">We invite you to experience the craftsmanship firsthand in the heart of Chittorgarh.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Column: Info Cards */}
                            <div className="flex flex-col gap-6">
                                {/* Address */}
                                <div className="flex gap-4 rounded-xl border border-[#393628] bg-[#221f10] p-6 transition-all hover:border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-[28px]">location_on</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-white font-cinzel mb-1">Address</h3>
                                        <p className="text-[#b9b49d]">Old Bazaar, Near Water Stepwell,<br />Chittorgarh, Rajasthan 312001</p>
                                    </div>
                                </div>
                                {/* Hours */}
                                <div className="flex gap-4 rounded-xl border border-[#393628] bg-[#221f10] p-6 transition-all hover:border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-[28px]">schedule</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-white font-cinzel mb-1">Hours</h3>
                                        <p className="text-[#b9b49d]">Mon-Sat: 10:00 AM - 8:00 PM<br />Sunday: By Appointment Only</p>
                                    </div>
                                </div>
                                {/* Contact */}
                                <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-[#393628] bg-[#221f10] p-6 transition-all hover:border-primary/30 justify-between items-start sm:items-center">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary text-[28px]">call</span>
                                        <div>
                                            <h3 className="text-lg font-bold text-white font-cinzel mb-1">Contact</h3>
                                            <p className="text-[#b9b49d] font-mono">+91 98765 43210</p>
                                        </div>
                                    </div>
                                    <button className="whitespace-nowrap rounded-full border border-primary/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-background-dark transition-colors">
                                        Chat on WhatsApp
                                    </button>
                                </div>
                                {/* How to Reach */}
                                <div className="flex gap-4 rounded-xl border border-[#393628] bg-[#221f10] p-6 transition-all hover:border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-[28px]">train</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-white font-cinzel mb-1">How to Reach</h3>
                                        <div className="flex flex-col gap-2 mt-1">
                                            <div className="flex items-center gap-2 text-sm text-[#b9b49d]">
                                                <span className="material-symbols-outlined text-[16px]">flight</span>
                                                <span>Nearest Airport: Udaipur (UDR) - 2 hrs drive</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#b9b49d]">
                                                <span className="material-symbols-outlined text-[16px]">directions_railway</span>
                                                <span>Chittorgarh Junction - 15 mins away</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Column: Map */}
                            <div className="flex flex-col gap-4 h-full min-h-[400px]">
                                <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                                    {/* Placeholder for Google Map Embed */}
                                    <iframe allowFullScreen={true} className="map-sepia absolute inset-0 w-full h-full" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.568324424794!2d74.6224!3d24.8887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a3068694065f%3A0x634f195434771077!2sChittorgarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{ "border": "0" }} title="Map of Chittorgarh location" width="100%">
                                    </iframe>
                                </div>
                                <div className="flex items-center gap-2 text-primary/80 text-sm justify-center">
                                    <span className="material-symbols-outlined text-[18px]">location_searching</span>
                                    <span>Landmark: 200 metres from the old water stepwell</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* What to Expect Section */}
                <div className="bg-[#1c1a13] px-4 py-20 md:px-10 lg:px-20 border-t border-[#393628]">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-white font-cormorant italic">What to Expect</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1: Arrival */}
                            <div className="group relative overflow-hidden rounded-xl bg-[#221f10] p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#393628] text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined">local_cafe</span>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white font-cinzel">The Arrival</h3>
                                <p className="text-[#b9b49d] leading-relaxed">Step into our north-light room. Begin with a warm cup of masala chai as you settle into the history of the space.</p>
                            </div>
                            {/* Card 2: The Experience */}
                            <div className="group relative overflow-hidden rounded-xl bg-[#221f10] p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#393628] text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined">diamond</span>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white font-cinzel">The Experience</h3>
                                <p className="text-[#b9b49d] leading-relaxed">Watch our master Karigaars at work. Touch the raw stones and see sketches transform into gold before your eyes.</p>
                            </div>
                            {/* Card 3: No Pressure */}
                            <div className="group relative overflow-hidden rounded-xl bg-[#221f10] p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#393628] text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined">favorite</span>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white font-cinzel">No Pressure</h3>
                                <p className="text-[#b9b49d] leading-relaxed">This is a sanctuary of art, not just a store. There is no obligation to purchase, only to appreciate.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Virtual Tour Section */}
                <div className="bg-background-dark px-4 py-20 md:px-10 lg:px-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                    <div className="mx-auto max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 rounded-2xl bg-[#221f10] border border-[#393628] p-4 lg:p-0 overflow-hidden">
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative rounded-xl lg:rounded-none lg:rounded-l-xl overflow-hidden group">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Person holding a tablet showing a video call consultation" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyHtX4hSSztpkL2TT12CSPXQwxJQPYi1U3JhIjlk4DIG_jxtQwlrCpCUpC1IsT2-uHl1pZpFOp0-tg5J_-wGOmbL3GaFAOkqWkeV6XYYcgOX6uoe6V4tJq7yLCuKBrc_Z4QZWaBexcJOsrqqnEMVkMGNmr8t8gEei99hgr79ttc6fZ4jEUDwT5wwT_KNxiwv3geMExvUb3pPD-QklsfKoUCa2nMNa3FCO04G-Drosa25b-YnQjJEvunorlwedTRej9m267KK0_Rg')" }}>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden"></div>
                            </div>
                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 lg:pr-16 lg:py-12 flex flex-col items-start px-4 pb-8 lg:px-0 lg:pb-0">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 font-cinzel">For Out-of-Town Clients</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-cormorant italic leading-tight">
                                    Can't make it to <br />Chittorgarh?
                                </h2>
                                <p className="text-[#b9b49d] mb-8 text-lg leading-relaxed max-w-md">
                                    Experience the Virtual Atelier Visit. We bring the showroom to your screen via a dedicated high-definition WhatsApp video consultation.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <Link href="/visit" className="flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold tracking-wider text-background-dark transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(236,200,19,0.3)]">
                                        BOOK VIDEO CONSULTATION →
                                    </Link>
                                </div>
                                <div className="mt-8 flex items-center gap-3 text-sm text-[#b9b49d]/70">
                                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span>Live slots available for today</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer (Simple) */}
                <footer className="border-t border-[#393628] bg-background-dark py-12 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="size-4 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                            </svg>
                        </div>
                        <span className="text-white font-cinzel font-bold text-lg">Sanwariya Gold</span>
                    </div>
                    <p className="text-[#b9b49d] text-sm">© 2024 Sanwariya Gold. All rights reserved.</p>
                </footer>
            </div>

        </>
    );
}
