import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount, receipt } = body;

        // TODO: Initialize Razorpay instance
        // const razorpay = new Razorpay({
        //   key_id: process.env.RAZORPAY_KEY_ID,
        //   key_secret: process.env.RAZORPAY_KEY_SECRET,
        // });

        // const options = {
        //   amount: amount * 100, // Razorpay works in paise
        //   currency,
        //   receipt,
        // };

        // const order = await razorpay.orders.create(options);

        // Mock response for now
        const mockOrder = {
            id: "order_" + Math.random().toString(36).substr(2, 9),
            amount: amount * 100,
            currency: "INR",
            receipt: receipt
        };

        return NextResponse.json(mockOrder);
    } catch {
        return NextResponse.json(
            { error: 'Error creating Razorpay order' },
            { status: 500 }
        );
    }
}
