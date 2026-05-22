"use client";

import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ravi Teja",
    role: "Regular Client",
    content: "The best family salon in Vijayawada! They did an amazing job with my haircut and beard grooming. The hygiene is top-notch.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Bridal Client",
    content: "Keviv 47 made me look absolutely stunning on my wedding day. The makeup was flawless and the team was incredibly professional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Skin Care Client",
    content: "I've been visiting for my facials and skin treatments. The luxury products they use are excellent. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#111111] text-white overflow-hidden relative">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-medium mb-4 block">
              Client Experiences
            </span>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6">
              What Our Clients Say
            </h2>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={0.2 * (index + 1)}>
              <div className="glass-effect p-8 rounded-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div>
                  <h4 className="font-playfair text-xl tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#D4AF37] text-sm tracking-widest uppercase mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
