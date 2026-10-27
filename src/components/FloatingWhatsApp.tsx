"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex min-h-[54px] items-center gap-2.5 rounded-full bg-[#128C7E] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/25 transition-transform hover:scale-105 hover:bg-[#075E54] sm:px-5"
    >
      <MessageCircle className="h-6 w-6 fill-current" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
