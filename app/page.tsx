import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Essio - AI Search Visibility Platform",
  description: "Track and optimize your brand's visibility across AI-driven search platforms",
  openGraph: {
    type: "website",
    url: "https://Essio.com",
    title: "Essio - AI Search Visibility Platform",
    description:
      "Monitor and enhance your brand's presence across AI search platforms. Get actionable insights to improve visibility and drive more traffic.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Essio AI Search Visibility Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Essio",
    title: "Essio - AI Search Visibility Platform",
    description:
      "Monitor and enhance your brand's presence across AI search platforms. Get actionable insights to improve visibility and drive more traffic.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <ServicesSection />
      <FeaturesSection />
      {/* <TestimonialSection /> */}
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
