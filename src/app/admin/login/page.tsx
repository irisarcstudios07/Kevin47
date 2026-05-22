"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Login
    setTimeout(() => {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin/dashboard");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <SlideIn direction="up">
             <h1 className="text-4xl font-playfair mb-3 text-black dark:text-white">Admin Access</h1>
             <p className="text-gray-500 font-light text-sm tracking-widest uppercase">Hair Style Saloon Portal</p>
          </SlideIn>
        </div>

        <FadeIn delay={0.2}>
          <form onSubmit={handleLogin} className="glass-effect p-8 rounded-sm shadow-xl bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/5 space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-4 pl-12 pr-12 focus:border-[#D4AF37] outline-none transition-all text-black dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              variant="luxury" 
              disabled={isSubmitting}
              className="w-full py-8 text-sm uppercase tracking-[0.2em]"
            >
              {isSubmitting ? "Verifying Credentials..." : "Sign In to Portal"}
            </Button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
