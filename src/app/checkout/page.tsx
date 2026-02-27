'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

export default function CheckoutPage() {
  const { items } = useCartStore();
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const gst = Math.round(subtotal * 0.03);
  const total = subtotal + gst;
  const totalGoldWeight = items.reduce((sum, item) => sum + (item.gold_weight_grams ?? 0), 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0D0906] flex flex-col items-center justify-center gap-6 text-white">
        <span className="material-symbols-outlined text-primary text-6xl">shopping_bag</span>
        <h2 className="font-cinzel text-2xl">Your cart is empty</h2>
        <Link href="/collections" className="bg-maroon text-white px-8 py-3 rounded-lg font-cinzel font-bold uppercase tracking-wide hover:bg-[#70131e] transition-colors">
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0906] flex flex-col">
      {/* Checkout Header */}
      <header className="flex items-center justify-between border-b border-[#393628] bg-[#0D0906]/95 backdrop-blur-sm px-6 lg:px-12 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
          <Link href="/" className="text-white text-xl lg:text-2xl font-cinzel font-bold tracking-wide hover:text-primary transition-colors">
            SANWARIYA GOLD
          </Link>
        </div>
        {/* Progress Steps */}
        <div className="hidden md:flex items-center gap-2 text-sm font-cinzel tracking-widest">
          <span className={step === 1 ? 'text-primary border-b-2 border-primary pb-1 font-bold' : 'text-white/40'}>1 SHIPPING</span>
          <span className="text-[#393628] mx-2">——</span>
          <span className={step === 2 ? 'text-primary border-b-2 border-primary pb-1 font-bold' : 'text-white/40'}>2 REVIEW</span>
        </div>
        <div className="flex items-center gap-2 text-white/50 bg-[#393628]/30 px-3 py-1.5 rounded-lg border border-[#393628]">
          <span className="material-symbols-outlined text-lg">lock</span>
          <span className="text-xs font-bold tracking-wider uppercase">Secure SSL</span>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-grow flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
        {/* Left: Shipping Form */}
        <div className="flex-1 px-6 lg:px-16 py-10 lg:py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-cinzel">Shipping Details</h2>

            {subtotal >= 500000 && (
              <div className="mb-8 bg-maroon/20 border border-maroon p-4 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined shrink-0 mt-0.5 text-[#ffcccb]">warning</span>
                <div>
                  <p className="font-bold text-sm mb-1 text-[#ffcccb]">High Value Order (&gt; ₹5 Lakh)</p>
                  <p className="text-sm text-slate-200 opacity-90">Orders above ₹5L require scheduled secure delivery with phone verification.</p>
                </div>
              </div>
            )}

            <form className="space-y-8" onSubmit={e => { e.preventDefault(); setStep(2); }}>
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-primary text-lg font-cinzel font-medium tracking-wide border-b border-[#393628] pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'First Name', placeholder: 'Enter first name', type: 'text' },
                    { label: 'Last Name', placeholder: 'Enter last name', type: 'text' },
                    { label: 'Phone Number', placeholder: '+91', type: 'tel' },
                    { label: 'Email Address', placeholder: 'name@example.com', type: 'email' },
                  ].map(({ label, placeholder, type }) => (
                    <div key={label}>
                      <label className="block text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">{label}</label>
                      <input required className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder={placeholder} type={type} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-6">
                <h3 className="text-primary text-lg font-cinzel font-medium tracking-wide border-b border-[#393628] pb-2">Delivery Address</h3>
                <div>
                  <label className="block text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Street Address</label>
                  <input required className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="Flat No, Building, Street" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">City</label>
                    <input required className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="Mumbai" type="text" />
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">State</label>
                    <select className="w-full bg-[#0D0906] border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors">
                      {['Rajasthan', 'Maharashtra', 'Delhi', 'Karnataka', 'Gujarat', 'Tamil Nadu', 'West Bengal'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Pincode</label>
                    <input required className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="400001" type="text" />
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="space-y-4">
                <h3 className="text-primary text-lg font-cinzel font-medium tracking-wide border-b border-[#393628] pb-2">Delivery Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: 'local_shipping', label: 'Standard', desc: 'Secure Insured Delivery', price: 'FREE' },
                    { icon: 'rocket_launch', label: 'Express', desc: 'Next Day Delivery', price: '₹999' },
                    { icon: 'storefront', label: 'Atelier', desc: 'Pickup from Store', price: 'FREE' },
                  ].map(({ icon, label, desc, price }, i) => (
                    <label key={label} className="cursor-pointer">
                      <input defaultChecked={i === 0} className="peer sr-only" name="delivery" type="radio" />
                      <div className="h-full border border-[#393628] bg-[#1a1814] p-4 rounded-lg peer-checked:border-primary peer-checked:bg-primary/5 transition-all hover:border-[#6b6652]">
                        <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
                        <p className="font-bold text-white font-cinzel mt-2">{label}</p>
                        <p className="text-sm text-white/50">{desc}</p>
                        <p className="text-primary font-bold mt-2">{price}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full bg-maroon hover:bg-[#70131e] text-white font-cinzel font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group shadow-lg">
                CONTINUE TO REVIEW
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-[40%] bg-[#111009] border-t lg:border-t-0 lg:border-l border-[#393628]">
          <div className="sticky top-[69px] p-8 lg:p-10 max-h-screen overflow-y-auto flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white font-cinzel tracking-wide">Order Summary</h2>

            {/* Real cart items */}
            <div className="space-y-5">
              {items.map(item => {
                const img = item.images?.[0]?.url ?? item.image;
                return (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-[#393628] bg-[#27251c] flex-shrink-0">
                      {img ? (
                        <img src={img} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary/30 text-3xl">diamond</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h4 className="text-white font-semibold leading-tight">{item.name}</h4>
                      {item.gold_purity && <p className="text-white/50 text-sm mt-0.5">{item.gold_purity}{item.gold_weight_grams ? ` • ${item.gold_weight_grams}g` : ''}</p>}
                      <p className="text-primary font-bold mt-1 font-cinzel">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gold weight row */}
            {totalGoldWeight > 0 && (
              <div className="bg-[#27251c]/50 p-4 rounded-lg border border-[#393628] flex justify-between items-center">
                <span className="text-white/50 text-sm uppercase tracking-widest">Total Gold Weight</span>
                <span className="text-primary font-bold font-cinzel">{totalGoldWeight}g</span>
              </div>
            )}

            {/* Price breakdown */}
            <div className="border-t border-[#393628] pt-4 space-y-3 text-sm">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span className="text-white font-cinzel">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>GST (3%)</span>
                <span className="text-white font-cinzel">{formatPrice(gst)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Shipping</span>
                <span className="text-primary text-xs uppercase font-cinzel">Free</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-[#393628] pt-4 flex justify-between items-baseline">
              <span className="text-white text-lg font-bold">Total</span>
              <span className="text-primary text-3xl font-bold font-cinzel">{formatPrice(total)}</span>
            </div>
            <p className="text-right text-xs text-white/40">Inclusive of all taxes</p>
          </div>
        </div>
      </main>
    </div>
  );
}
