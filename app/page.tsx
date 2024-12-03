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
import { headers } from "next/headers";

// This enables Static Site Generation
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

async function logVisit() {
  const headersList = headers();
  const path = headersList.get("x-invoke-path") || "/";
  const method = headersList.get("x-invoke-method") || "GET";

  const requestHeaders: Record<string, string> = {};
  headersList.forEach((value, key) => {
    requestHeaders[key] = value;
  });

  try {
    fetch("https://api.darkvisitors.com/visits", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.DARK_VISITORS_ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request_path: path,
        request_method: method,
        request_headers: requestHeaders,
      }),
    });
  } catch (error) {
    // Silently log the error
    console.error("Failed to log visit:", error);
  }
}

export default async function Home() {
  await logVisit();

  return (
    <main>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <ServicesSection />
      <FeaturesSection />
      {/* <PricingSection /> */}
      <ContactSection />
      {/* <BlogSection /> */}
      <FAQSection />
      <FooterSection />
    </main>
  );
}
