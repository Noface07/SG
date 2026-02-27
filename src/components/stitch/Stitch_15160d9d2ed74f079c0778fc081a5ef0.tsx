import React from 'react';
import Link from 'next/link';

export function Stitch_15160d9d2ed74f079c0778fc081a5ef0() {
  return (
    <>

      {/* Bespoke Section */}
      <div className="relative w-full flex flex-col min-h-screen">

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row flex-grow">
          {/* Left Column: Emotional Copy & Trust Icons (Dark) */}
          <div className="w-full lg:w-1/2 bg-background-dark text-white p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            {/* Subtle background texture/pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ "backgroundImage": "radial-gradient(#C5A059 1px, transparent 1px)", "backgroundSize": "20px 20px" }}></div>
            <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
              <span className="text-gold-accent tracking-[0.2em] text-sm font-bold uppercase mb-6 block border-b border-gold-accent/30 pb-2 w-fit">Bespoke Jadau</span>
              <h1 className="text-4xl lg:text-6xl font-medium leading-tight mb-8 text-white">
                Commission Your <br />
                <span className="text-gold-accent italic">Legacy</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-16 font-light">
                Every piece of Sanwariya Gold is a narrative of devotion. Collaborate with our master artisans to breathe life into your vision, crafting an heirloom that transcends generations and tells your unique story.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
                <div className="flex flex-col gap-3 group">
                  <span className="material-symbols-outlined text-gold-accent text-4xl group-hover:scale-110 transition-transform duration-300">construction</span>
                  <div>
                    <h3 className="text-white font-medium text-lg">Master Craftsmanship</h3>
                    <p className="text-slate-400 text-sm mt-1">Artisans with decades of lineage.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 group">
                  <span className="material-symbols-outlined text-gold-accent text-4xl group-hover:scale-110 transition-transform duration-300">diamond</span>
                  <div>
                    <h3 className="text-white font-medium text-lg">Ethically Sourced</h3>
                    <p className="text-slate-400 text-sm mt-1">Certified conflict-free gold and gems.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 group">
                  <span className="material-symbols-outlined text-gold-accent text-4xl group-hover:scale-110 transition-transform duration-300">verified_user</span>
                  <div>
                    <h3 className="text-white font-medium text-lg">Lifetime Warranty</h3>
                    <p className="text-slate-400 text-sm mt-1">Enduring care for your heirloom.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Form (Cream Paper Style) */}
          <div className="w-full lg:w-1/2 bg-cream-paper flex items-center justify-center p-8 lg:p-20 relative">
            {/* Decorative corner flourish */}
            <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-primary/10 rounded-bl-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-primary/10 rounded-tr-3xl pointer-events-none"></div>
            <div className="w-full max-w-md bg-white/50 backdrop-blur-sm p-8 lg:p-12 shadow-xl rounded-xl border border-primary/5">
              <h2 className="text-3xl text-primary font-medium mb-8 text-center border-b border-primary/10 pb-4">Start Your Consultation</h2>
              <form className="flex flex-col gap-8">
                {/* Name */}
                <div className="relative group">
                  <input className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-primary focus:ring-0" id="name" placeholder=" " type="text" />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-primary/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" htmlFor="name">Your Name</label>
                </div>
                {/* Email */}
                <div className="relative group">
                  <input className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-primary focus:ring-0" id="email" placeholder=" " type="email" />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-primary/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" htmlFor="email">Email Address</label>
                </div>
                {/* Row: Occasion & Budget */}
                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="relative group flex-1">
                    <input className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-primary focus:ring-0" id="occasion" placeholder=" " type="text" />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-primary/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" htmlFor="occasion">Occasion</label>
                  </div>
                  <div className="relative group flex-1">
                    <select className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-primary focus:ring-0 appearance-none text-slate-500" id="budget">
                      <option disabled={true} hidden={true} selected={true} value=""></option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                      <option value="5L+">₹5,00,000+</option>
                    </select>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-primary/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary" htmlFor="budget">Budget Range</label>
                  </div>
                </div>
                {/* File Upload */}
                <div className="relative mt-2">
                  <label className="block text-sm font-medium text-primary/80 mb-2">Upload Inspiration (Optional)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-primary/20 border-dashed rounded-lg cursor-pointer bg-cream-paper/50 hover:bg-cream-paper transition-colors" htmlFor="dropzone-file">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <span className="material-symbols-outlined text-primary/40 text-3xl mb-2">cloud_upload</span>
                        <p className="text-xs text-primary/60">SVG, PNG, JPG or GIF</p>
                      </div>
                      <input className="hidden" id="dropzone-file" type="file" />
                    </label>
                  </div>
                </div>
                {/* Button */}
                <button className="w-full bg-primary hover:bg-[#921313] text-white font-bold py-4 px-6 rounded-none uppercase tracking-widest text-sm transition-all duration-300 shadow-lg hover:shadow-xl mt-4 flex items-center justify-center gap-2 group" type="submit">
                  Request Consultation
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <section className="py-24 px-4 sm:px-8 bg-cream-paper relative overflow-hidden">
          {/* Large decorative quote mark background */}
          <div className="absolute top-10 left-10 text-gold-accent/10 text-[20rem] font-serif leading-none select-none pointer-events-none">“</div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-bold">Voices of Trust</span>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mt-4 mb-6">Stories of Heritage</h2>
              <div className="h-1 w-24 bg-gold-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 shadow-sm border border-[#e5dcdc] relative group hover:shadow-md transition-shadow duration-300 rounded-lg">
                <span className="material-symbols-outlined text-gold-accent text-4xl mb-4">format_quote</span>
                <p className="text-slate-600 mb-8 leading-relaxed italic">
                  "The craftsmanship exceeded my expectations. The bespoke necklace for my daughter's wedding wasn't just jewelry; it was a blessing crafted in gold. The team understood every nuance of our family tradition."
                </p>
                <div className="flex items-center gap-4 border-t border-[#e5dcdc] pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                    {/* Placeholder avatar pattern */}
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary font-bold">KM</div>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-lg leading-none mb-1">Kavita Meena</h4>
                    <span className="text-slate-400 text-xs uppercase tracking-wider">Jaipur</span>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 shadow-sm border border-[#e5dcdc] relative group hover:shadow-md transition-shadow duration-300 rounded-lg mt-0 md:-mt-4">
                <span className="material-symbols-outlined text-gold-accent text-4xl mb-4">format_quote</span>
                <p className="text-slate-600 mb-8 leading-relaxed italic">
                  "I was hesitant to order such a high-value item online, but the transparency and the video consultations put me at ease. The Polki set is stunning and came with all the certification promised."
                </p>
                <div className="flex items-center gap-4 border-t border-[#e5dcdc] pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                    {/* Placeholder avatar pattern */}
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary font-bold">SR</div>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-lg leading-none mb-1">Sunita Rathore</h4>
                    <span className="text-slate-400 text-xs uppercase tracking-wider">Udaipur</span>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-8 shadow-sm border border-[#e5dcdc] relative group hover:shadow-md transition-shadow duration-300 rounded-lg">
                <span className="material-symbols-outlined text-gold-accent text-4xl mb-4">format_quote</span>
                <p className="text-slate-600 mb-8 leading-relaxed italic">
                  "Sanwariya Gold helped me recreate a lost family heirloom from just an old photograph. The attention to detail in the enamel work is something I haven't seen in modern jewelers."
                </p>
                <div className="flex items-center gap-4 border-t border-[#e5dcdc] pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                    {/* Placeholder avatar pattern */}
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary font-bold">RG</div>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-lg leading-none mb-1">Rajan Gupta</h4>
                    <span className="text-slate-400 text-xs uppercase tracking-wider">New Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust & Logistics Bar */}
        <section className="bg-background-dark py-12 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              <div className="flex flex-col items-center gap-3 px-4">
                <span className="material-symbols-outlined text-gold-accent text-4xl">workspace_premium</span>
                <span className="text-white font-medium tracking-wide uppercase text-sm">BIS Hallmarked</span>
              </div>
              <div className="flex flex-col items-center gap-3 px-4">
                <span className="material-symbols-outlined text-gold-accent text-4xl">local_shipping</span>
                <span className="text-white font-medium tracking-wide uppercase text-sm">Insured Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-3 px-4">
                <span className="material-symbols-outlined text-gold-accent text-4xl">support_agent</span>
                <span className="text-white font-medium tracking-wide uppercase text-sm">24/7 Concierge</span>
              </div>
              <div className="flex flex-col items-center gap-3 px-4">
                <span className="material-symbols-outlined text-gold-accent text-4xl">currency_rupee</span>
                <span className="text-white font-medium tracking-wide uppercase text-sm">Transparent Pricing</span>
              </div>
            </div>
          </div>
        </section>
        {/* Full Width Banner CTA */}
        <section className="relative py-24 px-4 flex flex-col items-center justify-center text-center bg-cream-paper overflow-hidden">
          {/* Abstract mandala background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[800px] rounded-full border-[40px] border-primary/20 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border-[2px] border-primary/40 border-dashed"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="material-symbols-outlined text-primary text-5xl mb-6">all_inclusive</span>
            <p className="text-xl md:text-2xl text-slate-800 italic font-medium mb-8 leading-relaxed">
              "Gold is not just metal; it is the mirror of the soul's purity. Let us adorn your spirit."
            </p>
            <div className="h-px w-32 bg-primary/20 mx-auto mb-10"></div>
            <Link href="/bespoke" className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-10 uppercase tracking-[0.2em] transition-all duration-300 rounded-sm">
              Start Your Order
            </Link>
          </div>
        </section>
      </div>

    </>
  );
}
