import { NextRequest, NextResponse } from "next/server";
import { currentUser } from '@clerk/nextjs/server'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
    const user = await currentUser();
    if (!user) return NextResponse.json({ error: "User Not Authorized" });
    const body = await req.json();
    const { price } = body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{ price: price, quantity: 1 }],
            metadata: { user: user.id },
            mode: "subscription",
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            allow_promotion_codes: true,
            customer_email: user.emailAddresses[0].emailAddress
        });


        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json({ error: "Failed to create checkout session" });
    }
}
