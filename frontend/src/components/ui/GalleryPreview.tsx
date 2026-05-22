"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const galleryImages = [
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2674&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2536&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2670&auto=format&fit=crop",
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <FadeIn>
              <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-medium mb-4 block">
                Portfolio
              </span>
            </FadeIn>
            <SlideIn direction="left" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-playfair text-black dark:text-white">
                Salon Gallery
              </h2>
            </SlideIn>
          </div>
          <SlideIn direction="right" delay={0.4}>
            <Button asChild variant="luxuryOutline" className="hidden md:flex">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </SlideIn>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((src, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-playfair tracking-widest text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Image
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asChild variant="luxuryOutline" className="w-full">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
