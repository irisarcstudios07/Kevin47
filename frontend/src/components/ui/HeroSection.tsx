"use client";

import { motion } from "framer-motion";
import { SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <picture>
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2674&auto=format&fit=crop"
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <SlideIn direction="up" delay={0.2}>
          <p className="text-[#D4AF37] tracking-[0.3em] text-sm md:text-base font-semibold uppercase mb-6 drop-shadow-md">
            Welcome to Keviv 47 Family Salon
          </p>
        </SlideIn>

        <SlideIn direction="up" delay={0.4}>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-playfair text-white mb-8 max-w-5xl mx-auto leading-tight drop-shadow-xl">
            Keviv 47 <br /> Family Salon
          </h1>
        </SlideIn>

        <SlideIn direction="up" delay={0.6}>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-12 drop-shadow-md">
            Professional Hair & Beauty Salon in Vijayawada. Discover the ultimate luxury in hair styling, bridal makeup, and grooming tailored specifically for you.
          </p>
        </SlideIn>

        <SlideIn direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild variant="luxury" size="lg" className="w-full sm:w-auto text-sm tracking-widest uppercase">
              <Link href="/book">Book Appointment</Link>
            </Button>
            <Button asChild variant="luxuryOutline" size="lg" className="w-full sm:w-auto text-sm tracking-widest uppercase border-green-500 text-green-500 hover:text-white hover:bg-green-600 hover:border-green-600">
              <Link href="https://wa.me/919948366135?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank">WhatsApp Now</Link>
            </Button>
          </div>
        </SlideIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
}
