import React from "react";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Scissors, ShieldCheck, Sparkles, HandCoins, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Scissors size={24} />,
    title: "Professional Stylists",
    description: "Highly trained experts bringing the latest trends to your hair.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Hygienic Environment",
    description: "Strict sanitation protocols for a safe and clean salon experience.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Premium Products",
    description: "We use only top-tier luxury products for long-lasting results.",
  },
  {
    icon: <HandCoins size={24} />,
    title: "Affordable Packages",
    description: "Luxury service quality without the exorbitant price tag.",
  },
  {
    icon: <Users size={24} />,
    title: "Family Friendly Salon",
    description: "A welcoming atmosphere with specialized services for all ages.",
  },
  {
    icon: <Zap size={24} />,
    title: "Modern Equipment",
    description: "State-of-the-art tools ensuring precision and comfort.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <SlideIn direction="up">
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-semibold">The Keviv 47 Difference</span>
            <h2 className="text-4xl md:text-5xl font-playfair mt-4 mb-6 text-black dark:text-white">Why Choose Us</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto opacity-50"></div>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="p-8 h-full bg-white dark:bg-black/40 border border-gray-100 dark:border-white/5 rounded-sm hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#FAFAFA] dark:bg-white/5 rounded-full flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair mb-3 text-black dark:text-white">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
