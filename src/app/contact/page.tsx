"use client";

import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-medium mb-4 block">
              Connect With Us
            </span>
          </FadeIn>
          <SlideIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-playfair mb-8 text-black dark:text-white">
              Get In Touch
            </h1>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Cards */}
          <FadeIn delay={0.1}>
            <div className="glass-effect p-10 text-center rounded-sm bg-[#FAFAFA] dark:bg-[#1A1A1A] h-full border border-gray-100 dark:border-white/5">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="text-2xl font-playfair mb-4 text-black dark:text-white">Visit Us</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light text-sm">
                Ground Floor, NSM School, <br />
                D.No 68-2-2 Road, Patamata, <br />
                Vijayawada, AP 520010
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass-effect p-10 text-center rounded-sm bg-[#FAFAFA] dark:bg-[#1A1A1A] h-full border border-gray-100 dark:border-white/5">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="text-2xl font-playfair mb-4 text-black dark:text-white">Call Us</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light mb-4">
                +91 9948366135 <br />
                Open Every Day
              </p>
              <Button asChild variant="luxuryOutline" className="text-xs">
                <a href="https://wa.me/919948366135" target="_blank" className="flex items-center gap-2">
                  <MessageCircle size={16} /> WhatsApp Now
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass-effect p-10 text-center rounded-sm bg-[#FAFAFA] dark:bg-[#1A1A1A] h-full border border-gray-100 dark:border-white/5">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="text-2xl font-playfair mb-4 text-black dark:text-white">Email Us</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light">
                hello@keviv47.com <br />
                bookings@keviv47.com
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Map and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SlideIn direction="left" className="h-[500px] bg-gray-100 dark:bg-white/5 rounded-sm overflow-hidden border border-gray-200 dark:border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.9655513294334!2d80.65759027509893!3d16.494876184248557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fbe39c7c74f5%3A0x1b4fff70b9a3e650!2skeviv%2047%20%7C%20Family%20salon%20%7C%20The%20professional%20hair%20and%20beauty%20salon!5e0!3m2!1sen!2sin!4v1716355811234!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </SlideIn>

          <SlideIn direction="right" className="glass-effect p-10 rounded-sm bg-[#FAFAFA] dark:bg-black/20 border border-gray-100 dark:border-white/5 flex flex-col justify-center">
            <h3 className="text-3xl font-playfair mb-8 text-black dark:text-white">Send a Message</h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-sm py-4 px-4 outline-none focus:border-[#D4AF37] transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-sm py-4 px-4 outline-none focus:border-[#D4AF37] transition-all"
              />
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full bg-white dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-sm py-4 px-4 outline-none focus:border-[#D4AF37] transition-all resize-none"
              ></textarea>
              <Button variant="luxury" className="w-full py-8 text-sm uppercase tracking-[0.2em]">Send Message</Button>
            </form>
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
