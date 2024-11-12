import { Button } from "@/components/ui/button";
import { Menu, Rocket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import FeatureSection from "@/components/pages/landing/feature";
import PricingSection from "@/components/pages/landing/pricing";
import HeroSection from "@/components/pages/landing/hero";
import Footer from "@/components/pages/landing/footer";

export default function LandingPage() {
  const navItems = [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact", href: "/contact" },
  ];
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals just getting started",
      priceId: "price_1Q1LkBB5cDC4kiMov1u9Yv5x",
      featured: false,
      features: [
        "1 User",
        "1GB Storage",
        "Basic Support",
        "Email Support",
        "Basic Analytics",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      description: "Best for growing teams and businesses",
      priceId: "price_1Q1LkBB5cDC4kiMov1u9Yv5x",
      featured: true,
      features: [
        "5 Users",
        "10GB Storage",
        "Priority Support",
        "24/7 Phone Support",
        "Advanced Analytics",
        "Custom Branding",
      ],
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "For large-scale organizations",
      priceId: "price_1Q1LkBB5cDC4kiMov1u9Yv5x",
      featured: false,
      features: [
        "Unlimited Users",
        "100GB Storage",
        "24/7 Support",
        "Dedicated Account Manager",
        "Custom Integration",
        "Advanced Security",
        "API Access",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="ml-6 flex items-center space-x-2">
            <Rocket className="h-8 w-8 animate-pulse text-white" />
            <span className="bg-gradient-to-r from-pink-200 to-pink-600 bg-clip-text text-2xl font-extrabold text-transparent transition-all duration-300 hover:from-pink-200 hover:to-white">
              SaaS Starter
            </span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "px-4 py-2 text-sm font-medium",
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-2">
              <ModeToggle />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigate through our site</SheetDescription>
                </SheetHeader>
                <nav className="mt-6 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="hover:text-primary text-sm font-medium transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection />

        {/* Pricing Section */}
        <PricingSection plans={plans} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
