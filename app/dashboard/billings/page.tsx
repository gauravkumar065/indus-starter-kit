"use client";

import { useState, useEffect } from "react";
import { CalendarIcon, CreditCardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getSubscription } from "@/actions/getSubscription";

export default function BillingPage() {
  const [subscriptionData, setSubscriptionData]: any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const data = await getSubscription();
        setSubscriptionData(data);
      } catch (error) {
        console.error("Failed to fetch subscription data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, []);

  if (loading) {
    return <SkeletonLoading />;
  }

  if (!subscriptionData) {
    return <div>No subscription data available.</div>;
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Billing & Subscription</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Current Plan</CardTitle>
          <CardDescription>Your subscription details</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Plan</span>
            <span className="text-muted-foreground">
              {subscriptionData.subscriptionPlan}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Start date</span>
            <span className="text-muted-foreground">
              {subscriptionData.subscriptionStartDate.toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Status</span>
            <span className="font-medium text-green-600">
              {subscriptionData.subscriptionStatus}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Next payment</span>
            <span className="text-muted-foreground">
              {subscriptionData.subscriptionEndDate.toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Manage Subscription</Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Billing History</h2>
        <Button variant="outline" className="w-full sm:w-auto">
          <CalendarIcon className="mr-2 h-4 w-4" />
          View Billing History
        </Button>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Payment Method</h2>
        <Button variant="outline" className="w-full sm:w-auto">
          <CreditCardIcon className="mr-2 h-4 w-4" />
          Update Payment Method
        </Button>
      </div>

      <div className="text-muted-foreground mt-8 text-sm">
        <p>
          Need help with your subscription? Please contact our{" "}
          <a href="#" className="text-primary hover:underline">
            support team
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function SkeletonLoading() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-10">
      <Skeleton className="mb-6 h-10 w-3/4" />

      <Card className="mb-8">
        <CardHeader>
          <Skeleton className="mb-2 h-8 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>

      <div className="mb-8 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-10 w-48" />
      </div>

      <div className="mb-8 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-10 w-48" />
      </div>

      <Skeleton className="h-16 w-full" />
    </div>
  );
}
