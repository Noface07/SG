/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { formatPrice, formatWeight, calculateOrderTotal } from '@/lib/utils';
import { MaroonButton } from '@/components/ui/MaroonButton';

export function OrderReview({ onNext, onBack, shippingData }: { onNext: () => void, onBack: () => void, shippingData: any }) {
    const { items } = useCartStore();

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const { total, makingCharges, gstAmount } = calculateOrderTotal(subtotal);

    return (
        <div className="animate-fade-in">
            <h2 className="font-heading text-2xl text-maroon mb-6">Review Your Reserve</h2>

            <div className="space-y-6 mb-8">
                {items.map((item) => (
                    <div key={item.cartItemId} className="flex flex-col md:flex-row gap-6 py-4 border-b border-gold/10">
                        <div className="relative w-20 h-24 bg-[#F9F7F2] border border-gold/10 flex-shrink-0">
                            {item.images && item.images[0] && (
                                <Image src={item.images[0].url} alt={item.name} fill className="object-cover" />
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-heading text-xl text-foreground mb-1">{item.name}</h3>
                            <p className="font-label text-xs tracking-widest uppercase text-foreground/50 mb-2">
                                {item.gold_purity ?? ''} {item.gold_purity && '|'} {item.gold_weight_grams != null ? formatWeight(item.gold_weight_grams) : ''}
                            </p>
                            <div className="font-body text-maroon font-medium">{formatPrice(item.price)}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-gold/10">
                <div>
                    <h3 className="font-label text-xs tracking-widest uppercase text-maroon mb-3">Delivery To</h3>
                    <div className="font-body text-sm text-foreground/80 leading-relaxed bg-[#F9F7F2] p-4 border border-gold/20">
                        <span className="font-medium text-foreground block mb-1">{shippingData?.fullName}</span>
                        {shippingData?.line1}, {shippingData?.line2} <br />
                        {shippingData?.city}, {shippingData?.state} {shippingData?.pincode} <br />
                        <span className="block mt-2">{shippingData?.phone}</span>
                        <span>{shippingData?.email}</span>
                    </div>
                </div>
                <div className="bg-[#F9F7F2] p-6 border border-gold/20">
                    <div className="space-y-3 font-body text-sm text-foreground/80 mb-4">
                        <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                        <div className="flex justify-between"><span>Making Charges (5%)</span><span>{formatPrice(makingCharges)}</span></div>
                        <div className="flex justify-between"><span>GST (3%)</span><span>{formatPrice(gstAmount)}</span></div>
                        <div className="flex justify-between text-green-700"><span>Insured Shipping</span><span>Complimentary</span></div>
                    </div>
                    <div className="flex justify-between items-center border-t border-gold/30 pt-4 mt-4">
                        <span className="font-label tracking-widest uppercase">Total</span>
                        <span className="font-heading text-2xl text-maroon">{formatPrice(total)}</span>
                    </div>
                </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <button onClick={onBack} className="font-label text-xs tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors order-2 md:order-1">
                    ← Back to Shipping
                </button>
                <MaroonButton onClick={onNext} className="order-1 md:order-2 w-full md:w-auto">Proceed to Secure Payment</MaroonButton>
            </div>
        </div>
    );
}
