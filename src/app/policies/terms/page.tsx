import { PageHero } from '@/components/ui/PageHero';

export const metadata = { title: 'Terms of Service | Sanwariya Gold' };

const TERMS = [
    {
        title: 'Acceptance of Terms',
        body: 'By browsing or purchasing from Sanwariya Gold, you agree to these terms. We may update them from time to time; the version published here always governs.',
    },
    {
        title: 'Pricing & Gold Rate',
        body: 'Prices shown are indicative and linked to the prevailing gold rate at the time of billing. Final pricing, including making charges and GST, is confirmed in writing before payment is taken. In case of an obvious listing error, we reserve the right to cancel and fully refund the order.',
    },
    {
        title: 'Orders & Cancellation',
        body: 'Vault pieces may be cancelled free of charge before dispatch. Made-to-order and bespoke commissions may be cancelled within 48 hours of confirmation; after crafting begins, the advance becomes non-refundable as material and bench time are committed.',
    },
    {
        title: 'Hallmarking & Certification',
        body: 'All gold jewellery is BIS hallmarked. Each piece ships with an atelier certificate stating gross weight, purity, stone details, and craft technique. Valuations for insurance are provided on request.',
    },
    {
        title: 'Intellectual Property',
        body: 'Designs, sketches, photographs, and text on this site are the property of Sanwariya Gold. Bespoke designs commissioned by you are crafted exclusively for you and are never reproduced.',
    },
    {
        title: 'Limitation of Liability',
        body: 'Our liability for any claim is limited to the invoice value of the piece concerned. Nothing in these terms limits rights available to you under applicable consumer protection law.',
    },
    {
        title: 'Governing Law',
        body: 'These terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of the courts at Chittorgarh, Rajasthan.',
    },
];

export default function TermsPage() {
    return (
        <>
            <PageHero
                eyebrow="Policies"
                title={<>Terms of <em className="italic font-light text-shimmer">Service</em></>}
                subtitle="Plain words, honoured in full. The Mewar way."
            />
            <section className="bg-[#F9F7F2] py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-white border border-gold/20 p-8 md:p-12 shadow-sm divide-y divide-gold/15">
                        {TERMS.map((term, i) => (
                            <article key={term.title} className="py-8 first:pt-0 last:pb-0">
                                <h2 className="font-heading text-xl md:text-2xl text-maroon mb-3">
                                    {i + 1}. {term.title}
                                </h2>
                                <p className="font-body text-lg text-foreground/75 leading-relaxed">{term.body}</p>
                            </article>
                        ))}
                    </div>
                    <p className="font-body text-sm text-foreground/50 text-center mt-8">Last updated: July 2026</p>
                </div>
            </section>
        </>
    );
}
