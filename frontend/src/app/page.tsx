"use client";

import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import FeaturedServices from "@/components/ui/FeaturedServices";
import Testimonials from "@/components/ui/Testimonials";
import GalleryPreview from "@/components/ui/GalleryPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111111]">
      <HeroSection />
      <WhyChooseUs />
      <FeaturedServices />
      <Testimonials />
      <GalleryPreview />
    </div>
  );
}
