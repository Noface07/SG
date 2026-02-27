/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MaroonButton } from '@/components/ui/MaroonButton';

const schema = z.object({
    fullName: z.string().min(2, 'Name is required'),
    phone: z.string().min(10, 'Valid phone number required'),
    email: z.string().email('Valid email required'),
    line1: z.string().min(5, 'Address is required'),
    line2: z.string().optional(),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    pincode: z.string().min(6, 'Valid pincode required'),
});

export function ShippingForm({ onNext, initialData }: { onNext: (data: any) => void, initialData?: any }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: initialData || {}
    });

    const onSubmit = (data: any) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
            <h2 className="font-heading text-2xl text-maroon mb-6">Safe Passage Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Full Name</label>
                    <input {...register('fullName')} className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                    {errors.fullName && <span className="text-red-500 text-xs mt-1 block">{errors.fullName.message?.toString()}</span>}
                </div>
                <div>
                    <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Phone Number</label>
                    <input {...register('phone')} className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message?.toString()}</span>}
                </div>
                <div className="md:col-span-2">
                    <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Email Address</label>
                    <input {...register('email')} type="email" className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message?.toString()}</span>}
                </div>
            </div>

            <div className="pt-4 border-t border-gold/10">
                <h3 className="font-label text-sm tracking-widest uppercase text-maroon mb-4">Delivery Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Address Line 1</label>
                        <input {...register('line1')} className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                        {errors.line1 && <span className="text-red-500 text-xs mt-1 block">{errors.line1.message?.toString()}</span>}
                    </div>
                    <div className="md:col-span-2">
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Address Line 2 (Optional)</label>
                        <input {...register('line2')} className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                    </div>
                    <div>
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">City</label>
                        <input {...register('city')} className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                        {errors.city && <span className="text-red-500 text-xs mt-1 block">{errors.city.message?.toString()}</span>}
                    </div>
                    <div>
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">State</label>
                        <input {...register('state')} className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                        {errors.state && <span className="text-red-500 text-xs mt-1 block">{errors.state.message?.toString()}</span>}
                    </div>
                    <div>
                        <label className="block font-label text-xs tracking-widest uppercase text-foreground/70 mb-2">Pincode</label>
                        <input {...register('pincode')} className="w-full border border-gold/30 bg-[#F9F7F2] p-3 font-body focus:outline-none focus:border-gold" />
                        {errors.pincode && <span className="text-red-500 text-xs mt-1 block">{errors.pincode.message?.toString()}</span>}
                    </div>
                </div>
            </div>

            <div className="pt-6 flex justify-end">
                <MaroonButton type="submit">Continue to Review</MaroonButton>
            </div>
        </form>
    );
}
