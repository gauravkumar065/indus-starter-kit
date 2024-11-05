import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


async function getCustomerEmail(customerId: string): Promise<string | null> {
    try {
        const customer = await stripe.customers.retrieve(customerId);
        return (customer as Stripe.Customer).email;
    } catch (error) {
        console.error("Error fetching customer:", error);
        return null;
    }
}

export async function handleSubscriptionEvent(
    event: Stripe.Event,
    type: "created" | "updated" | "deleted"
) {
    const subscription = event.data.object as Stripe.Subscription;
    const customerEmail = await getCustomerEmail(subscription.customer as string);
    console.log("Logger -> customerEmail:", subscription.customer.toString())

    if (!customerEmail) {
        return NextResponse.json({
            status: 500,
            error: "Customer email could not be fetched",
        });
    }


    try {
        await prisma.user.update({
            where: { email: customerEmail },
            data: {
                subscription: subscription.id,
                subscriptionPlan: 'PREMIUM',
                subscriptionStatus: type === 'deleted' ? 'CANCELED' : 'ACTIVE',
                subscriptionStartDate: new Date(subscription.current_period_start * 1000),
                subscriptionEndDate: new Date(subscription.current_period_end * 1000),
                cancelAtPeriodEnd: subscription.cancel_at_period_end,
                lastBillingDate: new Date(subscription.current_period_start * 1000),
                stripeCustomerId: subscription.customer.toString()
            },
        });


        return NextResponse.json({
            status: 200,
            message: `Subscription ${type} success`,
        });
    } catch (error) {
        console.log(`Error during subscription ${type}:`, error);
        return NextResponse.json({
            status: 500,
            error: `Error during subscription ${type}`,
        });
    }
}

export async function handleCheckoutSessionCompleted(event: Stripe.Event) {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata: any = session?.metadata;

    try {
        const user = await prisma.user.findUnique({
            where: { userId: metadata?.userId },
        });
        if (!user) throw new Error("User not found");

        // Update user's subscription status
        const updatedUser = await prisma.user.update({
            where: { userId: metadata?.userId },
            data: {
                subscriptionPlan: 'PREMIUM',
                subscriptionStatus: 'ACTIVE',
                subscription: session.subscription as string,
                subscriptionStartDate: new Date(),
                subscriptionEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
                lastBillingDate: new Date(),
            },
        });

        return NextResponse.json({
            status: 200,
            message: "User subscription updated successfully",
            updatedUser,
        });
    } catch (error) {
        console.error("Error handling checkout session:", error);
        return NextResponse.json({
            status: 500,
            error,
        });
    }
}