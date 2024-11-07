import { NextResponse } from "next/server";
import { currentUser } from '@clerk/nextjs/server'
import Stripe from "stripe";
import { z } from "zod";

// Initialize Stripe outside the handler for better performance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Input validation schema
const bodySchema = z.object({
    price: z.string(),
});

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "User Not Authorized" }, { status: 401 });
        }

        // Validate request body
        const body = await req.json();
        const result = bodySchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const { price } = result.data;

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{ price, quantity: 1 }],
            metadata: { user: user.id },
            mode: "subscription",
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            allow_promotion_codes: true,
            customer_email: user.emailAddresses[0]?.emailAddress,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}