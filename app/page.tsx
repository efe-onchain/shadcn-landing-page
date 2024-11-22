import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

// This enables Static Site Generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
