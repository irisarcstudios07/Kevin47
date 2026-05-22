"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredServices = [
  {
    id: 1,
    title: "Hair Cutting & Styling",
    description: "Personalized styling by our master stylists tailored to your unique features.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2674&auto=format&fit=crop",
    link: "/services/1",
  },
  {
    id: 4,
    title: "Bridal Makeup",
    description: "Elegant and flawless bridal makeup to make your special day truly memorable.",
    image: "https://th.bing.com/th/id/OIP.61rIbEzGgs5Xi-H3G42ciwHaLH?w=118&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    link: "/services/4",
  },
  {
    id: 5,
    title: "Facial & Skin Care",
    description: "Rejuvenating facials and skin treatments tailored to your unique skin type.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop",
    link: "/services/5",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-medium mb-4 block">
              Our Expertise
            </span>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-black dark:text-white">
              Signature Services
            </h2>
          </SlideIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 dark:text-gray-400 font-light text-lg">
              Experience unparalleled luxury with our bespoke hair and beauty treatments, 
              designed to elevate your natural beauty to its highest potential.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <FadeIn key={service.id} delay={0.2 * (index + 1)}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group cursor-pointer bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                
                <div className="p-8 text-center bg-white dark:bg-[#1A1A1A]">
                  <h3 className="text-2xl font-playfair mb-4 text-black dark:text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-black dark:text-white hover:text-[#D4AF37] transition-colors"
                  >
                    Discover More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <FadeIn delay={0.8}>
            <Button asChild variant="luxuryOutline" className="px-10 py-6 text-sm">
              <Link href="/services">View All Services</Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
