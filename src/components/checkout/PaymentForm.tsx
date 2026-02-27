/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { calculateOrderTotal } from '@/lib/utils';
import { MaroonButton } from '@/components/ui/MaroonButton';

export function PaymentForm({ onBack }: { onBack: () => void }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const router = useRouter();
    const { items, clearCart } = useCartStore();

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const { total } = calculateOrderTotal(subtotal);

    const handlePayment = async () => {
        setIsProcessing(true);

        // Simulate Razorpay creation and verification since backend is mock for now
        setTimeout(() => {
            clearCart();
            router.push('/checkout/success?order=SG-2024-' + Math.floor(1000 + Math.random() * 9000));
        }, 2000);
    };

    return (
        <div className="animate-fade-in text-center max-w-lg mx-auto py-8 lg:py-12">
            <span className="block font-hindi text-6xl text-gold mb-6 opacity-30">₹</span>
            <h2 className="font-heading text-3xl text-maroon mb-4">Secure Reserve</h2>
            <p className="font-body text-foreground/70 mb-8 leading-relaxed">
                Your reserve requires a secure deposit of <span className="font-medium text-foreground">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(total)}</span>.
                Transactions are processed securely via our banking partners.
            </p>

            <div className="bg-[#F9F7F2] border border-gold/20 p-6 mb-8 text-left">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 border border-green-200">
                        ✓
                    </div>
                    <span className="font-label text-sm tracking-widest uppercase text-foreground">100% Encrypted</span>
                </div>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">
                    Sanwariya Gold never stores your card or net banking details. All transactions are securely routed. Upon successful payment, your piece will be offered for blessing.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <MaroonButton
                    onClick={handlePayment}
                    disabled={isProcessing}
                    fullWidth
                    className="relative py-4"
                >
                    {isProcessing ? 'Processing Securely...' : 'Complete Reservation (Mock)'}
                </MaroonButton>
                <button
                    onClick={onBack}
                    disabled={isProcessing}
                    className="font-label text-xs tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors mt-6"
                >
                    ← Back to Review
                </button>
            </div>
        </div>
    );
}
