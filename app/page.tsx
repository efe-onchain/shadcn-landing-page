import { BenefitsSection } from "@/components/layout/sections/benefits";
import { BlogSection } from "@/components/layout/sections/blog";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

// This enables Static Site Generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <ServicesSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      {/* <BlogSection /> */}
      <FAQSection />
      <FooterSection />
    </main>
  );
}
