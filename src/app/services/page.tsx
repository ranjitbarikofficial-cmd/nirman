import type { Metadata } from "next";
import ServicesList from "@/components/ServicesList";

export const metadata: Metadata = {
  title: "Our Web Design & E-Commerce Services",
  description:
    "Explore Nirman's plain-English web design services: Business Websites, Online Stores, High-Converting Landing Pages, Website Redesigns, and Google SEO & Monthly Care.",
};

export default function ServicesPage() {
  return <ServicesList />;
}
