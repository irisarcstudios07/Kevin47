"use client";

import { useState } from "react";
import { MOCK_SERVICES } from "@/lib/data";
import { ServiceCard, ServiceType } from "@/components/services/ServiceCard";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

const CATEGORIES = ["All", "Hair", "Skin", "Bridal", "Other"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = activeCategory === "All"
    ? MOCK_SERVICES
    : MOCK_SERVICES.filter(service => service.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] dark:bg-[#111111] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-medium mb-4 block">
              Luxury Experience
            </span>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-playfair mb-8 text-black dark:text-white">
              Our Services
            </h1>
          </SlideIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 dark:text-gray-400 font-light text-lg">
              Indulge in our curated selection of premium beauty treatments. From 
              precision hair design to revitalizing skin care, every service is 
              performed with the highest level of professionalism and care.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((category, index) => (
            <FadeIn key={category} delay={0.1 * index}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-[#D4AF37] border-[#D4AF37] text-white"
                    : "bg-transparent border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {category}
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service as any} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
