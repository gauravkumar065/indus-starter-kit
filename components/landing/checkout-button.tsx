"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export function SubscribeButton({ plan }: { plan: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, userId } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleAction = () => {
    setTimeout(() => {
      router.push("/sign-in");
    }, 500);
  };

  const handleSubscribe = async () => {
    if (!isLoaded || !userId) {
      toast({
        title: "Not logged in",
        description: "Please login or signup to continue",
        className: "bg-pink-700",
        action: (
          <ToastAction
            className="bg-black"
            altText="Sign In"
            onClick={handleAction}
          >
            Sign In
          </ToastAction>
        ),
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/payment/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: plan.priceId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Error creating checkout session:", error.error);
        toast({
          title: "Error",
          description: "Failed to create checkout session. Please try again.",
          variant: "destructive",
        });
        return;
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="w-full bg-pink-600"
      variant={plan.featured ? "default" : "outline"}
      size="lg"
      onClick={handleSubscribe}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        "Get Started"
      )}
    </Button>
  );
}
