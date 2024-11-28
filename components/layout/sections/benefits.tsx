import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/feed-sources";
import { Icon } from "@/components/ui/icon";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { MagicCard } from "@/components/ui/magic-card";
import { ArrowRight } from "lucide-react";
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
  // {
  //   icon: "Library",
  //   title: "Discover AI-Favored Sources",
  //   description:
  //     "Discover the sources that AI loves to find your brand and products to optimize your marketing strategy.",
  // },
  // {
  //   icon: "Lightbulb",
  //   title: "Optimize Content Strategy",
  //   description:
  //     "Gain insights into AI search trends to create content that resonates with your audience and aligns with search algorithms.",
  // },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 px-8 lg:px-36">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-16">
        <div className="w-full flex flex-col justify-between items-start">
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider">What is AI Search Optimization?</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Navigating the Paradigm Shift in &quot;Search&quot;</h2>
            <p className="text-muted-foreground mb-2">
              {`AI Search Optimization is the process of optimizing your content and marketing strategy to be more visible on AI-driven search platforms.`}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-16">
            <div className="relative">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute -inset-1 bg-primary/50 rounded-full animate-ping [animation-duration:2000ms]"></div>
            </div>
            <p className="text-muted-foreground">
              Stay ahead of the curve as the shift from <strong>&quot;searching&quot;</strong> to{" "}
              <strong>&quot;asking&quot;</strong> transforms search engines.
            </p>
          </div>
        </div>
        <div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-[450px] md:h-[650px] w-full object-cover rounded-lg mt-8 md:mt-0"
            controls={false}
          >
            <source src="/chatgpt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* 
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
