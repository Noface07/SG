import { PageHero } from '@/components/ui/PageHero';

export const metadata = { title: 'Safe Passage & Returns | Sanwariya Gold' };

const SECTIONS = [
    {
        title: 'Insured Safe Passage',
        body: [
            'Every shipment travels fully insured, door to door, through vetted secure logistics partners. Packages are tamper-evident, unmarked for discretion, and released only against signature with OTP verification.',
        ],
    },
    {
        title: 'Delivery Timelines',
        body: [
            'Pieces in the vault ship within 48 hours and typically arrive in 3 to 7 working days across India.',
            'Made-to-order and bespoke commissions take 60 to 120 days at the bench; your concierge shares progress at every stage.',
            'Orders above ₹5 lakh are delivered by scheduled secure courier with prior phone verification.',
        ],
    },
    {
        title: 'The 30-Day Promise',
        body: [
            'If a piece does not feel destined for you, return it unworn, with its certificate and original packing, within 30 days of delivery for a full refund to the original payment method within 7 business days.',
            'Bespoke commissions and engraved pieces, being made for you alone, are not eligible for return but are covered by our lifetime service promise.',
        ],
    },
    {
        title: 'Lifetime Exchange & Buyback',
        body: [
            'Every Sanwariya Gold piece may be exchanged at the prevailing gold rate, at any time, forever. Buyback is offered against the original certificate as per the policy card issued with your purchase.',
        ],
    },
];

export default function ShippingReturnsPage() {
    return (
        <>
            <PageHero
                eyebrow="Policies"
                title={<>Safe Passage <em className="italic font-light text-shimmer">& Returns</em></>}
                subtitle="Gold that travels with the same care with which it was made."
            />
            <section className="bg-[#F9F7F2] py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-3xl space-y-12">
                    {SECTIONS.map((section, i) => (
                        <article key={section.title} className="bg-white border border-gold/20 p-8 md:p-10 shadow-sm">
                            <div className="flex items-center gap-4 mb-5">
                                <span className="font-label text-gold text-xl">0{i + 1}</span>
                                <h2 className="font-heading text-2xl md:text-3xl text-maroon">{section.title}</h2>
                            </div>
                            <div className="space-y-4">
                                {section.body.map((p, j) => (
                                    <p key={j} className="font-body text-lg text-foreground/75 leading-relaxed">{p}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
