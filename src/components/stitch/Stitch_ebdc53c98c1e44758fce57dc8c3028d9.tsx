import React from 'react';
import Link from 'next/link';

export function Stitch_ebdc53c98c1e44758fce57dc8c3028d9() {
  return (
    <>

      <div className="relative flex h-auto min-h-screen w-full flex-col">

        {/* Section 4: Collections Grid */}
        <section className="bg-cream dark:bg-[#F5EDD8] py-20 px-6 lg:px-16 text-center">
          <div className="max-w-[1280px] mx-auto flex flex-col items-center">
            <span className="text-maroon text-sm font-bold tracking-[0.2em] uppercase mb-4">Heritage Collection</span>
            <h2 className="font-display text-[#171512] text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
              Crafted for Queens,<br />Blessed for Life
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* Product Card 1 */}
              <div className="group relative flex flex-col velvet-card rounded-lg overflow-hidden border border-[#37332a]/30 hover:-translate-y-2 transition-transform duration-500">
                <Link href="/product/1" className="relative w-full aspect-[3/4] overflow-hidden block">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Close up of elaborate gold bridal necklace set" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpey-cW8S6m-w3mPC9BUXucGDMlPr-cT8hGng9-R0TMARd23M8iYMRkvLdOldAb_M-1qBc4-4d14BfbHNTXsuRoy2_s4BDUe84-gHVf_7B9U2B4-xSTYfb7dQhqGiaIpPK2yNlCyOBySYxHfgeHENZQW_peiMkqwocK2wTF497c9w2rFJ4t9WnunI1BREXaDcSR5LARNkZTtqPuqR39mQjtwin-PeQaW7li8lwTn3bjrH1CoX5QH_cNxjveblZTJJ3owYtu6gdGQ')" }}>
                  </div>
                  <div className="absolute top-4 right-4 bg-maroon text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">New Arrival</div>
                </Link>
                <div className="p-6 flex flex-col flex-grow items-center text-center bg-[#171512]">
                  <Link href="/product/1">
                    <h3 className="font-display text-white text-2xl font-medium mb-1 hover:text-primary transition-colors">Padmini Bridal Haar Set</h3>
                  </Link>
                  <p className="text-[#b6aea0] text-xs uppercase tracking-widest mb-3">Royal Heritage Series</p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-primary font-display text-lg italic">22K Gold</span>
                    <span className="text-primary/50 text-xs">•</span>
                    <span className="text-primary font-display text-lg italic">₹4,50,000</span>
                  </div>
                  <Link href="/cart" className="mt-auto w-full bg-maroon hover:bg-[#70131e] text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide group-hover:bg-primary group-hover:text-[#171512]">
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    Add to Cart
                  </Link>
                </div>
              </div>
              {/* Product Card 2 */}
              <div className="group relative flex flex-col velvet-card rounded-lg overflow-hidden border border-[#37332a]/30 hover:-translate-y-2 transition-transform duration-500">
                <Link href="/product/2" className="relative w-full aspect-[3/4] overflow-hidden block">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Intricate golden earrings with traditional design" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDawUfZnGxpN2U1E2o1tRoBOfVsjEz6-nVKKVr1cPVsp4-KZx5askpTHmHl0Q7ka2cFJrWTBmV6zqwdraJq5ZvqioQgz_M-Pdf4xAJffN3TI8EQq-pKC51hU9dpmapXmW05Xq8fY35sgDwKCt5F8I7_Qp1y7FGJtAnjib73p0XzP3kZyUr-sJ9DftmVwxDNNVcuLBYPj_NmjVGaa2bLhjUE86hwWy97b_sFODN9q6OYEWDqZHT5r8sNK95QzjIvJkHE_7MRiI-56g')" }}>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow items-center text-center bg-[#171512]">
                  <Link href="/product/2">
                    <h3 className="font-display text-white text-2xl font-medium mb-1 hover:text-primary transition-colors">Meera Jhumka</h3>
                  </Link>
                  <p className="text-[#b6aea0] text-xs uppercase tracking-widest mb-3">Devotional Series</p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-primary font-display text-lg italic">22K Gold</span>
                    <span className="text-primary/50 text-xs">•</span>
                    <span className="text-primary font-display text-lg italic">₹85,000</span>
                  </div>
                  <Link href="/cart" className="mt-auto w-full bg-maroon hover:bg-[#70131e] text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide group-hover:bg-primary group-hover:text-[#171512]">
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    Add to Cart
                  </Link>
                </div>
              </div>
              {/* Product Card 3 */}
              <div className="group relative flex flex-col velvet-card rounded-lg overflow-hidden border border-[#37332a]/30 hover:-translate-y-2 transition-transform duration-500">
                <Link href="/product/3" className="relative w-full aspect-[3/4] overflow-hidden block">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Heavy gold polki necklace on dark background" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKhGczu52cQ9wGjWuuUW5fDS4ZDozrr_406xZMXuvef6OqHe47kf8dya9WTgRJw0YjlC4WbYaqydOQZuAhfTDmhkZjVKV0DPt5PwrIBDuqMGzDmOhmhI22rQR8dOEIpf8hWKtR7yxNd4sOaeIXzLhNg8eHWZrHpT3IMBK32fAx3XvEnjvVYL7NSbdtKssTuNVJDkX8_HnsMNQKaiITuoWCfKrE9Ss4QLLPn6WqJ246tRHhMc0_KkIV_q4HWdDjyDeWunJBF9zmkg')" }}>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-[#171512] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Bestseller</div>
                </Link>
                <div className="p-6 flex flex-col flex-grow items-center text-center bg-[#171512]">
                  <Link href="/product/3">
                    <h3 className="font-display text-white text-2xl font-medium mb-1 hover:text-primary transition-colors">Chittor Polki Necklace</h3>
                  </Link>
                  <p className="text-[#b6aea0] text-xs uppercase tracking-widest mb-3">Rajputana Series</p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-primary font-display text-lg italic">22K Gold</span>
                    <span className="text-primary/50 text-xs">•</span>
                    <span className="text-primary font-display text-lg italic">₹2,20,000</span>
                  </div>
                  <Link href="/cart" className="mt-auto w-full bg-maroon hover:bg-[#70131e] text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide group-hover:bg-primary group-hover:text-[#171512]">
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Signature Spotlight */}
        <section className="bg-background-dark relative overflow-hidden py-24 px-6 lg:px-16 min-h-screen flex items-center">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#2a2620] to-transparent opacity-30 pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* Left Side: Image Composition (60%) */}
            <div className="lg:col-span-3 relative h-[600px] w-full flex items-center justify-center lg:justify-start">
              {/* Main Image */}
              <div className="relative w-[85%] h-full rounded-t-full rounded-b-lg overflow-hidden z-10 shadow-2xl border border-white/5">
                <div className="absolute inset-0 bg-cover bg-center" data-alt="Model wearing elaborate traditional Indian gold jewelry" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6O9iy5n_Jb2BZD2huu3ITmt9NQC6Gm2mt3dBsz-YII5cjP99FpTJXCwG87l2kBzq8T8f0rsLzCzuDeCtYiYjJgdc4W_HJ6QRQDdh9YXndIHuDisT8FoQKHfVW4nw2FOdAkCXxgc0R-YmVkOZH5rkT9qQUUHUJsyeGrSd_6lmPZcuzzppdJ13B0iuIcjHNyfF8guuDHixSEDe4nn053cAQDgIQqHYoazpv6bbg1ksZe0bnM0QWyBP2NsgDTCMt1nkvIKYQbKSW9Q')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Detail Overlap Image */}
              <div className="absolute bottom-10 -right-4 lg:right-10 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-background-dark shadow-2xl z-20 overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Close up detail of meenakari work on gold" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx80D_lXmFLAT_fCNGe0PTcp-7K1B4JdPdlzaApluXHgovpvzXvm7Mwld4AZw_1zRQfQLzQLCe9ay1g3FRlPNzECrgulqUcEQb_cqpzFEKQI9uL6tEf52Me2QSAYb_iP9iyzTYMcuWKjA1WtkPK-pSQs5ocUNRCtbZBEzRTbsUHyPx5hVXyIGOtwgBFtQr3G7vkBWlI1ca85JvnMCrEb4-VSeNhOYDB-BiIX46jsnNnBHtkDuJuBy-Tzl-KrZt5mwPOAhPjb_-rg')" }}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-colors">
                  <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">zoom_in</span>
                </div>
              </div>
            </div>
            {/* Right Side: Content (40%) */}
            <div className="lg:col-span-2 flex flex-col gap-8 z-10">
              <div>
                <span className="inline-block px-3 py-1 mb-4 border border-primary text-primary text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                  Signature Piece
                </span>
                <h2 className="font-display text-5xl lg:text-6xl text-white font-bold leading-tight mb-4">
                  Rani Padmini <span className="text-primary italic font-normal">Haar</span>
                </h2>
                <p className="text-[#b6aea0] text-lg font-light leading-relaxed mb-8">
                  An exquisite recreation of royal heritage, featuring reversible meenakari work and uncut diamonds. A masterpiece that transcends generations, forged in the fires of tradition.
                </p>
              </div>
              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                <div className="flex flex-col gap-1">
                  <span className="text-primary/60 text-xs uppercase tracking-widest">Purity</span>
                  <span className="text-white font-display text-xl">22K Hallmarked</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-primary/60 text-xs uppercase tracking-widest">Weight</span>
                  <span className="text-white font-display text-xl">185 Grams</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-primary/60 text-xs uppercase tracking-widest">Craft</span>
                  <span className="text-white font-display text-xl">Jadau &amp; Meenakari</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-primary/60 text-xs uppercase tracking-widest">Availability</span>
                  <span className="text-white font-display text-xl">Made to Order</span>
                </div>
              </div>
              <div className="pt-6">
                <button className="w-full sm:w-auto bg-primary text-[#171512] hover:bg-white hover:text-black transition-colors duration-300 font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(198,146,42,0.3)]">
                  <span className="material-symbols-outlined">calendar_month</span>
                  <span>Book a Private Viewing</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-[#12100e] border-t border-[#37332a] py-12 px-6">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h4 className="font-display text-xl font-bold text-white">Sanwariya Gold</h4>
              <p className="text-[#b6aea0] text-sm">Chittorgarh, Rajasthan.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link className="text-[#b6aea0] hover:text-primary transition-colors text-sm" href="/shipping-returns">Shipping Policy</Link>
              <Link className="text-[#b6aea0] hover:text-primary transition-colors text-sm" href="/shipping-returns">Returns</Link>
              <Link className="text-[#b6aea0] hover:text-primary transition-colors text-sm" href="/policies/terms">Privacy</Link>
              <Link className="text-[#b6aea0] hover:text-primary transition-colors text-sm" href="/policies/terms">Terms</Link>
            </div>
            <div className="flex gap-4">
              <Link className="text-[#b6aea0] hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">photo_camera</span>
              </Link>
              <Link className="text-[#b6aea0] hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </Link>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto text-center mt-8 pt-8 border-t border-[#37332a]/50">
            <p className="text-[#b6aea0]/60 text-xs">© 2024 Sanwariya Gold. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </>
  );
}
