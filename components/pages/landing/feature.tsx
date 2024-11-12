import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import {
  Zap,
  Package,
  Database,
  Cloud,
  Server,
  User,
  CreditCard,
} from "lucide-react";

const features = [
  {
    title: "Zod",
    description:
      "Robust, flexible, and easy-to-use data validation and schema definition library",
    color: "bg-blue-500",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "shadcn/ui",
    description:
      "A collection of accessible, customizable, and production-ready components",
    color: "bg-green-500",
    icon: <Package className="h-6 w-6" />,
  },
  {
    title: "Prisma",
    description:
      "Next-generation ORM for TypeScript and Node.js (SQL, MongoDB and more)",
    color: "bg-purple-500",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Supabase",
    description:
      "The open-source Firebase alternative for building full-stack applications",
    color: "bg-orange-500",
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    title: "PostgreSQL",
    description:
      "Powerful, open-source, and extensible relational database management system",
    color: "bg-gray-500",
    icon: <Server className="h-6 w-6" />,
  },
  {
    title: "Clerk Auth",
    description:
      "Powerful, secure, and developer-friendly authentication and user management",
    color: "bg-pink-500",
    icon: <User className="h-6 w-6" />,
  },
  {
    title: "Stripe",
    description:
      "The most powerful and flexible payment processing platform for internet businesses",
    color: "bg-yellow-500",
    icon: <CreditCard className="h-6 w-6" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl">
            Leverage these powerful tools and technologies to build your next
            SaaS project quickly and efficiently.
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
  );
};

export default FeatureSection;
