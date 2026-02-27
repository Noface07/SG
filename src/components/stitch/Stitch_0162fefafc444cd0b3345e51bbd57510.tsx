import React from 'react';
import Link from 'next/link';

export function Stitch_0162fefafc444cd0b3345e51bbd57510() {
  return (
    <>

{/* Top Navbar */}
<header className="sticky top-0 z-50 w-full border-b border-[#e6dbdb] dark:border-[#3a1a1a] bg-white dark:bg-[#2a1414]">
<div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex items-center justify-between h-16">
{/* Logo & Brand */}
<div className="flex items-center gap-8">
<Link className="flex items-center gap-3 group" href="#">
<div className="size-8 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight font-display">Sanwariya Gold</h2>
</Link>
{/* Desktop Nav Links */}
<nav className="hidden md:flex items-center gap-8">
<Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="/collections">Collections</Link>
<Link className="text-primary font-bold text-sm leading-normal border-b-2 border-primary" href="/account">Devotee Account</Link>
<Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="/heritage">About Us</Link>
</nav>
</div>
{/* Right Actions */}
<div className="flex items-center gap-4">
{/* Search */}
<div className="hidden sm:flex relative max-w-xs w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md leading-5 bg-slate-50 dark:bg-[#3a1a1a] text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Search" type="search" />
</div>
{/* Icons */}
<div className="flex items-center gap-2">
<button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<Link href="/cart" className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors">
<span className="material-symbols-outlined">shopping_bag</span>
</Link>
</div>
{/* User Avatar */}
<div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white dark:ring-[#2a1414] shadow-sm">
<img alt="User Profile" className="h-full w-full object-cover" data-alt="Portrait of a smiling man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-qXcDg_I1x4pZTzSKDMKqmMRE8SgaahOmWnGsUJde4yhcuDav6whMrXegbaWDnSuJj0m5wF8JVIHQhhoFJ_84UbeoLiD1lAfgbIH1HHiXqHucaZgqhUb4pbAVGKv9hJVVQW5yqzoFjEINrccBWNegUf3JULdC4VO-8qQdBoI0Irvp1p1q0ljKvmgh0k8gcUQSv9oVq15hC6GzyRH5JLnC6XUnup1sW5gUuOH4AdSwDyBRnaiDCFRNTPtD8nMyBVpsQ41YgA7RQ" />
</div>
</div>
</div>
</div>
</header>
{/* Main Content Layout */}
<main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
{/* Header Section */}
<div className="mb-8">
<h1 className="font-cormorant italic font-medium text-5xl md:text-6xl text-slate-900 dark:text-white mb-2 tracking-tight">Your Certificates of Authenticity</h1>
<p className="font-eb-garamond text-secondary text-lg md:text-xl italic">Digital proof of purity for your heirloom collection</p>
</div>
{/* Tabs */}
<div className="border-b border-slate-200 dark:border-slate-700 mb-10 overflow-x-auto">
<div className="flex gap-8 min-w-max">
<Link className="pb-4 px-1 text-sm font-bold text-slate-500 hover:text-primary border-b-2 border-transparent hover:border-slate-300 transition-colors" href="#">Overview</Link>
<Link className="pb-4 px-1 text-sm font-bold text-slate-500 hover:text-primary border-b-2 border-transparent hover:border-slate-300 transition-colors" href="#">Orders</Link>
<Link aria-current="page" className="pb-4 px-1 text-sm font-bold text-primary border-b-2 border-primary" href="#">My Certificates</Link>
<Link className="pb-4 px-1 text-sm font-bold text-slate-500 hover:text-primary border-b-2 border-transparent hover:border-slate-300 transition-colors" href="/account/wishlist">Wishlist</Link>
<Link className="pb-4 px-1 text-sm font-bold text-slate-500 hover:text-primary border-b-2 border-transparent hover:border-slate-300 transition-colors" href="/shipping-returns">Service History</Link>
</div>
</div>
{/* Dashboard Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Certificate List (Mock list for context) */}
<div className="lg:col-span-4 flex flex-col gap-4">
<h3 className="font-eb-garamond text-xl text-slate-900 dark:text-white font-semibold mb-2">Available Certificates</h3>
{/* Active Item */}
<div className="bg-white dark:bg-[#2a1414] p-4 rounded-lg shadow-sm border border-primary/20 cursor-pointer ring-1 ring-primary/10">
<div className="flex gap-4 items-center">
<div className="w-16 h-16 bg-slate-100 rounded bg-cover bg-center flex-shrink-0" data-alt="Close up of gold jewelry texture" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6jI6d8Zx_Uw_pEx7uWM1XVuTXGCq4mP0OO7pvKCVvDFff7uhYcAXyHCqBUTr2bXET6h98z5On7_V0lUJK3SgwFUsmNhXHouj-3SCsgMBKqd-jn_gx9_aV9S25L1nD0ImhQOLIAysqqPu7MVobfBLjNtGsyvrvNXAQDqe-MmdGDKC6K5khmIBCQEaDPvajhMuaDjaZPXLZzdYRWNUFcg0BanoRz3354MoYFw7sdLFy4BrVqGCh6Fak_wMygqpGblm9kuNRQn8ziA')"}}></div>
<div>
<p className="font-bold text-slate-900 dark:text-white text-sm">Padmini Bridal Haar Set</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Issued: Oct 24, 2023</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mt-2">Verified</span>
</div>
</div>
</div>
{/* Inactive Item 1 */}
<div className="bg-white dark:bg-[#2a1414] p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex gap-4 items-center">
<div className="w-16 h-16 bg-slate-100 rounded bg-cover bg-center flex-shrink-0" data-alt="Gold earrings on velvet" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQASJOGWQiaGMPectdoeGfhfHqvxOdAAd4fGltr7Y2599-J6B_6XFzL8Xz983-6EWYL5lsHwunFgrD9N6L4NsuA-WU_7g31Ez0CPESB9fp1AWqw5NPd6Xi9u-lyL9HUi2ZNOMOPcXuzmMbTY18HsXiGQLScSSkYv5_BGsWJjw3BOEtOVy835FET0PEpViq0sMO2uuhvD9naOlW_DOApwdX5zQJ-inzK46WO1n-yXwFoENBs3Pfac3ibTUgzTxr1FdikZxXKu6iCg')"}}></div>
<div>
<p className="font-bold text-slate-900 dark:text-white text-sm">Royal Kundan Earrings</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Issued: Sep 15, 2023</p>
</div>
</div>
</div>
{/* Inactive Item 2 */}
<div className="bg-white dark:bg-[#2a1414] p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex gap-4 items-center">
<div className="w-16 h-16 bg-slate-100 rounded bg-cover bg-center flex-shrink-0" data-alt="Gold bangle detail" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGvNSlrJCvb1dmerNl_vxjY4l3dR6aet04-3Hq6m1usgk2faRJCo2JbrFJ3gDqduN4DfVHjtGjRj-jbJwQ6ofKgdIkWfQC-eIi6KXp2Es_008NkRQt2xACWCbgJZhB5K-JDrC3y4hzuh-2oGIubTJxmvknh8-j7gf9yj7tvW_7v-3aO_LBJAo4Go8-Qsa_X6dSpvjRzuAqgNAezND5SMw0GS1PinAl7HqNbsTurXFh4WxtXjD-AfLCyZyeg4XIDPhL9h-0NDg0lQ')"}}></div>
<div>
<p className="font-bold text-slate-900 dark:text-white text-sm">Lakshmi Gold Bangle</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Issued: Aug 02, 2023</p>
</div>
</div>
</div>
</div>
{/* Right Column: The Certificate */}
<div className="lg:col-span-8">
{/* The Certificate Card */}
<div className="relative bg-parchment-texture text-[#2c1810] shadow-xl p-8 md:p-12 rounded-sm ornamental-border max-w-2xl mx-auto transform transition hover:scale-[1.01] duration-500">
{/* Decorative Corners */}
<div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] opacity-60"></div>
<div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] opacity-60"></div>
<div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37] opacity-60"></div>
<div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] opacity-60"></div>
{/* Watermark Logo */}
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
<svg className="w-64 h-64" fill="currentColor" viewBox="0 0 48 48">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
</svg>
</div>
{/* Certificate Header */}
<div className="text-center mb-8 relative z-10">
<div className="inline-flex items-center justify-center mb-4 text-[#D4AF37]">
<span className="material-symbols-outlined text-4xl">workspace_premium</span>
</div>
<h2 className="font-cormorant font-bold text-3xl md:text-4xl tracking-wide uppercase mb-1 text-[#4a2c2c]">Certificate of Authenticity</h2>
<div className="h-px w-24 bg-[#D4AF37] mx-auto my-3"></div>
<p className="font-eb-garamond italic text-[#5d4037]">Issued by Sanwariya Gold</p>
</div>
{/* Main Content */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mb-8">
{/* Product Image */}
<div className="flex flex-col gap-2">
<div className="aspect-[4/3] w-full bg-[#e6ded0] rounded-sm overflow-hidden border border-[#d6cbb8] shadow-inner relative">
<img alt="Padmini Bridal Haar Set gold necklace on stand" className="w-full h-full object-cover p-2" data-alt="High angle shot of intricate gold necklace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsDboGyvbXLahnASlJMXCYUIp27WKYwFE2pbSlp6COoI89vVvIMezAlHyfalbuhBM7LU0hvZbo70xwH0bnc2eC-tvnRqcSOm8OY3eu5kmhfpYJzIUt4TtLbuQpQcSB5vaWoHuUcpmEGFEvhXBsl5bFu4T0Tog1W0Az8yVPhDObhfdwswe7EcMT8gUX-qJU7OvtBsQoGLaeGHLTQwbCmUkvaYCCUKvu8Cu6Lq0ygoAmqyP0NnvLScnAQxyGW_v4C4i-P5PY159UHQ" />
<div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-[#4a2c2c]">HUID: 45892</div>
</div>
<p className="text-center font-cormorant font-bold text-xl text-[#4a2c2c] mt-2">Padmini Bridal Haar Set</p>
</div>
{/* Specs Table */}
<div className="flex flex-col justify-center">
<table className="w-full text-left border-collapse">
<tbody>
<tr className="border-b border-[#d6cbb8]">
<td className="py-2 font-eb-garamond font-bold text-[#5d4037]">Material</td>
<td className="py-2 font-sans text-sm text-[#2c1810] text-right">22K Hallmark Gold</td>
</tr>
<tr className="border-b border-[#d6cbb8]">
<td className="py-2 font-eb-garamond font-bold text-[#5d4037]">Gross Weight</td>
<td className="py-2 font-sans text-sm text-[#2c1810] text-right">85.450 Grams</td>
</tr>
<tr className="border-b border-[#d6cbb8]">
<td className="py-2 font-eb-garamond font-bold text-[#5d4037]">Gemstones</td>
<td className="py-2 font-sans text-sm text-[#2c1810] text-right">Uncut Polki Diamonds</td>
</tr>
<tr className="border-b border-[#d6cbb8]">
<td className="py-2 font-eb-garamond font-bold text-[#5d4037]">Purity</td>
<td className="py-2 font-sans text-sm text-[#2c1810] text-right">916 (BIS Standard)</td>
</tr>
<tr>
<td className="py-2 font-eb-garamond font-bold text-[#5d4037]">Artisan</td>
<td className="py-2 font-sans text-sm text-[#2c1810] text-right">Master Rameshji Soni</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Verification Text */}
<div className="text-center font-eb-garamond text-[#4a2c2c] text-sm md:text-base leading-relaxed mb-8 relative z-10 px-4">
                        "This document certifies that the jewelry item described above has been hand-crafted using the finest materials and meets the stringent quality standards of Sanwariya Gold. The gold purity is verified by the Bureau of Indian Standards (BIS)."
                    </div>
{/* Footer: Signatures & QR */}
<div className="flex flex-col md:flex-row items-center justify-between border-t border-[#d6cbb8] pt-6 relative z-10 gap-6">
{/* Signatures */}
<div className="flex gap-8 md:gap-12">
<div className="flex flex-col items-center gap-1">
<div className="font-cormorant text-2xl text-[#2c1810] transform -rotate-3 mb-1" style={{"fontFamily":"'Dancing Script', cursive"}}>Rameshji Soni</div>
<div className="h-px w-24 bg-[#8c7b75]"></div>
<span className="text-[10px] uppercase tracking-widest text-[#5d4037] font-sans">Master Karigaar</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="font-cormorant text-2xl text-[#2c1810] transform -rotate-2 mb-1" style={{"fontFamily":"'Dancing Script', cursive"}}>Mohanlal Gupta</div>
<div className="h-px w-24 bg-[#8c7b75]"></div>
<span className="text-[10px] uppercase tracking-widest text-[#5d4037] font-sans">Store Owner</span>
</div>
</div>
{/* QR Code */}
<div className="flex flex-col items-center bg-white p-2 rounded shadow-sm border border-[#d6cbb8]">
<img alt="QR Code for certificate verification" className="w-16 h-16" data-alt="QR Code pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoSHN09r6qZ2hToEhDEfaTRSVrGGTtP45mDZysmqMEyJVLktYcKNiF-GDVG9NZI8_cyqFALo3--fxZ60cU4l-jkJmDVfw8H2spH74FqltcWip7GTbaO1UIQD85JqIkF5IUjbMg0IjSRNXXo5WIoS0YTwXUH_v4IqnyA1yZJ4NLewtCS0llPyJnC6RCaXdzYw5UFIRAcdATbS11MMUaZQwdXoICL2LMYzpwLJQo2xyBhxQ8GNQxER6wjuvvnuzn5XshbW4f6kHMwg" />
<span className="text-[9px] text-[#5d4037] mt-1 font-bold">SCAN TO VERIFY</span>
</div>
</div>
</div>
{/* Action Buttons */}
<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-primary hover:bg-primary-dark text-white font-display font-medium py-3 px-8 rounded shadow-lg shadow-red-900/10 flex items-center justify-center gap-2 transition-all">
<span className="material-symbols-outlined">download</span>
                        DOWNLOAD PDF
                    </button>
<button className="bg-transparent border border-slate-300 dark:border-slate-600 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary font-display font-medium py-3 px-8 rounded flex items-center justify-center gap-2 transition-all">
<span className="material-symbols-outlined">share</span>
                        SHARE
                    </button>
<button className="bg-transparent border border-slate-300 dark:border-slate-600 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary font-display font-medium py-3 px-8 rounded flex items-center justify-center gap-2 transition-all">
<span className="material-symbols-outlined">verified</span>
                        VERIFY ON BLOCKCHAIN
                    </button>
</div>
</div>
</div>
</main>

    </>
  );
}
