import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 border-r border-white/10 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-playfair text-2xl font-bold tracking-wider">
                KEVIV <span className="text-[#D4AF37]">47</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The Professional Hair & Beauty Salon. Experience the pinnacle of luxury hair, bridal makeup, and grooming services in Vijayawada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg tracking-wider mb-6 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">About Us</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Gallery</Link></li>
              <li><Link href="/book" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg tracking-wider mb-6 text-[#D4AF37]">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Premium Haircuts</li>
              <li className="text-gray-400 text-sm">Hair Coloring</li>
              <li className="text-gray-400 text-sm">Bridal Makeup</li>
              <li className="text-gray-400 text-sm">Skin Treatments</li>
              <li className="text-gray-400 text-sm">Spa & Massage</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg tracking-wider mb-6 text-[#D4AF37]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                <span>Ground Floor, NSM School,<br/>D.No 68-2-2 Road, Patamata,<br/>Vijayawada, AP 520010</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>+91 9948366135</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span>hello@keviv47.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Keviv 47 | Family Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white text-xs tracking-widest uppercase transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs tracking-widest uppercase transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
