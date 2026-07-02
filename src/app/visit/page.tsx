import { PageHero } from '@/components/ui/PageHero';
import { GoldButton } from '@/components/ui/GoldButton';
import { MaroonButton } from '@/components/ui/MaroonButton';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata = { title: 'Visit the Boutique | Sanwariya Gold' };

export default function VisitPage() {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;

    return (
        <>
            <PageHero
                eyebrow="The Boutique"
                title={<>Visit the <em className="italic font-light text-shimmer">Atelier</em></>}
                subtitle="Where every visitor is received as family, and every piece is shown over chai."
            />

            <section className="bg-[#F9F7F2] py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white border border-gold/20 p-8 shadow-sm flex flex-col gap-4">
                            <span className="font-label text-gold tracking-[0.3em] uppercase text-xs">The Boutique</span>
                            <h3 className="font-heading text-2xl text-maroon">Find Us</h3>
                            <p className="font-body text-foreground/70 leading-relaxed">{CONTACT_INFO.address}</p>
                            <div className="mt-auto pt-4">
                                <GoldButton href={mapsUrl} variant="outline">Open in Maps</GoldButton>
                            </div>
                        </div>

                        <div className="bg-white border border-gold/20 p-8 shadow-sm flex flex-col gap-4">
                            <span className="font-label text-gold tracking-[0.3em] uppercase text-xs">Hours</span>
                            <h3 className="font-heading text-2xl text-maroon">When to Come</h3>
                            <ul className="font-body text-foreground/70 leading-relaxed space-y-2">
                                <li className="flex justify-between gap-4"><span>Monday – Saturday</span><span>10:30 – 19:30</span></li>
                                <li className="flex justify-between gap-4"><span>Sunday</span><span>By appointment</span></li>
                                <li className="flex justify-between gap-4"><span>Festivals</span><span>Extended hours</span></li>
                            </ul>
                            <p className="font-body text-sm text-foreground/50 mt-auto pt-4">Private bridal viewings are held after hours by appointment.</p>
                        </div>

                        <div className="bg-white border border-gold/20 p-8 shadow-sm flex flex-col gap-4">
                            <span className="font-label text-gold tracking-[0.3em] uppercase text-xs">Concierge</span>
                            <h3 className="font-heading text-2xl text-maroon">Reach Us</h3>
                            <ul className="font-body text-foreground/70 leading-relaxed space-y-2">
                                <li>Phone: <a href={`tel:${CONTACT_INFO.phone}`} className="text-maroon hover:text-gold transition-colors">{CONTACT_INFO.phone}</a></li>
                                <li>WhatsApp: <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`} className="text-maroon hover:text-gold transition-colors">{CONTACT_INFO.whatsapp}</a></li>
                                <li>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-maroon hover:text-gold transition-colors break-all">{CONTACT_INFO.email}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 bg-maroon-dark dark-grain-overlay text-center py-16 px-6 relative">
                        <div className="relative z-20">
                            <h3 className="font-heading text-3xl md:text-4xl text-cream mb-4">Prefer a Private Viewing?</h3>
                            <p className="font-body text-cream/80 max-w-xl mx-auto mb-8">Reserve the atelier for yourself. Bridal parures, signature pieces, and the vault collection, shown exclusively to you.</p>
                            <MaroonButton href="/appointments" className="!bg-gold !border-gold hover:!bg-gold-dark hover:!border-gold-dark">Book an Appointment</MaroonButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
