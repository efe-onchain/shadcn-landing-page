import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Fingerprint",
    title: "Brand Visibility Tracking",
    description:
      "Track your brand's visibility across AI search platforms to ensure your brand is seen by a broader and more relevant audience.",
  },
  {
    icon: "Package",
    title: "Product Performance Tracking",
    description:
      "Track your products' performance across AI search platforms to ensure your products are seen by a broader and more relevant audience.",
  },
  {
    icon: "Goal",
    title: "Keyword Tracking",
    description:
      "Identify high-impact keywords and optimize your content for maximum visibility on AI-driven search engines.",
  },
  {
    icon: "Zap",
    title: "Automated Suggestions",
    description:
      "Receive intelligent recommendations for content improvements and ranking enhancements based on platform-specific criteria.",
  },
  {
    icon: "AArrowUp",
    title: "Content Enhancements",
    description:
      "Optimize metadata, structure, and presentation to align with AI search platform algorithms for better discoverability.",
  },
  {
    icon: "Activity",
    title: "Drive Traffic",
    description:
      "Drive more traffic to your sales-channel by identifying and targeting high-performing keywords and sources.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Features</h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">The Next-Generation of SEO</h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover how our innovative features can enhance your visibility and performance on AI-driven search platforms.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">{description}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
