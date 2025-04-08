"use client";
import React from "react";
import { animate, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(80vh-3.5rem)] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="font-display text-4xl font-bold tracking-tighter text-pink-600 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative whitespace-nowrap">
              Launch Your{" "}
              <span className="relative">
                SaaS
                <Sparkles className="absolute -right-2 -top-2 h-8 w-8 rotate-[-12deg] text-pink-500" />
              </span>
            </span>{" "}
            Faster
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-6 text-lg text-gray-400 md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get your SaaS off the ground quickly with our production-ready
            starter template. Built using the{" "}
            <span className="font-semibold text-pink-500">
              Next.js App Router
            </span>
            , <span className="font-semibold text-pink-500">Tailwind CSS</span>,
            and <span className="font-semibold text-pink-500">shadcn/ui</span>.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md bg-pink-500 px-8 py-4 font-medium text-gray-900 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-2 focus:ring-pink-500/30"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-lg" />
    </section>
  );
};

export default HeroSection;
