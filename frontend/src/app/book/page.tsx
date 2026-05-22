"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { MOCK_SERVICES } from "@/lib/data";
import { Calendar, Clock, User, Phone, Mail, Sparkles } from "lucide-react";

function BookingForm() {
  const searchParams = useSearchParams();
  const selectedServiceId = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId: selectedServiceId || "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const serviceName = MOCK_SERVICES.find(s => s.id === formData.serviceId)?.name || "a service";
      const message = `Hello Keviv 47,\nI would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${serviceName}\nDate: ${formData.date}\nTime: ${formData.time}`;
      const url = `https://wa.me/919948366135?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-20">
        <FadeIn>
          <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
            <Sparkles className="text-white" size={40} />
          </div>
          <h2 className="text-4xl font-playfair mb-4 text-black dark:text-white">Appointment Requested</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto">
            Thank you for choosing Keviv 47 Family Salon. You will now be redirected to WhatsApp to confirm your booking.
          </p>
          <Button asChild variant="luxuryOutline">
            <a href="/">Return to Home</a>
          </Button>
        </FadeIn>
      </div>
    );
  }

  return (
    <SlideIn direction="up">
      <form onSubmit={handleSubmit} className="glass-effect p-8 md:p-12 rounded-sm shadow-xl bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Jane Doe"
                className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white"
              />
            </div>
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Select Service</label>
            <div className="relative">
              <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select
                required
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white appearance-none"
              >
                <option value="">Select a service</option>
                {MOCK_SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>{s.name} - {s.price}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Preferred Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white"
              />
            </div>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Preferred Time</label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white"
              />
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          variant="luxury" 
          disabled={isSubmitting}
          className="w-full py-8 text-sm uppercase tracking-[0.3em]"
        >
          {isSubmitting ? "Processing Request..." : "Confirm Appointment"}
        </Button>
      </form>
    </SlideIn>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[#D4AF37] tracking-[0.2em] text-sm uppercase font-medium mb-4 block">
                Reservations
              </span>
            </FadeIn>
            <SlideIn direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-playfair mb-6 text-black dark:text-white">
                Book Your Experience
              </h1>
            </SlideIn>
            <FadeIn delay={0.3}>
              <p className="text-gray-500 dark:text-gray-400 font-light text-lg">
                Secure your moment of luxury. Fill out the form below and our concierge 
                will reach out to confirm your bespoke session.
              </p>
            </FadeIn>
          </div>

          <Suspense fallback={<div className="text-center py-20">Loading luxury...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
