import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE_CONFIG } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.agencyName} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.agencyName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "web design agency for small business",
    "business website design",
    "online store builder",
    "high converting landing page",
    "affordable web development agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.agencyName,
    title: `${SITE_CONFIG.agencyName} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.agencyName} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
