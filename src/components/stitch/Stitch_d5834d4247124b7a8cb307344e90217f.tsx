import React from 'react';
import Link from 'next/link';

export function Stitch_d5834d4247124b7a8cb307344e90217f() {
  return (
    <>

{/* Header / Navbar */}
<header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-slate-200 dark:border-[#39282e] px-6 lg:px-10 py-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="text-primary">
<span className="material-symbols-outlined !text-[32px]">diamond</span>
</div>
<h2 className="text-lg lg:text-xl font-bold leading-tight tracking-[-0.015em] uppercase text-slate-900 dark:text-white">Sanwariya Gold</h2>
</div>
<div className="flex gap-3">
<Link href="/cart" className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-200 dark:bg-[#39282e] text-slate-900 dark:text-white text-sm font-bold transition hover:bg-slate-300 dark:hover:bg-[#543b43]">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
<span className="hidden sm:inline">Order Summary</span>
</Link>
<Link href="/checkout" className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-200 dark:bg-[#39282e] text-slate-900 dark:text-white text-sm font-bold transition hover:bg-slate-300 dark:hover:bg-[#543b43]">
<span className="material-symbols-outlined text-[18px]">lock</span>
<span className="hidden sm:inline">Secure Checkout</span>
</Link>
</div>
</header>
{/* Main Layout */}
<main className="flex-grow layout-container flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
{/* Progress Steps */}
<div className="w-full max-w-4xl mb-8">
<div className="flex items-center justify-between relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-200 dark:bg-[#39282e] -z-10"></div>
{/* Step 1 */}
<div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
<div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<span className="text-xs font-medium text-slate-500 dark:text-slate-400">Cart</span>
</div>
{/* Step 2 */}
<div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
<div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<span className="text-xs font-medium text-slate-500 dark:text-slate-400">Shipping</span>
</div>
{/* Step 3 (Active) */}
<div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
<div className="size-8 rounded-full border-2 border-primary bg-background-light dark:bg-background-dark text-primary flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(212,17,82,0.4)]">
                        3
                    </div>
<span className="text-xs font-bold text-primary">Payment</span>
</div>
</div>
</div>
<div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Payment Methods */}
<div className="lg:col-span-8 flex flex-col gap-6">
<div className="mb-2">
<h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Secure Payment</h1>
<p className="text-slate-500 dark:text-slate-400 mt-1">Choose a payment method to complete your purchase of <span className="text-primary font-medium">₹ 23,59,800</span></p>
</div>
{/* High Value Option Banner */}
<div className="rounded-xl bg-green-900/20 border border-green-800/50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3">
<div className="bg-green-600/20 p-2 rounded-lg text-green-500">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<h3 className="text-green-500 font-bold text-sm">High Value Transaction Support</h3>
<p className="text-green-400/80 text-xs mt-0.5">For orders over ₹10L, we recommend direct bank transfer or assisted payment.</p>
</div>
</div>
<button className="whitespace-nowrap flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-bold transition-colors">
<span className="material-symbols-outlined text-[18px]">chat</span>
                        WhatsApp Assist
                    </button>
</div>
{/* Payment Options Form */}
<form className="flex flex-col gap-4">
{/* Credit/Debit Card (Expanded) */}
<div className="rounded-xl border-2 border-primary/50 bg-slate-50 dark:bg-[#2a161d] overflow-hidden transition-all duration-300 relative group">
<div className="absolute top-0 right-0 p-3 opacity-10">
<span className="material-symbols-outlined text-6xl">credit_card</span>
</div>
<label className="flex items-center gap-4 p-5 cursor-pointer">
<input checked={true} className="size-5 border-2 border-slate-400 text-primary focus:ring-primary focus:ring-offset-background-dark bg-transparent checked:bg-primary" name="payment_method" type="radio" />
<div className="flex grow flex-col">
<p className="text-slate-900 dark:text-white text-base font-bold">Credit / Debit Card</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Visa, Mastercard, RuPay, Amex</p>
</div>
<div className="flex gap-2 opacity-70 grayscale group-hover:grayscale-0 transition-all">
<div className="h-6 w-10 bg-slate-200 dark:bg-white/10 rounded"></div> {/* Abstract logo placeholder */}
<div className="h-6 w-10 bg-slate-200 dark:bg-white/10 rounded"></div> {/* Abstract logo placeholder */}
</div>
</label>
{/* Expanded Card Details Section */}
<div className="px-5 pb-6 pt-2 border-t border-primary/10 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Card Number</label>
<div className="relative">
<input className="w-full bg-background-light dark:bg-[#1f0e13] border-0 border-b-2 border-slate-300 dark:border-[#543b43] focus:border-primary focus:ring-0 px-0 py-3 text-lg font-medium text-slate-900 dark:text-white placeholder-slate-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
<span className="material-symbols-outlined absolute right-0 top-3 text-slate-500">credit_card</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Expiry Date</label>
<input className="w-full bg-background-light dark:bg-[#1f0e13] border-0 border-b-2 border-slate-300 dark:border-[#543b43] focus:border-primary focus:ring-0 px-0 py-3 text-base font-medium text-slate-900 dark:text-white placeholder-slate-500 transition-colors" placeholder="MM / YY" type="text" />
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">CVV</label>
<div className="relative">
<input className="w-full bg-background-light dark:bg-[#1f0e13] border-0 border-b-2 border-slate-300 dark:border-[#543b43] focus:border-primary focus:ring-0 px-0 py-3 text-base font-medium text-slate-900 dark:text-white placeholder-slate-500 transition-colors" placeholder="123" type="password" />
<span className="material-symbols-outlined absolute right-0 top-3 text-slate-500 cursor-help" title="3 digits on back of card">help</span>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Name on Card</label>
<input className="w-full bg-background-light dark:bg-[#1f0e13] border-0 border-b-2 border-slate-300 dark:border-[#543b43] focus:border-primary focus:ring-0 px-0 py-3 text-base font-medium text-slate-900 dark:text-white placeholder-slate-500 transition-colors" placeholder="Enter full name" type="text" />
</div>
<div className="md:col-span-2 flex items-center gap-2 mt-2">
<input className="rounded border-slate-600 bg-transparent text-primary focus:ring-primary" id="save-card" type="checkbox" />
<label className="text-sm text-slate-500 dark:text-slate-400" htmlFor="save-card">Save this card securely for future payments</label>
</div>
</div>
</div>
{/* UPI */}
<label className="group relative flex items-center gap-4 rounded-xl border border-solid border-slate-300 dark:border-[#39282e] p-5 cursor-pointer hover:border-slate-400 dark:hover:border-[#543b43] bg-background-light dark:bg-[#221016] transition-colors">
<input className="size-5 border-2 border-slate-400 text-primary focus:ring-primary focus:ring-offset-background-dark bg-transparent checked:bg-primary" name="payment_method" type="radio" />
<div className="flex grow flex-col">
<p className="text-slate-900 dark:text-white text-base font-bold group-hover:text-primary transition-colors">UPI (Google Pay / PhonePe)</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Scan QR or enter UPI ID</p>
</div>
<div className="text-slate-400 dark:text-slate-600">
<span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
</div>
</label>
{/* Net Banking */}
<label className="group relative flex items-center gap-4 rounded-xl border border-solid border-slate-300 dark:border-[#39282e] p-5 cursor-pointer hover:border-slate-400 dark:hover:border-[#543b43] bg-background-light dark:bg-[#221016] transition-colors">
<input className="size-5 border-2 border-slate-400 text-primary focus:ring-primary focus:ring-offset-background-dark bg-transparent checked:bg-primary" name="payment_method" type="radio" />
<div className="flex grow flex-col">
<p className="text-slate-900 dark:text-white text-base font-bold group-hover:text-primary transition-colors">Net Banking</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">HDFC, ICICI, SBI, Axis &amp; more</p>
</div>
<div className="text-slate-400 dark:text-slate-600">
<span className="material-symbols-outlined text-3xl">account_balance</span>
</div>
</label>
{/* No Cost EMI */}
<label className="group relative flex items-center gap-4 rounded-xl border border-solid border-yellow-600/30 p-5 cursor-pointer bg-gradient-to-r from-yellow-900/10 to-transparent hover:border-yellow-600/50 transition-colors">
<input className="size-5 border-2 border-yellow-600 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-background-dark bg-transparent checked:bg-yellow-500" name="payment_method" type="radio" />
<div className="flex grow flex-col">
<div className="flex items-center gap-2">
<p className="text-slate-900 dark:text-white text-base font-bold">NO-COST EMI</p>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/20 text-yellow-500 uppercase tracking-wide">Gold Tier</span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm">0% interest for up to 12 months</p>
</div>
<div className="text-yellow-600/60">
<span className="material-symbols-outlined text-3xl">percent</span>
</div>
</label>
</form>
{/* Trust Badges */}
<div className="mt-4 pt-6 border-t border-slate-200 dark:border-[#39282e]">
<p className="text-xs text-center text-slate-500 dark:text-slate-500 mb-4 uppercase tracking-widest font-bold">Secured by Industry Standards</p>
<div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
{/* Abstract placeholders for security logos, using text and icons for representation */}
<div className="flex items-center gap-1 text-slate-400 dark:text-slate-300 font-bold text-sm">
<span className="material-symbols-outlined text-xl">shield</span>
<span>PCI-DSS Compliant</span>
</div>
<div className="w-px h-6 bg-slate-700"></div>
<div className="flex items-center gap-1 text-slate-400 dark:text-slate-300 font-bold text-sm">
<span className="material-symbols-outlined text-xl">lock</span>
<span>256-Bit SSL</span>
</div>
<div className="w-px h-6 bg-slate-700"></div>
<div className="flex items-center gap-1 text-slate-400 dark:text-slate-300 font-bold text-sm">
<span className="material-symbols-outlined text-xl">verified_user</span>
<span>Razorpay Trusted</span>
</div>
</div>
</div>
</div>
{/* Right Column: Order Summary */}
<div className="lg:col-span-4">
<div className="sticky top-24 flex flex-col gap-4">
<div className="rounded-xl bg-white dark:bg-[#181113] border border-slate-200 dark:border-[#39282e] overflow-hidden shadow-xl shadow-black/20">
<div className="p-5 border-b border-slate-200 dark:border-[#39282e] bg-slate-50 dark:bg-[#1f1619]">
<h3 className="font-bold text-lg text-slate-900 dark:text-white">Order Summary</h3>
</div>
<div className="p-5 flex flex-col gap-4">
{/* Product Item 1 */}
<div className="flex gap-4">
<div className="size-16 rounded-lg bg-slate-200 dark:bg-slate-800 shrink-0 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/40 to-yellow-500/10" data-alt="Gold necklace preview"></div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">22K Gold Antique Kundan Necklace Set</h4>
<p className="text-xs text-slate-500 mt-1">Qty: 1</p>
<p className="text-sm font-bold text-primary mt-1">₹ 15,45,000</p>
</div>
</div>
{/* Product Item 2 */}
<div className="flex gap-4">
<div className="size-16 rounded-lg bg-slate-200 dark:bg-slate-800 shrink-0 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/40 to-yellow-500/10" data-alt="Diamond ring preview"></div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">Solitaire Diamond Ring (VVS1)</h4>
<p className="text-xs text-slate-500 mt-1">Qty: 1</p>
<p className="text-sm font-bold text-primary mt-1">₹ 8,14,800</p>
</div>
</div>
<div className="h-px bg-slate-200 dark:bg-[#39282e] my-2"></div>
<div className="flex justify-between text-sm">
<span className="text-slate-500 dark:text-slate-400">Subtotal</span>
<span className="text-slate-900 dark:text-white">₹ 23,59,800</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500 dark:text-slate-400">Making Charges</span>
<span className="text-green-500 font-medium">Free</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500 dark:text-slate-400">Insured Shipping</span>
<span className="text-green-500 font-medium">Free</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500 dark:text-slate-400">Tax (3% GST)</span>
<span className="text-slate-900 dark:text-white">Included</span>
</div>
<div className="h-px bg-slate-200 dark:bg-[#39282e] my-2"></div>
<div className="flex justify-between items-baseline">
<span className="text-base font-bold text-slate-900 dark:text-white">Total</span>
<span className="text-xl font-bold text-primary">₹ 23,59,800</span>
</div>
</div>
<div className="p-5 pt-0">
<button className="w-full flex items-center justify-center gap-2 rounded-lg py-4 bg-primary hover:bg-[#b00e44] text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(212,17,82,0.39)] transition-all transform hover:-translate-y-0.5 active:translate-y-0">
<span className="material-symbols-outlined">lock</span>
<span>PAY SECURELY</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<p className="text-center text-[10px] text-slate-500 mt-3 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">lock</span>
                                Transactions are encrypted and secured.
                            </p>
</div>
</div>
{/* Support Card */}
<div className="rounded-xl border border-dashed border-slate-300 dark:border-[#39282e] p-4 text-center">
<p className="text-xs text-slate-500 mb-2">Need help with payment?</p>
<Link className="text-sm font-medium text-primary hover:underline" href="#">Call our Concierge: +91 98765 43210</Link>
</div>
</div>
</div>
</div>
</main>
{/* Footer Simplified */}
<footer className="mt-12 py-8 border-t border-slate-200 dark:border-[#39282e] bg-background-light dark:bg-[#181113]">
<div className="layout-container px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
<p>© 2024 Sanwariya Gold. All rights reserved.</p>
<div className="flex gap-4">
<Link className="hover:text-primary" href="/policies/terms">Privacy Policy</Link>
<Link className="hover:text-primary" href="/shipping-returns">Terms of Service</Link>
<Link className="hover:text-primary" href="/shipping-returns">Returns</Link>
</div>
</div>
</footer>

    </>
  );
}
