"use client";

import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#111111] transition-colors duration-300">
      {/* Page Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Salon Atmosphere"
        />
        <div className="relative z-20 text-center container px-4">
          <SlideIn direction="up">
            <h1 className="text-6xl md:text-8xl font-playfair text-white mb-6">Our Story</h1>
          </SlideIn>
          <FadeIn delay={0.3}>
            <p className="text-[#D4AF37] text-lg uppercase tracking-[0.3em]">The Professional Hair & Beauty Salon</p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2670&auto=format&fit=crop"
                className="w-full rounded-sm shadow-2xl relative z-10"
                alt="Stylist working"
              />
            </div>
          </SlideIn>
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-playfair text-black dark:text-white">A Legacy of Luxury</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed">
                Keviv 47 Family Salon was founded on a simple yet profound principle: 
                every individual deserves an appointment that transcends conventional 
                beauty services. We specialize in expert hairstyling, skincare, makeup, grooming, and bridal styling.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed">
                Our space in Vijayawada is a sanctuary where modern design meets timeless 
                craftsmanship. From the moment you step through our doors, you 
                are part of a narrative of excellence, hygiene, precision, and unparalleled 
                luxury.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <Button asChild variant="luxury" className="mt-4">
                <Link href="/book">Reserve Your Session</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#FAFAFA] dark:bg-black/20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-playfair mb-16 text-black dark:text-white">Our Core Values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision", desc: "Meticulous attention to every strand and shadow." },
              { title: "Innovation", desc: "Leading the industry with modern techniques." },
              { title: "Indulgence", desc: "A premium experience that nourishes the soul." },
            ].map((value, i) => (
              <FadeIn key={i} delay={0.2 * i}>
                <div className="p-8 group hover:bg-white dark:hover:bg-[#1A1A1A] transition-all duration-500 rounded-sm">
                  <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6 group-hover:w-24 transition-all duration-500" />
                  <h3 className="text-2xl font-playfair mb-4 text-black dark:text-white">{value.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
