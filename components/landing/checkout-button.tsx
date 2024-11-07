"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export function SubscribeButton({ plan }: any) {
  const { isLoaded, userId } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleAction = () => {
    setTimeout(() => {
      router.push("/sign-up");
    }, 500);
  };

  const handleSubscribe = async () => {
    try {
      if (!isLoaded || !userId) {
        toast({
          title: "Not logged in",
          description: "Please login or signup to continue",
          className: "bg-pink-700",

          action: (
            <ToastAction
              className="bg-black"
              altText="Sign Up"
              onClick={handleAction}
            >
              Sign Up
            </ToastAction>
          ),
        });
        return;
      }
      const response = await fetch("/api/payment/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: plan.priceId,
        }),
      });

      if (!response.ok) {
        // Handle error response from the server
        const error = await response.json();
        console.error("Error creating checkout session:", error.error);
        // You can optionally show an error message to the user here
        return;
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.error("Error:", error);
      // You can optionally show a generic error message to the user here
    }
  };

  return (
    <Button
      className="w-full bg-pink-600"
      variant={plan.featured ? "default" : "outline"}
      size="lg"
      onClick={handleSubscribe}
    >
      Get Started
    </Button>
  );
}
