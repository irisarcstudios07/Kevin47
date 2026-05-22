"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FadeIn, SlideIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { 
  Users, 
  Calendar, 
  Settings, 
  LogOut, 
  Plus, 
  Search,
  CheckCircle,
  Clock,
  Trash2,
  Edit
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("bookings");

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (!auth) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  const dashboardTabs = [
    { id: "bookings", label: "Appointments", icon: Calendar },
    { id: "services", label: "Services", icon: Settings },
    { id: "gallery", label: "Gallery", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] pt-32 pb-24 flex flex-col md:flex-row gap-8 container mx-auto px-4 md:px-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 space-y-4">
        <SlideIn direction="left">
          <div className="glass-effect bg-white dark:bg-[#1A1A1A] p-6 rounded-sm border border-gray-100 dark:border-white/5">
            <h2 className="text-xl font-playfair mb-8 text-black dark:text-white">Admin Panel</h2>
            <nav className="space-y-2">
              {dashboardTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-sm transition-all text-sm uppercase tracking-widest ${
                    activeTab === tab.id
                      ? "bg-[#D4AF37] text-white"
                      : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
                >
                  <tab.icon size={18} /> {tab.label}
                </button>
              ))}
              <hr className="my-6 border-gray-100 dark:border-white/10" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-sm transition-all text-sm uppercase tracking-widest"
              >
                <LogOut size={18} /> Logout
              </button>
            </nav>
          </div>
        </SlideIn>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow">
        <FadeIn>
          <div className="glass-effect bg-white dark:bg-[#1A1A1A] p-8 rounded-sm border border-gray-100 dark:border-white/5 min-h-[600px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <h1 className="text-3xl font-playfair text-black dark:text-white">
                {dashboardTabs.find(t => t.id === activeTab)?.label}
              </h1>
              <div className="flex gap-4 w-full md:w-auto">
                 <div className="relative flex-grow">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                   <input 
                     type="text" 
                     placeholder="Search..." 
                     className="w-full bg-[#FAFAFA] dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-sm py-3 pl-12 pr-4 outline-none focus:border-[#D4AF37] text-sm"
                   />
                 </div>
                 {activeTab === "services" && (
                   <Button variant="luxury" size="sm" className="flex items-center gap-2">
                     <Plus size={16} /> Add Service
                   </Button>
                 )}
              </div>
            </div>

            {/* Content Body Placeholder */}
            {activeTab === "bookings" && (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-6 border border-gray-100 dark:border-white/5 rounded-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                        <Users size={20} />
                      </div>
                      <div>
                        <h4 className="font-playfair text-lg text-black dark:text-white">Jane Smith</h4>
                        <p className="text-sm text-gray-500">Premium Haircut • Tomorrow, 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="p-2 text-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 rounded-full transition-colors"><CheckCircle size={20} /></button>
                      <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-full transition-colors"><Clock size={20} /></button>
                      <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-full transition-colors"><Trash2 size={20} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "services" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-gray-100 dark:border-white/5 rounded-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2674&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">Classic Cut</h4>
                        <p className="text-xs text-gray-500">$50 • 60 Mins</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                       <button className="p-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Edit size={16} /></button>
                       <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "gallery" && (
              <div className="text-center py-20">
                <p className="text-gray-400 font-light italic">Image management module coming soon...</p>
              </div>
            )}
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
