"use server"
import prisma from "@/lib/prisma";
import { currentUser } from '@clerk/nextjs/server'

export const getSubscription = async () => {
    try {
        const user = await currentUser();
        if (!user) {
            return null;
        }

        const subscriptionData = await prisma.user.findUnique({
            where: {
                userId: user.id
            },
            select: {
                stripeCustomerId: true,
                subscriptionPlan: true,
                subscriptionStatus: true,
                subscriptionStartDate: true,
                subscriptionEndDate: true,
                cancelAtPeriodEnd: true,
                lastBillingDate: true,
                subscription: true
            }
        });

        return subscriptionData;
    } catch (error: any) {
        console.error("Error creating user:", error);
        throw new Error(error.message);
    }
};