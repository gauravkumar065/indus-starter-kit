import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Badge,
  Check,
  Layout,
  Menu,
  Paintbrush,
  Puzzle,
  Rocket,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  const features = [
    {
      title: "Next.js App Router",
      description:
        "Build intuitive and fast web applications with the latest Next.js routing system.",
      icon: <Layout className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Tailwind CSS",
      description:
        "Create stunning designs quickly with utility-first CSS framework.",
      icon: <Paintbrush className="h-6 w-6" />,
      color: "bg-teal-500",
    },
    {
      title: "shadcn/ui Components",
      description:
        "Implement beautiful, accessible UI components to enhance user experience.",
      icon: <Puzzle className="h-6 w-6" />,
      color: "bg-purple-500",
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
        <section className="flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Launch Your SaaS Faster
              </h1>
              <p className="text-muted-foreground mt-6 text-lg md:text-xl">
                Get your SaaS off the ground quickly with our starter template.
                Built with Next.js, Tailwind, and shadcn/ui.
              </p>
              <div className="mt-8">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-md bg-pink-600 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Features
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-3xl">
                Leverage these powerful tools and technologies to build your
                next SaaS project quickly and efficiently.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="flex flex-col overflow-hidden transition-all hover:shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`${feature.color} text-white`}
                        variant="secondary"
                      >
                        {feature.icon}
                      </Badge>
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  <CardContent className="pt-0">
                    <a
                      href="#"
                      className="text-primary inline-flex items-center text-sm font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="from-background to-secondary/20 w-full bg-gradient-to-b py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Choose the perfect plan for your needs. No hidden fees.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col ${
                    plan.featured ? "border-primary scale-105 shadow-lg" : ""
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4 flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="text-primary mr-2 h-4 w-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button
                      className="w-full"
                      variant={plan.featured ? "default" : "outline"}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
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
