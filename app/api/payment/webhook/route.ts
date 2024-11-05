import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { handleSubscriptionEvent, handleCheckoutSessionCompleted } from '@/utils/user/subscription';



const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('Stripe-Signature') as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (err: any) {
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
    }

    switch (event.type) {
        // case 'checkout.session.completed':
        //     await handleCheckoutSessionCompleted(event);
        //     break;
        case 'customer.subscription.created':
            await handleSubscriptionEvent(event, 'created');
            break;
        // case 'customer.subscription.updated':
        //     await handleSubscriptionEvent(event, 'updated');
        //     break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }


    return NextResponse.json({ received: true }, { status: 200 })
}