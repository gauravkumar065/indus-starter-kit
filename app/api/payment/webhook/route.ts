import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    try {
        const event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );

        if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;
            const userId = session.client_reference_id;

            // Update user's subscription status in your database
            //   await updateUserSubscription(userId, session.subscription as string);
        }

        return new Response("Webhook processed", { status: 200 });
    } catch (error) {
        return new Response("Webhook Error", { status: 400 });
    }
}