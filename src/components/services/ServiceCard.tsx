"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ServiceType {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "Hair" | "Skin" | "Bridal" | "Other";
  imageUrl: string;
}

export function ServiceCard({
  service,
  index,
}: {
  service: ServiceType;
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group cursor-pointer bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 text-sm font-medium">
            {service.price}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-[#1A1A1A]">
          <h3 className="text-2xl font-playfair mb-3 text-black dark:text-white group-hover:text-[#D4AF37] transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-6 line-clamp-2 flex-grow">
            {service.description}
          </p>
          <div className="mt-auto">
            <Button
              asChild
              variant="luxuryOutline"
              className="w-full text-sm uppercase tracking-widest"
            >
              <Link href={`/services/${service.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
