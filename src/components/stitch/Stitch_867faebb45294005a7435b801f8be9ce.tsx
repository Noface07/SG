import React from 'react';
import Link from 'next/link';

export function Stitch_867faebb45294005a7435b801f8be9ce() {
  return (
    <>

{/* Backdrop / Main Content Area (Blurred/Dimmed to focus on Drawer) */}
<div aria-hidden="true" className="flex-1 flex flex-col relative opacity-40 pointer-events-none hidden md:flex">
{/* Reusing TopNavBar structure for the background visual context */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#393628] px-10 py-3 bg-background-light dark:bg-background-dark">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-slate-900 dark:text-white">
<div className="size-8 text-primary">
<span className="material-symbols-outlined text-3xl">diamond</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Sanwariya Gold</h2>
</div>
<div className="flex items-center gap-9">
<span className="text-sm font-medium leading-normal">Collections</span>
<span className="text-sm font-medium leading-normal">Atelier</span>
<span className="text-sm font-medium leading-normal">Heritage</span>
</div>
</div>
<div className="flex flex-1 justify-end gap-8">
<div className="flex gap-2">
<div className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#393628]">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<div className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#393628]">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
</div>
</div>
</div>
</header>
{/* Background Grid of Items */}
<div className="p-10 grid grid-cols-3 gap-8 opacity-50">
<div className="aspect-[3/4] bg-slate-200 dark:bg-[#393628] rounded-lg"></div>
<div className="aspect-[3/4] bg-slate-200 dark:bg-[#393628] rounded-lg"></div>
<div className="aspect-[3/4] bg-slate-200 dark:bg-[#393628] rounded-lg"></div>
</div>
</div>
{/* Cart Side Drawer */}
<div className="relative z-10 w-full md:w-[480px] h-full flex flex-col border-l border-slate-200 dark:border-[#393628] shadow-2xl bg-drawer-bg bg-grain">
{/* Header */}
<div className="flex items-center justify-between px-8 py-6 border-b border-primary/20 relative z-10">
<h2 className="text-primary text-xl font-display italic tracking-wide">Your Cart</h2>
<button className="text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Empty State Content */}
<div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10 text-center">
{/* Lotus Icon */}
<div className="mb-8 text-primary/30 transform transition-transform duration-700 hover:scale-105">
<span className="material-symbols-outlined" style={{"fontSize":"120px","fontWeight":"200"}}>local_florist</span>
</div>
{/* Text Content */}
<div className="space-y-4 max-w-xs mx-auto">
<p className="text-[#F5F5DC] text-2xl font-display italic leading-tight tracking-wide">
                    Your collection awaits
                </p>
<p className="text-slate-400 text-base font-display font-light leading-relaxed">
                    You have not yet selected a piece. <br />Browse our atelier.
                </p>
</div>
{/* CTA Button */}
<Link href="/collections" className="mt-12 group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-display font-medium tracking-widest text-primary border border-primary/40 hover:border-primary rounded transition-all duration-300 bg-transparent hover:bg-primary/5">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
<span className="relative flex items-center gap-2 text-sm uppercase">
                    Explore Collections 
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
</span>
</Link>
</div>
{/* Footer / Decorative Bottom */}
<div className="p-8 border-t border-primary/10 relative z-10">
<div className="flex justify-between items-center text-xs text-slate-500 font-display tracking-widest uppercase">
<span>Sanwariya Gold</span>
<span>Est. 1982</span>
</div>
</div>
</div>

    </>
  );
}
