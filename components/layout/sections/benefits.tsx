import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/feed-sources";
import { Icon } from "@/components/ui/icon";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Track Your Brand's Visibility",
    description:
      "Monitor your visibility on AI-driven search platforms to ensure your brand is seen by a broader and more relevant audience.",
  },
  {
    icon: "LineChart",
    title: "Monitor Product Performance",
    description:
      "Learn how your products are performing on AI-driven search platforms to optimize your marketing strategy.",
  },
  {
    icon: "Library",
    title: "Discover AI-Favored Sources",
    description:
      "Discover the sources that AI loves to find your brand and products to optimize your marketing strategy.",
  },
  {
    icon: "Lightbulb",
    title: "Optimize Content Strategy",
    description:
      "Gain insights into AI search trends to create content that resonates with your audience and aligns with search algorithms.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-20">
        <div className="w-full flex flex-col justify-start items-start">
          <h2 className="text-lg text-primary mb-2 tracking-wider">What is AI SEO?</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> On the Verge of a Paradigm Shift</h2>
          <p className="text-muted-foreground mb-2">
            {`Stay ahead of the curve as the shift from "searching" to "asking" transforms search engines.`}
          </p>
          <AnimatedBeamMultipleOutputDemo />
        </div>
        <div>
          <video autoPlay muted loop playsInline className="h-[650px] w-full object-cover" controls={false}>
            <source src="/chatgpt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">{description}</CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};
