import React from 'react';
import Link from 'next/link';

export function Stitch_4ccdc6fd58db4d679f5cb85a33fbee15() {
  return (
    <>

{/* Header */}
<header className="flex items-center justify-between border-b border-[#393628] bg-[#0D0906]/95 backdrop-blur-sm px-6 lg:px-12 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4">
<div className="text-primary">
<span className="material-symbols-outlined text-3xl">diamond</span>
</div>
<h1 className="text-white text-xl lg:text-2xl font-cinzel font-bold tracking-wide">SANWARIYA GOLD</h1>
</div>
{/* Progress Steps */}
<div className="hidden md:flex items-center gap-2">
<span className="text-primary font-bold text-sm tracking-widest font-cinzel border-b-2 border-primary pb-1">1 SHIPPING</span>
<span className="text-[#393628] mx-2">——</span>
<span className="text-text-muted font-medium text-sm tracking-widest font-cinzel opacity-50">2 REVIEW</span>
<span className="text-[#393628] mx-2">——</span>
<span className="text-text-muted font-medium text-sm tracking-widest font-cinzel opacity-50">3 PAYMENT</span>
</div>
<div className="flex items-center gap-2 text-text-muted bg-[#393628]/30 px-3 py-1.5 rounded-lg border border-[#393628]">
<span className="material-symbols-outlined text-lg">lock</span>
<span className="text-xs font-bold tracking-wider uppercase">Secure SSL</span>
</div>
</header>
{/* Main Layout */}
<main className="flex-grow flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
{/* Left: Form Section */}
<div className="flex-1 px-6 lg:px-16 py-10 lg:py-16">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-cinzel">Shipping Details</h2>
{/* Warning Banner */}
<div className="mb-10 bg-maroon/20 border border-maroon text-maroon-light p-4 rounded-lg flex items-start gap-3">
<span className="material-symbols-outlined shrink-0 mt-0.5">warning</span>
<div>
<p className="font-bold text-sm mb-1 text-[#ffcccb]">High Value Order (&gt; ₹5 Lakh)</p>
<p className="text-sm opacity-90 text-slate-200">Due to insurance regulations, orders above ₹5L require scheduled secure delivery verification via phone confirmation.</p>
</div>
</div>
{/* Form */}
<form className="space-y-8">
{/* Contact Info */}
<div className="space-y-6">
<h3 className="text-primary text-lg font-cinzel font-medium tracking-wide border-b border-[#393628] pb-2">Contact Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">First Name</label>
<input className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="Enter first name" type="text" />
</div>
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">Last Name</label>
<input className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="Enter last name" type="text" />
</div>
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">Phone Number</label>
<input className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="+91" type="tel" />
</div>
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">Email Address</label>
<input className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="name@example.com" type="email" />
</div>
</div>
</div>
{/* Address */}
<div className="space-y-6 pt-4">
<h3 className="text-primary text-lg font-cinzel font-medium tracking-wide border-b border-[#393628] pb-2">Delivery Address</h3>
<div className="space-y-6">
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">Street Address</label>
<input className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="Flat No, Building, Street" type="text" />
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">City</label>
<input className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="Mumbai" type="text" />
</div>
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">State</label>
<select className="w-full bg-[#0D0906] border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors">
<option>Maharashtra</option>
<option>Delhi</option>
<option>Karnataka</option>
<option>Gujarat</option>
</select>
</div>
<div className="group">
<label className="block text-text-muted text-sm font-medium mb-2 uppercase tracking-wider">Pincode</label>
<input className="w-full bg-transparent border-0 border-b border-[#544f3b] text-white px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder-[#393628]" placeholder="400001" type="text" />
</div>
</div>
</div>
</div>
{/* Delivery Options */}
<div className="space-y-6 pt-4">
<h3 className="text-primary text-lg font-cinzel font-medium tracking-wide border-b border-[#393628] pb-2">Delivery Method</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/* Standard */}
<label className="cursor-pointer relative group/card">
<input checked={true} className="peer sr-only" name="delivery" type="radio" />
<div className="h-full border border-[#393628] bg-surface-dark p-4 rounded-lg peer-checked:border-primary peer-checked:bg-primary/5 transition-all hover:border-[#6b6652]">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
<div className="h-4 w-4 rounded-full border border-[#544f3b] peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
<div className="h-2 w-2 rounded-full bg-[#0D0906] opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<span className="font-bold text-white text-lg font-cinzel">Standard</span>
<span className="text-sm text-text-muted">Secure Insured Delivery</span>
<span className="text-primary font-bold mt-2">FREE</span>
</div>
</div>
</label>
{/* Express */}
<label className="cursor-pointer relative group/card">
<input className="peer sr-only" name="delivery" type="radio" />
<div className="h-full border border-[#393628] bg-surface-dark p-4 rounded-lg peer-checked:border-primary peer-checked:bg-primary/5 transition-all hover:border-[#6b6652]">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
<div className="h-4 w-4 rounded-full border border-[#544f3b] peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
<div className="h-2 w-2 rounded-full bg-[#0D0906] opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<span className="font-bold text-white text-lg font-cinzel">Express</span>
<span className="text-sm text-text-muted">Next Day Delivery</span>
<span className="text-primary font-bold mt-2">₹ 999</span>
</div>
</div>
</label>
{/* Pickup */}
<label className="cursor-pointer relative group/card">
<input className="peer sr-only" name="delivery" type="radio" />
<div className="h-full border border-[#393628] bg-surface-dark p-4 rounded-lg peer-checked:border-primary peer-checked:bg-primary/5 transition-all hover:border-[#6b6652]">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary text-2xl">storefront</span>
<div className="h-4 w-4 rounded-full border border-[#544f3b] peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
<div className="h-2 w-2 rounded-full bg-[#0D0906] opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<span className="font-bold text-white text-lg font-cinzel">Atelier</span>
<span className="text-sm text-text-muted">Pickup from Store</span>
<span className="text-primary font-bold mt-2">FREE</span>
</div>
</div>
</label>
</div>
</div>
</form>
{/* Mobile only CTA (hidden on desktop) */}
<div className="lg:hidden mt-8">
<Link href="/collections" className="w-full bg-maroon hover:bg-maroon-light text-white font-cinzel font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-maroon/20">
                        CONTINUE TO REVIEW
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/* Right: Order Summary (Sticky Sidebar) */}
<div className="hidden lg:block w-[40%] bg-surface-dark border-l border-[#393628] relative">
<div className="sticky top-[85px] p-10 h-[calc(100vh-85px)] overflow-y-auto custom-scrollbar flex flex-col">
<h2 className="text-2xl font-bold text-white mb-6 font-cinzel tracking-wide">Order Summary</h2>
{/* Items List */}
<div className="flex-grow space-y-6 mb-8">
{/* Item 1 */}
<div className="flex gap-4">
<div className="w-24 h-24 rounded-lg overflow-hidden border border-[#393628] bg-[#27251c] flex-shrink-0 relative">
<img alt="Intricate gold necklace on black velvet" className="w-full h-full object-cover" data-alt="Intricate traditional gold necklace close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9gtrA93Z7wOtBolotL5hQWQQw448FCXRNBNdbBsY4JzQk2NT0RK81ZJaTotuTOGlBYxDO4fIP3k8Gaphmh_Uginq3x9i8nyrpgKj8jVA7t0EpsYFv0wdz0jjQ258QgalLdFZ7SLnV7bOOU-rYcqcLCYhnmRFxh6U4WjRSuCfvq33aKb5ExuUyYLAIGDq5j8Ck2XLqcKXMlCiZwvmwc0GxOwCa7S2d2I7G2nc3kvS9xEwfbahS-euTe2Z3Z7J5KlFhqJEqQRj5oA" />
</div>
<div className="flex flex-col flex-grow">
<h4 className="text-white font-serif font-semibold text-lg leading-tight">Royal Kundan Necklace</h4>
<p className="text-text-muted text-sm mt-1">22k Gold • 85g</p>
<p className="text-primary font-bold mt-2 font-cinzel">₹ 12,50,000</p>
</div>
</div>
{/* Item 2 */}
<div className="flex gap-4">
<div className="w-24 h-24 rounded-lg overflow-hidden border border-[#393628] bg-[#27251c] flex-shrink-0 relative">
<img alt="Solid gold bangle bracelet" className="w-full h-full object-cover" data-alt="Thick solid gold bangle bracelet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5dsppkypfJyw1KO7vNdpIKohQuEMiGUAa6h4EOlqATCIa0vDd_Z05pn9du8JF2OZiCoGM7RvnqtNgCYyXbxirbCwYdyiUasAICSQgAy5f9moYpLbHUihgjYj27cHg9sEtXGkkst1-iJq87YXG6fmAmUNJOKuk6dDziSCzwDzUkoYaj7KBgGFyjKR8Uc0nJXPlRreNQ_3hLCpGwd0ZEtZx23asuhv59Q4F3jdU_RJfXSmRcFBptg3qMrAsrDcQNrtGPUM1u56n2Q" />
</div>
<div className="flex flex-col flex-grow">
<h4 className="text-white font-serif font-semibold text-lg leading-tight">Heritage Bangle Set</h4>
<p className="text-text-muted text-sm mt-1">22k Gold • 82g</p>
<p className="text-primary font-bold mt-2 font-cinzel">₹ 8,90,000</p>
</div>
</div>
</div>
{/* Gold Weight Summary */}
<div className="bg-[#27251c]/50 p-4 rounded-lg mb-6 border border-[#393628] flex justify-between items-center">
<span className="text-text-muted text-sm uppercase tracking-widest">Total Gold Weight</span>
<span className="text-primary font-bold font-cinzel text-lg">167g</span>
</div>
{/* Price Breakdown */}
<div className="border-t border-[#393628] pt-6 space-y-3 mb-8">
<div className="flex justify-between text-text-muted">
<span>Subtotal</span>
<span className="text-white font-cinzel">₹ 21,40,000</span>
</div>
<div className="flex justify-between text-text-muted">
<span>Making Charges</span>
<span className="text-white font-cinzel">₹ 1,50,000</span>
</div>
<div className="flex justify-between text-text-muted">
<span>GST (3%)</span>
<span className="text-white font-cinzel">₹ 69,800</span>
</div>
<div className="flex justify-between text-text-muted">
<span>Shipping</span>
<span className="text-primary font-cinzel text-sm uppercase">Free</span>
</div>
</div>
{/* Total */}
<div className="border-t border-[#393628] pt-6 mb-8">
<div className="flex justify-between items-baseline">
<span className="text-white text-lg font-bold">Total</span>
<span className="text-primary text-3xl font-bold font-cinzel">₹ 23,59,800</span>
</div>
<p className="text-right text-xs text-text-muted mt-2">Inclusive of all taxes</p>
</div>
{/* CTA */}
<Link href="/collections" className="w-full bg-maroon hover:bg-maroon-light text-white font-cinzel font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-maroon/20">
                    CONTINUE TO REVIEW
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
</main>

    </>
  );
}
