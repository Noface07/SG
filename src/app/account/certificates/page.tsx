import { MaroonButton } from '@/components/ui/MaroonButton';

export const metadata = { title: 'Digital Certificates | Sanwariya Gold' };

export default function CertificatesPage() {
    return (
        <div className="animate-fade-in">
            <h2 className="font-heading text-3xl text-maroon mb-8">Digital Certificates</h2>

            <div className="bg-white border border-gold/20 p-6 md:p-8 shadow-sm mb-8">
                <h3 className="font-heading text-xl text-foreground mb-3">Every piece, certified</h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                    Each Sanwariya Gold creation carries BIS hallmarking for gold purity and a signed
                    atelier certificate detailing weight, stones, and craft technique. Digital copies
                    of your certificates are issued here after purchase, ready to download for
                    insurance and valuation.
                </p>
            </div>

            <div className="bg-white border border-gold/20 p-10 md:p-16 shadow-sm text-center flex flex-col items-center">
                <span className="font-hindi text-5xl text-gold/30 mb-6">ॐ</span>
                <h3 className="font-heading text-2xl text-foreground mb-3">No certificates yet</h3>
                <p className="font-body text-foreground/60 max-w-sm mb-8">
                    Your certificates will appear here once your first commission is delivered.
                </p>
                <MaroonButton href="/collections">Explore Collections</MaroonButton>
            </div>
        </div>
    );
}
