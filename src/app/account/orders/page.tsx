import { MaroonButton } from '@/components/ui/MaroonButton';

export const metadata = { title: 'My Commissions | Sanwariya Gold' };

export default function OrdersPage() {
    return (
        <div className="animate-fade-in">
            <h2 className="font-heading text-3xl text-maroon mb-8">My Commissions</h2>
            <div className="bg-white border border-gold/20 p-10 md:p-16 shadow-sm text-center flex flex-col items-center">
                <span className="font-hindi text-5xl text-gold/30 mb-6">ॐ</span>
                <h3 className="font-heading text-2xl text-foreground mb-3">No commissions yet</h3>
                <p className="font-body text-foreground/60 max-w-sm mb-8">
                    Once you place your first order, its journey from atelier to blessing will appear here.
                </p>
                <MaroonButton href="/collections">Explore Collections</MaroonButton>
            </div>
        </div>
    );
}
