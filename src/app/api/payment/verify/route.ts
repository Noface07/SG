import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

        const secret = process.env.RAZORPAY_KEY_SECRET || 'MOCK_SECRET';

        const bodyString = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", secret)
            .update(bodyString.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Payment verified. Update Database here to mark order as 'paid'

            // TODO: Trigger WhatsApp confirmation
            // TODO: Trigger Confirmation Email

            return NextResponse.json({ success: true, message: "Payment verified successfully" });
        } else {
            return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
        }
    } catch {
        return NextResponse.json({ error: "Verification failed" }, { status: 500 });
    }
}
