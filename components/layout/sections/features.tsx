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
    icon: "BrainCircuit",
    title: "AI-Powered Optimization",
    description:
      "Leverage advanced AI algorithms to analyze and boost your rankings across AI search platforms effortlessly.",
  },
  {
    icon: "BarChart2",
    title: "Performance Insights",
    description:
      "Access in-depth analytics and reports to track your search visibility and optimize your strategy over time.",
  },
  {
    icon: "Goal",
    title: "Keyword Targeting",
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
    title: "Trend Tracking",
    description: "Stay informed on evolving AI search trends and adapt your strategy to maintain a competitive edge.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Features</h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">What Makes Us Different</h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We combine advanced AI with simplicity, helping your content rank higher while engaging your audience
        effectively.
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
