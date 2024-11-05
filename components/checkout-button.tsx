"use client";
import { useAuth } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export function SubscribeButton({ plan }: any) {
  //   console.log("Logger -> SubscribeButton -> plan:", plan);
  const { userId, isLoaded } = useAuth();

  const handleSubscribe = async () => {
    console.log("clicked", userId, isLoaded);
    if (!userId || !isLoaded) return;

    try {
      const response = await fetch("/api/payment/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: plan.priceId,
          success_url: `${process.env.FRONTEND_URL}/success`,
          cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      await stripe?.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Button
      className="w-full"
      variant={plan.featured ? "default" : "outline"}
      size="lg"
      onClick={handleSubscribe}
    >
      Get Started
    </Button>
  );
}
