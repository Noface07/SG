import React from 'react';
import Link from 'next/link';

export function Stitch_ce17725e475545788e688ef1cab01f80() {
  return (
    <>

<div className="flex h-screen w-full overflow-hidden">
{/* Sidebar Navigation */}
<aside className="w-72 hidden md:flex flex-col border-r border-stone-200 dark:border-stone-800 bg-background-light dark:bg-[#180c0c] h-full overflow-y-auto">
<div className="p-6 flex flex-col gap-8 h-full">
{/* User Info */}
<div className="flex gap-4 items-center">
<div className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 shrink-0 border-2 border-primary/30" data-alt="Portrait of a woman wearing jewelry" style={{"backgroundImage":"url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDsai73DSMRqcaHxj9_XuG-F2KDiuad3dX9-OxA5tiRn17SgnR_NDDdGwl-12ZsSoEtE0GZQH3Dxsp8uf0Q5ZUFN73IEvgT90MQiyzLkX31uLJdB03vs711LuaZYqQDfNWQJP2tuUVD7igN_gZnED0DusucBgFcqHaA0su-YvzMFZeSyiAjauGKq7cyzuPU0DdP-CSD8s9FNilY08SwXaKe3vqEyyYrKwqGWtsLv8jTw94x6azyLWzk035-CjCW2Wr8R40K6MDaGA\")"}}></div>
<div className="flex flex-col">
<h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Devotee Account</h1>
<p className="text-stone-500 dark:text-[#b99d9d] text-sm font-normal">Devotee since 2021</p>
</div>
</div>
{/* Nav Links */}
<nav className="flex flex-col gap-2 flex-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#2a1a1a] transition-colors group" href="#">
<span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">package_2</span>
<p className="text-sm font-medium">Orders</p>
</a>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 dark:bg-[#392828] text-primary dark:text-white transition-colors" href="/account/wishlist">
<span className="material-symbols-outlined fill-1">favorite</span>
<p className="text-sm font-medium">Wishlist</p>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#2a1a1a] transition-colors group" href="#">
<span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">verified</span>
<p className="text-sm font-medium">Certificates</p>
</Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#2a1a1a] transition-colors group" href="#">
<span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">person</span>
<p className="text-sm font-medium">Profile</p>
</Link>
</nav>
{/* Footer/Logout */}
<div className="pt-6 border-t border-stone-200 dark:border-stone-800">
<button className="flex items-center gap-3 px-4 py-2 w-full text-slate-500 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors">
<span className="material-symbols-outlined">logout</span>
<span className="text-sm font-medium">Sign Out</span>
</button>
</div>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark relative">
{/* Mobile Header */}
<div className="md:hidden flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-800 bg-background-light dark:bg-[#180c0c] sticky top-0 z-20">
<span className="font-display font-bold text-lg text-primary">Sanwariya Gold</span>
<button className="text-slate-900 dark:text-white">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
<div className="max-w-[1200px] w-full mx-auto p-6 md:p-10 lg:p-14 flex flex-col gap-10 pb-20">
{/* Page Header */}
<div className="flex flex-col gap-2">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">My Devotee Account</h2>
<p className="text-stone-500 dark:text-[#b99d9d]">Manage your exclusive wishlist and personal profile settings.</p>
</div>
{/* Tabs (Visual representation within main content) */}
<div className="flex border-b border-stone-200 dark:border-stone-800">
<Link href="/account/wishlist" className="px-6 py-3 text-primary border-b-2 border-primary font-medium text-sm md:text-base tracking-wide">
                        WISHLIST
                    </Link>
<Link href="/account" className="px-6 py-3 text-stone-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm md:text-base tracking-wide transition-colors">
                        PROFILE SETTINGS
                    </Link>
</div>
{/* Wishlist Section */}
<section className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display">Pieces You're Dreaming Of</h3>
<span className="text-sm text-stone-500 dark:text-stone-400">3 Items</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Product Card 1 */}
<div className="group relative flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#1a0f0f] border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden">
<div className="absolute top-3 left-3 z-10 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                    Only 1 Left
                                </div>
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Close up of gold necklace on model" style={{"backgroundImage":"url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuD-aaFlnhW-VjIgfr0lXJjUCuhZbpP9GI4IWMidKWLezl4FnCwtZ9nCEmH9hYIBi04Sx4u09sQXaCHTX8ffhm1xMb-ZRypa6fT5N8HbHFiYIPdwLreueqCVLPqu2l8mM3xc1lN5XXwJmrJpH9RRgOnTlKd0rXzMwGvnExEbmmqy02MMnsB6DeLFH9gpNw79ARAMiBz82xb2TwZSBaMhLqJpUNPk54Wr8_5Wz-xKpsmYsUpDisCOkB29g7SCcgKv1LUn0DoKgqslmg\")"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
</div>
<div className="p-4 flex flex-col gap-3 flex-1 justify-between">
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white font-display leading-tight">Polki Kundan Necklace</h4>
<p className="text-xs text-stone-500 dark:text-[#b99d9d] mt-1 font-sans">22K Gold • Uncut Diamonds</p>
<p className="text-primary font-medium mt-2">₹ 2,45,000</p>
</div>
<Link href="/cart" className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded text-xs tracking-wider uppercase transition-colors">
                                    Move to Cart
                                </Link>
</div>
</div>
{/* Product Card 2 */}
<div className="group relative flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#1a0f0f] border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Traditional gold earrings with intricate design" style={{"backgroundImage":"url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuA2ByEhAjeqOAWz42X6vlnxf-wwOOkE8pAx67G6iwkZZ6DQ32v7IcBad7xZXcHvhJfNIa4FDo4ecauThWH7zRmuLCrscdiyb-0pBpeGw4snHRh75TfIt466tmZWIH8pnU7z36pNNhK7w5uJ2Z2bW1VypWD9zjjxyKTE502ZPnP-e-8rRVhBI5ugbmpYTJdBDFBhWWMgpafVgmWoTGPwUgbxKmFEs55tFIPdKsn4_IZXVSmJoCgU6VmNSPK1NQj4brPqpTO8LrNpug\")"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
</div>
<div className="p-4 flex flex-col gap-3 flex-1 justify-between">
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white font-display leading-tight">Meenakari Jhumkas</h4>
<p className="text-xs text-stone-500 dark:text-[#b99d9d] mt-1 font-sans">22K Gold • Enamel Work</p>
<p className="text-primary font-medium mt-2">₹ 85,000</p>
</div>
<Link href="/cart" className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded text-xs tracking-wider uppercase transition-colors">
                                    Move to Cart
                                </Link>
</div>
</div>
{/* Product Card 3 */}
<div className="group relative flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#1a0f0f] border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative aspect-[4/5] overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Gold bangle with temple design" style={{"backgroundImage":"url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCs77JOiEYiFzCyqRvUVZ9n1op8wFSri3oGzrw7P2JoXDfSaFxUQbZTOePhyB_bWteg_engVpEX4L-wOPZr76H4ispjn1hSaAG4UnnPXAolDWKfTXVh3TLV5nqVj3RQlJq2jloyUDk7bUVyEXC8F3g5ZevzpSrk7rt8sk3AziqnPoc34UGCPR0VQ8moXt3I6x0DVaST1v7Ob7EdaSSko20K7M3EcOn0ud39zH1OKlqfk0-2LoB9HMCYm8s6Kz_haH-e-Tx-ei_i_g\")"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
</div>
<div className="p-4 flex flex-col gap-3 flex-1 justify-between">
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white font-display leading-tight">Temple Gold Bangle</h4>
<p className="text-xs text-stone-500 dark:text-[#b99d9d] mt-1 font-sans">22K Antique Gold</p>
<p className="text-primary font-medium mt-2">₹ 1,20,000</p>
</div>
<Link href="/cart" className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded text-xs tracking-wider uppercase transition-colors">
                                    Move to Cart
                                </Link>
</div>
</div>
</div>
</section>
<div className="h-px w-full bg-stone-200 dark:bg-stone-800 my-4"></div>
{/* Profile Section */}
<section className="flex flex-col gap-8 max-w-2xl">
<div className="flex items-center justify-between">
<h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display">Personal Details</h3>
<Link href="/account" className="text-sm text-primary hover:text-primary/80 font-medium">Edit Profile</Link>
</div>
<form className="flex flex-col gap-8 font-sans">
{/* Name Field */}
<div className="flex flex-col gap-1">
<label className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">Full Name</label>
<input className="bg-transparent border-0 border-b border-stone-300 dark:border-stone-700 focus:border-gold focus:ring-0 text-slate-900 dark:text-white px-0 py-2 text-lg font-display placeholder-stone-500" type="text" value="Radhika Sharma" />
</div>
{/* Contact Info Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-1 relative">
<label className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">Email Address</label>
<div className="flex items-center w-full border-b border-stone-300 dark:border-stone-700 focus-within:border-gold">
<input className="flex-1 bg-transparent border-0 focus:ring-0 text-slate-900 dark:text-white px-0 py-2 text-base font-display placeholder-stone-500" type="email" value="radhika.sharma@example.com" />
<span className="material-symbols-outlined text-green-500 text-lg" title="Verified">check_circle</span>
</div>
</div>
<div className="flex flex-col gap-1 relative">
<label className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">Phone Number</label>
<div className="flex items-center w-full border-b border-stone-300 dark:border-stone-700 focus-within:border-gold">
<input className="flex-1 bg-transparent border-0 focus:ring-0 text-slate-900 dark:text-white px-0 py-2 text-base font-display placeholder-stone-500" type="tel" value="+91 98765 43210" />
<span className="material-symbols-outlined text-green-500 text-lg" title="Verified">check_circle</span>
</div>
</div>
</div>
{/* Dates Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-1">
<label className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">Date of Birth</label>
<input className="bg-transparent border-0 border-b border-stone-300 dark:border-stone-700 focus:border-gold focus:ring-0 text-slate-900 dark:text-white px-0 py-2 text-base font-display placeholder-stone-500 dark:[color-scheme:dark]" type="date" />
</div>
<div className="flex flex-col gap-1">
<label className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">Anniversary</label>
<input className="bg-transparent border-0 border-b border-stone-300 dark:border-stone-700 focus:border-gold focus:ring-0 text-slate-900 dark:text-white px-0 py-2 text-base font-display placeholder-stone-500 dark:[color-scheme:dark]" type="date" />
</div>
</div>
{/* Preferences */}
<div className="flex flex-col gap-4 mt-4">
<label className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">Language Preference</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input checked={true} className="peer sr-only" name="language" type="radio" />
<div className="px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary transition-all text-sm font-medium">
                                        English
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="language" type="radio" />
<div className="px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary transition-all text-sm font-medium">
                                        Hindi
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="language" type="radio" />
<div className="px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary transition-all text-sm font-medium">
                                        Rajasthani
                                    </div>
</label>
</div>
</div>
<div className="flex gap-4 mt-6">
<button className="px-6 py-2 bg-transparent border border-stone-300 dark:border-stone-600 text-slate-900 dark:text-stone-300 rounded font-medium text-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" type="button">
                                Cancel
                            </button>
<button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded font-medium text-sm transition-colors shadow-lg shadow-primary/20" type="submit">
                                Save Changes
                            </button>
</div>
</form>
</section>
</div>
</main>
</div>

    </>
  );
}
