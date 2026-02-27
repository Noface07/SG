import React from 'react';
import Link from 'next/link';

export function Stitch_3d827f1b76854de8846d861daedbd00e() {
    return (
        <>


            {/* Section A: Hero */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0" data-alt="Silhouette of Chittorgarh fort against a sunset sky" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZMYqk9fxaIQCzGJPKbkzmq_cQuZ6V-TYHpd3IYwS-ngs_mYCZsf8k88HSvxEGWgaik7kh9kFN8tt9CBn-ABB2Edx5XTYAsfmffRv5wH3yxSBfSm3-jz_Re5OKDUiQbreEbzXXE6JS73W1rYhzXBjuId6rTPRQLDSaasCW62FYjZL5qb2IvrgA1xVaAWNWXJ36_c-5yYLokY2IxXZi-zuJtd1uLh6j2Ci02aFPxOrFkllFEnECwi30vkdbSy7Z_ZOBwAsucL0mFw')" }}>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-hero-gradient z-10"></div>
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-6 animate-fade-in-up">
                    <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-2">Est. 1640 • Chittorgarh</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-gradient-gold mt-24">
                        We Do Not Make Jewellery.<br />We Make Heirlooms.
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mt-4 leading-relaxed">
                        Journey through centuries of craftsmanship, where every gem tells the saga of Rajputana valour and grace.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary hover:bg-yellow-500 text-background-dark font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                            Explore Our Origins
                        </button>
                        <Link href="/collections" className="bg-transparent border border-gray-500 hover:border-primary text-white hover:text-primary font-medium py-3 px-8 rounded-full transition-colors backdrop-blur-sm">
                            View Collections
                        </Link>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
            </section>
            {/* Section B: Sticky Scroll Heritage */}
            <section className="relative bg-background-dark py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Sticky Image Left */}
                    <div className="hidden lg:block relative h-full">
                        <div className="sticky top-32 w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-[#393328]">
                            <img alt="Intricate architectural details of ancient Indian fort" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[20s]" data-alt="Close up of stone carving on Indian temple wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnU7em_2jUuP9Wwit9daQg_wiCbxUiaWWstqDhC5KNbR-R2FVVMZI0Ftpt3D5_tf9TDqLoTZ584WMGJY_SDbkctVVVvaBP5Xo6H3rgPQYf_ecJz7sCAK-ilThu0se_XQ7bmbG0gbIBCZbyJ9VXWYAay3p1m_QjUKmmPglfnNiiUYVt8MIci82_qQE6t46ScgICdBn09XHsvfhPjCSSjZM0yCPnE4FBJxid3Uxfqkjjy4t7kI8UHxgIdrt-K6PItjpBVbl1cNM8ng" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white/80 text-sm italic">"Stone and Gold share the same eternal soul."</p>
                            </div>
                        </div>
                    </div>
                    {/* Scrolling Content Right */}
                    <div className="flex flex-col gap-24 lg:py-12">
                        {/* Card 1 */}
                        <div className="flex flex-col gap-6">
                            <span className="text-primary font-bold tracking-widest text-sm">01 — ORIGINS</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Architectural Marvels</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Our designs are direct descendants of the intricate stone carvings found on the Vijaya Stambha. The geometric precision of our Jali work mirrors the windows of the Rani Padmini Palace, allowing light to dance through gold just as it does through ancient sandstone.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="bg-[#27231c] p-4 rounded-lg border border-[#393328]">
                                    <span className="material-symbols-outlined text-primary mb-2">temple_hindu</span>
                                    <h4 className="text-white font-bold">Vijaya Stambha</h4>
                                    <p className="text-xs text-gray-500 mt-1">Design Inspiration</p>
                                </div>
                                <div className="bg-[#27231c] p-4 rounded-lg border border-[#393328]">
                                    <span className="material-symbols-outlined text-primary mb-2">architecture</span>
                                    <h4 className="text-white font-bold">Jali Work</h4>
                                    <p className="text-xs text-gray-500 mt-1">Signature Technique</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col gap-6">
                            <span className="text-primary font-bold tracking-widest text-sm">02 — ROYALTY</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Adorning Nobility</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                For generations, Sanwariya Gold has been the chosen jeweler for the royal courts of Mewar. The heavy uncut polki diamonds and deep red rubies signify the blood and valor of the Rajputana spirit, preserved in designs that refuse to age.
                            </p>
                            <img alt="Vintage Indian royal jewelry illustration" className="w-full h-64 object-cover rounded-lg border border-[#393328] opacity-80" data-alt="Opulent gold necklace on dark velvet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoYGM8GjPzxs2zSZ97wuddDuWG5899zfbMC8zQfnGQiJNgi2Cj2Eb7LnbhayzxSohojoPe1-CtDbRL6jwTxOlpnfzai7IURpfsWOu8HfusVD9tNuJOgpF_fXznqxHmPghUHuWOqZKbRcYenEocf6skIDXz3WtrZB3bxlhZslFykQfjWeBwL3kWcIg-SnX-bETnOvoeH4x9Loe2o0jGolnb6nULk8JdRQsONwfu7bSQAG3I23YT7gKOHm381YRCJmhHR0afbwWgUg" />
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col gap-6">
                            <span className="text-primary font-bold tracking-widest text-sm">03 — CRAFT</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Timeless Techniques</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We do not embrace modern shortcuts. Our Jadau setting is done by hand, using pure gold foils. The Meenakari enameling is fired in traditional clay kilns. We preserve the "Thewa" art form—fusing gold on glass—keeping alive a secret known only to a few families in Rajasthan.
                            </p>
                            <button className="w-fit text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-colors">
                                Watch the Process
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section C: Devotional Section */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background-dark via-[#2a1a10] to-background-dark text-center px-4">
                {/* Decorative Pattern Background */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
                    <div className="w-16 h-1 bg-white/30 rounded-full mb-4"></div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-md opacity-90">
                        श्री सांवरिया सेठ
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-200 mt-2">The Seth of Seths</h3>
                    <div className="w-24 h-24 rounded-full border-2 border-amber-200/50 flex items-center justify-center my-4">
                        <span className="material-symbols-outlined text-4xl text-amber-200">spa</span>
                    </div>
                    <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                        Our craft is a devotion to the divine blessing of Lord Sanwariya. Before a single stone is set, the gold is offered in prayer. Every piece we create is consecrated in the spirit of service, gratitude, and eternal faith. We are but custodians of his wealth.
                    </p>
                    <button className="mt-8 bg-primary hover:bg-[#d4b20b] text-background-dark font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2">
                        <span>Read the Legend</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </section>
            {/* Section D: Karigaar Profiles */}
            <section className="bg-background-light dark:bg-[#1c1914] py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">The Hands Behind the Gold</span>
                            <h2 className="text-4xl font-bold text-white mt-2">Meet Our Karigaars</h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-right md:text-left">
                            Generations of skill passed down from father to son. These are the master artisans who breathe life into metal.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Karigaar 1 */}
                        <div className="group relative bg-[#27231c] rounded-xl overflow-hidden border border-[#393328] hover:border-primary/50 transition-colors">
                            <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img alt="Portrait of Rameshji Soni" className="w-full h-full object-cover" data-alt="Elderly Indian man with a turban looking focused" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEdxYpSiqYP5DbJddbi9naW5Yrg8U8Ll8kdudyMMF7Ft0Btan-TDull4o19Gyc1HwuIKhL9McUKdnfXDnI2SSH5amHV8sgYGNTgcCLQxpijypLPakdXpzOVisV9lLyUAXLaBKET4ybJKyAbUx8JbHGejne1YbiVb3VrSARc4MmXuQ0X9Z5kHnrlRlMJS1StKzMPSTQ4YZDuKCujUfQ-abGVCtmZ8cK9xgyiqfHUpwV6ukGsK82_Fqo59M6irgX5_RBHNQemAIqXg" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">Rameshji Soni</h3>
                                <p className="text-primary text-sm font-medium mb-4">Master Jadau Setter • 45 Years Exp.</p>
                                <hr className="border-[#393328] mb-4" />
                                <p className="text-gray-400 italic font-serif">"Gold is soft, like a child. You must handle it with patience, or it will never listen to the shape you desire."</p>
                            </div>
                        </div>
                        {/* Karigaar 2 */}
                        <div className="group relative bg-[#27231c] rounded-xl overflow-hidden border border-[#393328] hover:border-primary/50 transition-colors">
                            <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img alt="Portrait of Sundaribai Kumhar" className="w-full h-full object-cover" data-alt="Indian woman artisan focused on work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl68HSL_Yxdoq1WjoMRyZlZjoEpJNWQUnPkkpO1Z3UVC9q31orm9_tpStoXPd4V8sD6exIznpcxDobF0aSMAbRqnbmrOHexI6Zfa7Gf6FKAvIjnry_Ey_OhDS1oh60HD3ILXacoaYwUFFsXtt7AwHuTBmK9LukJddjo9Pp_cUpf8m6i-AONngfEX-1dCWL29l1athPuJkCL-noRmQq8Wj85H0hl_Kdk-7o3UU5YDgC5gkFMzu3xiqDVqCAmXZg1Y0DyeOHA475_Q" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">Sundaribai Kumhar</h3>
                                <p className="text-primary text-sm font-medium mb-4">Meenakari Specialist • 32 Years Exp.</p>
                                <hr className="border-[#393328] mb-4" />
                                <p className="text-gray-400 italic font-serif">"Color is the soul of the jewelry. Without Meena, the gold is just a body without a heartbeat."</p>
                            </div>
                        </div>
                        {/* Karigaar 3 */}
                        <div className="group relative bg-[#27231c] rounded-xl overflow-hidden border border-[#393328] hover:border-primary/50 transition-colors">
                            <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img alt="Portrait of Dhanraj Chiteria" className="w-full h-full object-cover" data-alt="Indian man with glasses smiling gently" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvo0F4xNmPmDdiq6a6F8v6uS49PHpy31eZbmBlE9K7VX7vI1JqwkMOUAQJnXoS5Vuvv0UHIN50yIFqMcny8wP5Z3Rv1p0soin-420h_ftEHMCRMUcCGFApFt8ssOQpw6v_wTA8oML3USQNk6P2p1x2w4XJXfE7FpyS5MONH0hmDeyvcr_KgSDtv-817hF6QyzZxH11N6VqV2J4dNGSd1CulVZlhOni3lA1q6Fzv-qbQNpSXIzOlz0QVjWN2_5oRJg7WjHLSNxbFA" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">Dhanraj Chiteria</h3>
                                <p className="text-primary text-sm font-medium mb-4">Head Sculptor • 28 Years Exp.</p>
                                <hr className="border-[#393328] mb-4" />
                                <p className="text-gray-400 italic font-serif">"I don't invent designs. I just uncover what the stone was always meant to be."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section E: Timeline */}
            <section className="bg-background-dark py-24 border-t border-[#393328]">
                <div className="max-w-[1440px] mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold text-white mb-16">The Golden Era Timeline</h2>
                    <div className="relative">
                        {/* Golden Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 z-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {/* Era 1 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-4 h-4 rounded-full bg-primary mb-4 ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all"></div>
                                <span className="text-2xl font-black text-white mb-2">1640s</span>
                                <h4 className="text-primary font-bold text-lg mb-2">Foundation</h4>
                                <p className="text-sm text-gray-400 max-w-[200px]">Established in the bylanes of old Chittor under royal decree.</p>
                            </div>
                            {/* Era 2 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-4 h-4 rounded-full bg-[#393328] border-2 border-primary mb-4 group-hover:bg-primary transition-colors"></div>
                                <span className="text-2xl font-black text-white mb-2">1857</span>
                                <h4 className="text-primary font-bold text-lg mb-2">Preservation</h4>
                                <p className="text-sm text-gray-400 max-w-[200px]">Hidden archives protected the ancient molds during turbulent times.</p>
                            </div>
                            {/* Era 3 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-4 h-4 rounded-full bg-[#393328] border-2 border-primary mb-4 group-hover:bg-primary transition-colors"></div>
                                <span className="text-2xl font-black text-white mb-2">1980s</span>
                                <h4 className="text-primary font-bold text-lg mb-2">Global Stage</h4>
                                <p className="text-sm text-gray-400 max-w-[200px]">Sanwariya Gold exhibited in Paris, bringing Kundan to the world.</p>
                            </div>
                            {/* Era 4 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-4 h-4 rounded-full bg-primary mb-4 ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all"></div>
                                <span className="text-2xl font-black text-white mb-2">2024</span>
                                <h4 className="text-primary font-bold text-lg mb-2">Digital Legacy</h4>
                                <p className="text-sm text-gray-400 max-w-[200px]">Launching the heirloom collection for the modern connoisseur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-[#0f0e0b] border-t border-[#393328] pt-16 pb-6">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-primary text-2xl">diamond</span>
                                <h3 className="text-white font-bold text-lg uppercase tracking-wider">Sanwariya Gold</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Crafting heirlooms since 1640. A tribute to the eternal artistry of Rajasthan.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Boutiques</h4>
                            <ul className="flex flex-col gap-3 text-sm text-gray-400">
                                <li><Link className="hover:text-primary transition-colors" href="#">Chittorgarh Flagship</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="#">Udaipur City Palace</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="#">Jaipur Johari Bazar</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="#">Mumbai Colaba</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Customer Care</h4>
                            <ul className="flex flex-col gap-3 text-sm text-gray-400">
                                <li><Link className="hover:text-primary transition-colors" href="#">Book an Appointment</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="#">Care Guide</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="#">Certification</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="/shipping-returns">Shipping &amp; Returns</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Newsletter</h4>
                            <p className="text-gray-500 text-sm mb-4">Receive invitations to private viewings.</p>
                            <div className="flex w-full">
                                <input className="bg-[#181611] border border-[#393328] text-white text-sm px-4 py-2 w-full focus:outline-none focus:border-primary" placeholder="Your Email" type="email" />
                                <button className="bg-primary text-background-dark px-4 py-2 font-bold hover:bg-white transition-colors">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#393328] pt-8 text-xs text-gray-600">
                        <p>© 2024 Sanwariya Gold. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link className="hover:text-white transition-colors" href="/policies/terms">Privacy Policy</Link>
                            <Link className="hover:text-white transition-colors" href="/shipping-returns">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
