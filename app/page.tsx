import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed z-50 flex h-14 w-full items-center px-4 backdrop-blur lg:px-6">
        <nav className="flex flex-1 items-center justify-between">
          <div className="text-xl font-bold">SaaS Starter</div>
          <div className="hidden gap-4 md:flex">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Contact</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                <Button variant="ghost">Features</Button>
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Contact</Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex min-h-screen w-full items-center justify-center pt-14">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Launch Your SaaS Faster
              </h1>
              <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                Get your SaaS off the ground quickly with our starter template.
                Built with Next.js, Tailwind, and shadcn/ui.
              </p>
              <Button size="lg">Get Started</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Key Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Next.js App Router",
                "Tailwind CSS",
                "shadcn/ui Components",
              ].map((feature) => (
                <Card key={feature}>
                  <CardHeader>
                    <CardTitle>{feature}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Leverage the power of {feature} in your SaaS project.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple Pricing
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$9",
                  features: ["1 User", "1GB Storage", "Basic Support"],
                },
                {
                  name: "Pro",
                  price: "$19",
                  features: ["5 Users", "10GB Storage", "Priority Support"],
                },
                {
                  name: "Enterprise",
                  price: "$49",
                  features: [
                    "Unlimited Users",
                    "100GB Storage",
                    "24/7 Support",
                  ],
                },
              ].map((plan) => (
                <Card key={plan.name}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.price}/month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="mr-2 h-4 w-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Choose Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
              © 2024 SaaS Starter. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost">Terms</Button>
              <Button variant="ghost">Privacy</Button>
              <Button variant="ghost">Contact</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
