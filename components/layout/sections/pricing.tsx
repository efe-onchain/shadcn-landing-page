"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  link: string;
}

const plans: PlanProps[] = [
  {
    title: "Basic",
    popular: 0,
    price: 49,
    description: "Learn the basics of your GEO.",
    buttonText: "Get Started",
    benefitList: [
      "100 prompts per week",
      "SearchGPT, GPT-4o, Gemini, Claude, Perplexity",
      "Competitor benchmarking",
      "Sentiment Analysis",
    ],
    link: "https://app.essio.ai/purchase/basic",
  },
  {
    title: "Premium",
    popular: 1,
    price: 197,
    description: "Get the most out of your GEO.",
    buttonText: "Get Started",
    benefitList: [
      "500 prompts per week",
      "SearchGPT, GPT-4o, Gemini, Claude, Perplexity",
      "Competitor benchmarking",
      "Sentiment Analysis",
      "Spot-on Recommendations",
    ],
    link: "https://app.essio.ai/purchase/premium",
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 120,
    description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",

    buttonText: "Contact US",
    benefitList: ["10 team member", "20 GB storage", "Upto 10 pages", "Phone & email support", "AI assistance"],
    link: "https://essio.ai/contact",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Pricing</h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Start your journey</h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(({ title, popular, price, description, buttonText, benefitList, link }) => (
          <Card
            key={title}
            className={
              popular === PopularPlan?.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="pb-2">{title}</CardTitle>

              <CardDescription className="pb-4">{description}</CardDescription>

              <div>
                <span className="text-3xl font-bold">${price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
            </CardHeader>

            <CardContent className="flex">
              <div className="space-y-4">
                {benefitList.map((benefit) => (
                  <span key={benefit} className="flex">
                    <Check className="text-primary mr-2" />
                    <h3>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant={popular === PopularPlan?.YES ? "default" : "secondary"}
                className="w-full"
                onClick={() => window.open(link, "_blank")}
              >
                {buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
