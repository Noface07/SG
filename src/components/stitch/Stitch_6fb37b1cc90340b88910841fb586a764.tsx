import React from 'react';
import Link from 'next/link';

export function Stitch_6fb37b1cc90340b88910841fb586a764() {
  return (
    <>

{/* Navbar */}
<nav className="sticky top-0 z-50 w-full border-b border-[#39282a] bg-[#181112]/95 backdrop-blur-sm">
<div className="px-6 lg:px-12 w-full max-w-[1440px] mx-auto">
<div className="flex items-center justify-between h-20">
{/* Logo Area */}
<div className="flex items-center gap-8">
<Link className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 text-gold transition-transform group-hover:scale-110 duration-300">
<span className="material-symbols-outlined text-3xl">diamond</span>
</div>
<h2 className="text-gold-light text-2xl font-accent font-bold tracking-widest uppercase">Sanwariya</h2>
</Link>
{/* Desktop Menu */}
<div className="hidden lg:flex items-center gap-8 ml-8">
<Link className="text-white/80 hover:text-gold text-sm font-medium tracking-widest uppercase transition-colors" href="/collections">Collections</Link>
<Link className="text-white/80 hover:text-gold text-sm font-medium tracking-widest uppercase transition-colors" href="/bespoke">Bespoke</Link>
<Link className="text-white/80 hover:text-gold text-sm font-medium tracking-widest uppercase transition-colors" href="/heritage">Our Story</Link>
</div>
</div>
{/* Right Actions */}
<div className="flex items-center gap-6">
{/* Search */}
<div className="hidden md:flex items-center bg-velvet-light border border-[#39282a] rounded-full px-4 h-10 w-64 focus-within:border-gold transition-colors">
<span className="material-symbols-outlined text-white/50 text-lg">search</span>
<input className="bg-transparent border-none text-sm text-white placeholder-white/50 focus:ring-0 w-full ml-2 font-display" placeholder="Search heritage..." type="text" />
</div>
{/* Icons */}
<div className="flex items-center gap-4">
<button className="text-white hover:text-gold transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
<Link href="/cart" className="text-white hover:text-gold transition-colors relative">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="absolute -top-1 -right-1 bg-primary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
</Link>
<div className="w-8 h-8 rounded-full bg-cover bg-center border border-gold/30" data-alt="User Avatar" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ84lof4vE2ODh8EWgWgcDLgmv-Ijb0cI52E9GjjClhPvXwnMh69H-woMqRYPZaPBMgUsscZZueLHqvxR5_vb5UBpeOdX9IIhdulHK3EB6rEK6ra4YXNm1Wgy0AwK-B1R738vBoDsXhQGo7IwXmdNsytVPho7DSWE4xpgMPTrr9FCXL34wCwB912w8AL3aJcZK3zuLOdO6MVWS5RhQIGE1Za_oJWSLCO-QYSY3JHJ-frXQAOv-ZW-ZXpRrC0M2K8w7OWzRiB-i2Q')"}}></div>
</div>
</div>
</div>
</div>
</nav>
{/* Hero Section */}
<header className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden bg-velvet">
{/* Background Image with Overlay */}
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/10 to-background-dark z-10"></div>
<div className="w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay" data-alt="Ornate Indian palace wall detail texture" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzupVUFFcJkf0i6wkQzR9LNTOg1lp37ir49RmoFKHZQoGQh1oydtWgfeMKmBxd9iFi9Acg7EqWkmsjmP1BhVPnwhebpzQtzGkt6n8lNhUfcLrR2gKH3suoL1fF-FjPuqsZrsxgC8AmFRzpWsT8ojGI-GnURu9Lw3fNXxXJV46bhoQXNkmDcVPoKgU-CtG0QepanQ0K58Mo7pujLz4L2oDR5WZg4-MCDhbcRL95sW8rZUeeczECJ2Z0htydz0PQbot998dZUTNXdg')"}}></div>
{/* Grain Texture */}
<div className="absolute inset-0 bg-grain opacity-20 z-20 pointer-events-none"></div>
</div>
{/* Mandala Watermark */}
<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
<div className="w-[600px] h-[600px] rounded-full border-[1px] border-gold animate-spin-slow" style={{"animationDuration":"60s"}}></div>
<div className="absolute w-[400px] h-[400px] border-[1px] border-gold rotate-45"></div>
</div>
<div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-4">
<span className="text-gold text-xs tracking-[0.3em] font-accent uppercase border-b border-gold/30 pb-1 mb-2">Heritage Collections</span>
<h1 className="text-5xl md:text-7xl font-display italic font-medium text-gold-light leading-tight">
                Every Piece, <span className="text-primary">A Prayer</span>
</h1>
<p className="text-white/70 font-display text-lg md:text-xl max-w-2xl mt-2">
                Discover jewelry that transcends time, crafted with the devotion of the old world for the royalty of today.
            </p>
</div>
</header>
{/* Sticky Filter Bar */}
<div className="sticky top-20 z-40 bg-background-dark/95 backdrop-blur-md border-b border-gold/30 shadow-lg">
<div className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
{/* Categories */}
<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-gold text-velvet font-accent text-xs font-bold tracking-widest border border-gold hover:bg-gold-light transition-colors">
                    ALL
                </button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-gold font-accent text-xs font-bold tracking-widest border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors">
                    NECKLACES
                </button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-gold font-accent text-xs font-bold tracking-widest border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors">
                    EARRINGS
                </button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-gold font-accent text-xs font-bold tracking-widest border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors">
                    BANGLES
                </button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-gold font-accent text-xs font-bold tracking-widest border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors">
                    RINGS
                </button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-gold font-accent text-xs font-bold tracking-widest border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors">
                    SETS
                </button>
</div>
{/* Sort */}
<div className="flex items-center gap-3 min-w-[200px] justify-end">
<span className="text-white/50 text-xs font-accent tracking-widest uppercase">Sort By:</span>
<div className="relative group">
<button className="flex items-center gap-2 text-gold font-accent text-sm font-medium uppercase hover:text-white transition-colors">
                        Featured
                        <span className="material-symbols-outlined text-lg">expand_more</span>
</button>
</div>
</div>
</div>
</div>
{/* Main Content Grid */}
<main className="flex-grow w-full max-w-[1440px] mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
{/* Card 1 */}
<div className="group flex flex-col gap-4">
<div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-velvet-light">
{/* Image */}
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Intricate gold bridal necklace set on mannequin" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKMCEXRwo3-3Omfp0UX0_wsmYpD6QvuuMCayCqEFnW-qv---lyTKYQM3tHYNtOeBFs0Hj-MZAKs2FvfydJKwS6-jetmUMZbupkyxzqfFtV443CP-7wLCxYPwthKeQEbni1u3dGAlCyjanFSeAcpXR9Mb3ZJ8J51VjCLwV8JcdCbjTGqs8DegM8ojAWv2-PY_i97lro8enBUhJzdynLH2Sigu2ZsW14jwrbVl-S3R7kjAUe6jz-sJOUeDOosKHNJEs-DoCA80BknA')"}}></div>
{/* Badge */}
<div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur px-3 py-1 border border-gold/20">
<span className="text-gold text-[10px] font-accent tracking-widest uppercase">JADAU</span>
</div>
{/* New Badge */}
<div className="absolute top-4 right-4 bg-primary px-3 py-1">
<span className="text-white text-[10px] font-accent tracking-widest uppercase">NEW</span>
</div>
{/* Overlay Actions */}
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors" title="Quick View">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors" title="Wishlist">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<h3 className="text-2xl font-display text-gold-light italic">Padmini Bridal Haar Set</h3>
<div className="flex items-center gap-2 text-xs text-white/40 font-accent tracking-widest uppercase">
<span>45g Pure Gold</span>
<span className="w-1 h-1 rounded-full bg-gold/50"></span>
<span>Certified</span>
</div>
<p className="text-gold text-lg font-accent mt-1">$4,500</p>
<Link href="/cart" className="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 uppercase font-accent text-xs tracking-widest transition-all duration-300">
                        Add to Cart
                    </Link>
</div>
</div>
{/* Card 2 */}
<div className="group flex flex-col gap-4">
<div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-velvet-light">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Heavy Kundan choker necklace on dark velvet" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqU31O95B_QKCrkJfIEaCoESDzeZ1fTrvDXvaUk7Hv9SoDB08D7W1ODpQL5RA65jboWAmBdA4lHMSOy2e-ecNQ-RA0OULUWQMmVjLuLhIrR7l-byovtsGZ_iboqYknULWYd9-4BcA03bmRhdBwxeD3GlmXiqSWZavKyQp5xCyz7aOmdJRQQ3_QBC9lF263LHsTMF9ZDDu6_XKjhU8JRCUcgIw6qRGaLwbbEWWGtOw7RSia-9WbUXxAKTDhyLUwStTv8Vo1V0oQmw')"}}></div>
<div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur px-3 py-1 border border-gold/20">
<span className="text-gold text-[10px] font-accent tracking-widest uppercase">KUNDAN</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<h3 className="text-2xl font-display text-gold-light italic">Rajwada Kundan Choker</h3>
<div className="flex items-center gap-2 text-xs text-white/40 font-accent tracking-widest uppercase">
<span>22g Gold</span>
<span className="w-1 h-1 rounded-full bg-gold/50"></span>
<span>Polki Diamonds</span>
</div>
<p className="text-gold text-lg font-accent mt-1">$2,100</p>
<Link href="/cart" className="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 uppercase font-accent text-xs tracking-widest transition-all duration-300">
                        Add to Cart
                    </Link>
</div>
</div>
{/* Card 3 */}
<div className="group flex flex-col gap-4">
<div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-velvet-light">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Colorful Meenakari earrings hanging" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzM1f1UtxRQDck_BqDUdAgI_kC0TEMkJkaZezTFbERR5nx5NB3l4DErdgXSQgf5KP-ph2qfA-1US2R4sIWEM9Rz7e3Ek_6MXDDvaLYahaLxRdNmweiIlI3HfkvH3hrLTUZaanQ9_NRX_EkAuYzfn5vVFyL8CRVUXSeeaooTbhfgBTT2XkpO3WUfCs8rzl4Yf6pwTyhk3_fiHuCGSzftov1baeYN62-Skx8rdy8TQNrDXH39YKRwDqRblI4cG4qyoeMzIgnGyxb_Q')"}}></div>
<div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur px-3 py-1 border border-gold/20">
<span className="text-gold text-[10px] font-accent tracking-widest uppercase">MEENAKARI</span>
</div>
<div className="absolute top-4 right-4 bg-gold-dark px-3 py-1">
<span className="text-white text-[10px] font-accent tracking-widest uppercase">BESTSELLER</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<h3 className="text-2xl font-display text-gold-light italic">Jaipur Meena Jhumkas</h3>
<div className="flex items-center gap-2 text-xs text-white/40 font-accent tracking-widest uppercase">
<span>15g Gold</span>
<span className="w-1 h-1 rounded-full bg-gold/50"></span>
<span>Enamel Work</span>
</div>
<p className="text-gold text-lg font-accent mt-1">$1,200</p>
<Link href="/cart" className="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 uppercase font-accent text-xs tracking-widest transition-all duration-300">
                        Add to Cart
                    </Link>
</div>
</div>
{/* Card 4 */}
<div className="group flex flex-col gap-4">
<div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-velvet-light">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Antique temple gold bangle with carvings" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJXUxUlcffqt1mijrM5mxvqrnBHuIl_c4MqWSq5eMr0fqdKacVTtwRH62bs66jx9yEve3hK4GxGWfv0QzFv7sUnQ9HtZLQYBmFyWj8ItPqa8RvvP2zmmRG-aqmHO1or-_lUMEs_pFImPdQd5MPaVL1cxysix2FdDi1fEDfFpPx3V7qfXEBLsAen5wHVk3K6114SsML_4rRVcemQaTPoQaZECw1-8rxX5VWqdpVhSjdNGaQEkwhhq03eQVQbQZMxDm-k0HmYSymgw')"}}></div>
<div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur px-3 py-1 border border-gold/20">
<span className="text-gold text-[10px] font-accent tracking-widest uppercase">TEMPLE</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<h3 className="text-2xl font-display text-gold-light italic">Divine Temple Kangan</h3>
<div className="flex items-center gap-2 text-xs text-white/40 font-accent tracking-widest uppercase">
<span>30g Gold</span>
<span className="w-1 h-1 rounded-full bg-gold/50"></span>
<span>Hand Carved</span>
</div>
<p className="text-gold text-lg font-accent mt-1">$3,000</p>
<Link href="/cart" className="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 uppercase font-accent text-xs tracking-widest transition-all duration-300">
                        Add to Cart
                    </Link>
</div>
</div>
{/* Card 5 */}
<div className="group flex flex-col gap-4">
<div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-velvet-light">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Polki diamond heavy necklace set" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1qYjDwu5jJsAfaH4COmy5PxhBre06hMThNGtjrn-yYXf1Gb4sfLTRiYCBHP08sZSOqkZU0xgjYdudzEQ8X4HgphsE7MiiB03HkWZCAi8jb7a9WB7SxebZAU-eK4m_IgZuAXOWKEQc_8dDuEC7uwAqdsQDUdp39Qb1zVijw97CE1YT0MXoXGr90iW7d5MJgVxz5huo0aapqVbUCrH3Gj0YIvfiOuF9x5lsvYRGZYMKoekLOxtB6FdCX6vN__ZwmWvMtSO5UPm0Ew')"}}></div>
<div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur px-3 py-1 border border-gold/20">
<span className="text-gold text-[10px] font-accent tracking-widest uppercase">POLKI</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<h3 className="text-2xl font-display text-gold-light italic">Nizam Polki Diamond Set</h3>
<div className="flex items-center gap-2 text-xs text-white/40 font-accent tracking-widest uppercase">
<span>55g Gold</span>
<span className="w-1 h-1 rounded-full bg-gold/50"></span>
<span>Uncut Diamonds</span>
</div>
<p className="text-gold text-lg font-accent mt-1">$5,800</p>
<Link href="/cart" className="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 uppercase font-accent text-xs tracking-widest transition-all duration-300">
                        Add to Cart
                    </Link>
</div>
</div>
{/* Card 6 */}
<div className="group flex flex-col gap-4">
<div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-velvet-light">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Intricate antique jadau ring close up" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdoQmxxhpJw4aMODJ-NSgeRAtJSQTZl5AvY_rDdsv3RBsC5Q4MCruneamR82PeMOjAMnhT2nPxzHksoTW5joF985dwopnoT-eNdJXPn4WBPCqnxf8Ys9x5fLFIWm_gqYengND33nRGrL0CmpGeivOhHR5M8g6MmTUDzlwKJD7ZgtdajN1t0PCXnQNIqv315F8EyX7GXW4lPHfQskZM9v2E3JaUp73FuMiQtV8w5QUKaliOpHAGJ4AGzd8D9Ve7MYhaxI8YTC43yQ')"}}></div>
<div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur px-3 py-1 border border-gold/20">
<span className="text-gold text-[10px] font-accent tracking-widest uppercase">JADAU</span>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="w-10 h-10 rounded-full bg-white text-velvet flex items-center justify-center hover:bg-gold transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1 items-center text-center">
<h3 className="text-2xl font-display text-gold-light italic">Royal Antique Ring</h3>
<div className="flex items-center gap-2 text-xs text-white/40 font-accent tracking-widest uppercase">
<span>8g Gold</span>
<span className="w-1 h-1 rounded-full bg-gold/50"></span>
<span>Ruby Accent</span>
</div>
<p className="text-gold text-lg font-accent mt-1">$950</p>
<Link href="/cart" className="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 uppercase font-accent text-xs tracking-widest transition-all duration-300">
                        Add to Cart
                    </Link>
</div>
</div>
</div>
{/* Load More Section */}
<div className="mt-20 flex flex-col items-center justify-center gap-4">
<div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
<button className="group relative px-8 py-3 bg-transparent overflow-hidden">
<span className="relative z-10 text-gold font-accent text-sm tracking-[0.2em] group-hover:text-velvet transition-colors duration-300 uppercase">Load More Artifacts</span>
<div className="absolute inset-0 border border-gold opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</button>
<p className="text-white/30 text-xs font-display italic">Displaying 6 of 48 treasures</p>
</div>
</main>
{/* Simple Footer Section for Context */}
<footer className="border-t border-[#39282a] bg-velvet py-12 px-6 mt-12 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<h2 className="text-gold text-xl font-accent font-bold uppercase tracking-widest">Sanwariya Gold</h2>
<p className="text-white/40 text-sm mt-2 font-display">Crafting eternity since 1985.</p>
</div>
<div className="flex gap-6">
<Link className="text-white/60 hover:text-gold transition-colors text-sm font-accent uppercase tracking-wider" href="/visit">Contact</Link>
<Link className="text-white/60 hover:text-gold transition-colors text-sm font-accent uppercase tracking-wider" href="/shipping-returns">Shipping</Link>
<Link className="text-white/60 hover:text-gold transition-colors text-sm font-accent uppercase tracking-wider" href="/shipping-returns">Returns</Link>
</div>
</div>
</footer>

    </>
  );
}
