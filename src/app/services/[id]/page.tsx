"use client";

import { useParams } from "next/navigation";
import { MOCK_SERVICES } from "@/lib/data";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, CalendarDays, Clock3 } from "lucide-react";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const service = MOCK_SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-playfair mb-4">Service not found</h2>
          <Button asChild variant="luxuryOutline">
            <Link href="/services">Return to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back Link */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#D4AF37] hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <ChevronLeft size={16} /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <SlideIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
          </SlideIn>

          {/* Content Section */}
          <div className="flex flex-col">
            <FadeIn>
              <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-medium mb-4 block">
                {service.category} Service
              </span>
            </FadeIn>
            
            <SlideIn direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-playfair mb-6 text-black dark:text-white">
                {service.name}
              </h1>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-2xl font-medium text-[#D4AF37]">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm tracking-widest uppercase">
                  <Clock3 size={18} className="text-[#D4AF37]" /> 60-90 Mins
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed mb-10">
                {service.description}
              </p>
            </FadeIn>

            {/* Benefits */}
            <div className="mb-12">
              <FadeIn delay={0.5}>
                <h3 className="font-playfair text-xl mb-6 text-black dark:text-white">Key Benefits</h3>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <FadeIn key={index} delay={0.6 + index * 0.1}>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 size={20} className="text-[#D4AF37] shrink-0" />
                      <span className="text-sm tracking-wide">{benefit}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* CTA */}
            <FadeIn delay={0.8} className="mt-auto">
              <Button asChild variant="luxury" size="lg" className="w-full md:w-auto px-12 py-8 text-sm uppercase tracking-[0.2em]">
                <Link href={`/book?service=${service.id}`}>
                  <CalendarDays className="mr-3" /> Book This Experience
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* Before/After Section Placeholder */}
        <div className="mt-24 pt-24 border-t border-gray-100 dark:border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair mb-4 text-black dark:text-white">The Transformation</h2>
            <p className="text-gray-500 font-light">Witness the incredible results of our {service.name} service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 bg-gray-100 dark:bg-white/5 rounded-sm overflow-hidden group">
               <img src={service.imageUrl} className="w-full h-full object-cover grayscale" alt="Before" />
               <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 text-xs uppercase tracking-widest">Before</div>
            </div>
            <div className="relative h-96 bg-gray-100 dark:bg-white/5 rounded-sm overflow-hidden">
               <img src={service.imageUrl} className="w-full h-full object-cover" alt="After" />
               <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 text-xs uppercase tracking-widest">After</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
