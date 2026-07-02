import { GoldButton } from '@/components/ui/GoldButton';

export const metadata = { title: 'Cart | Sanwariya Gold' };

export default function EmptyCartPage() {
    return (
        <div className="min-h-screen bg-[#F9F7F2] pt-40 pb-24 flex flex-col items-center text-center px-6">
            <span className="font-hindi text-6xl text-gold/30 mb-6">ॐ</span>
            <h1 className="font-heading text-4xl md:text-5xl text-maroon mb-4">Your Treasury Awaits</h1>
            <p className="font-body text-lg text-foreground/60 max-w-md mb-10">
                No pieces rest here yet. Explore the collections and find the heirloom destined for you.
            </p>
            <GoldButton href="/collections">Explore Collections</GoldButton>
        </div>
    );
}
