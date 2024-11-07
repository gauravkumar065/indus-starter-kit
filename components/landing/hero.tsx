"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Ripple from "@/components/ui/ripple";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(70vh-3.5rem)] w-full items-center justify-center bg-gray-900">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tighter text-pink-500 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Launch Your SaaS Faster
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-6 text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get your SaaS off the ground quickly with our starter template.
            Built with Next.js, Tailwind, and shadcn/ui.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 font-medium text-black transition-colors dark:bg-white dark:text-black"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
      <Ripple />
    </section>
  );
};

export default HeroSection;
