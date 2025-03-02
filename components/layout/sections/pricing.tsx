"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Loader, Loader2, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SparklesText from "@/components/ui/sparkles-text";

interface PricingPlan {
  title: string;
  popular: number;
  price: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
  link: string;
}

interface UserStatus {
  is_active: boolean;
  plan: string;
}

const PopularPlanBadge = () => (
  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
    <SparklesText
      className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1 rounded-full text-xs sm:text-xs md:text-sm font-normal shadow-lg shadow-primary/20 ring-1 ring-primary/50"
      text="Most Popular Plan"
    />
  </div>
);

const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const isPopular = plan.popular === 1;
  const getButtonText = () => {
    return plan.buttonText;
  };

  return (
    <motion.div
      key={plan.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative ${isPopular ? "z-10" : "z-0"}`}
    >
      {isPopular && (
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/20 via-rose-500/10 to-transparent rounded-3xl blur-xl" />
      )}
      <Card
        className={`relative h-full flex flex-col  ${
          isPopular
            ? "border-rose-500/50 bg-gradient-to-b from-rose-950/50 via-rose-900/30 to-background/90 shadow-2xl shadow-rose-500/20"
            : "border-border/50 bg-gradient-to-b from-gray-950/50 to-background/90 hover:border-rose-500/30"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {isPopular && <PopularPlanBadge />}

          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              {plan.title}
            </h3>
            <p className="text-muted-foreground mt-2">{plan.description}</p>
          </div>

          {plan.price === "Custom" ? (
            <div className="mb-6">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                Custom
              </span>
            </div>
          ) : (
            <div className="mb-6">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                ${plan.price}
              </span>
              <span className="text-muted-foreground">/month</span>
            </div>
          )}

          <div className="flex-grow">
            <ul className="space-y-4">
              {plan.benefitList.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className={`rounded-full p-1 ${isPopular ? "bg-rose-500/20" : "bg-gray-800/50"}`}>
                    <Check className={`h-4 w-4 ${isPopular ? "text-rose-300" : "text-primary"}`} />
                  </div>
                  <span className="text-sm text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            className={`mt-8 w-full transition-colors ${
              isPopular
                ? "bg-primary/80 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20"
                : "hover:border-rose-500/50"
            }`}
            variant={isPopular ? "default" : "outline"}
            onClick={() => (window.location.href = plan.link)}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" /> Processing...
              </div>
            ) : (
              getButtonText()
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    popular: 0,
    price: 49,
    description: "Learn the basics of your GEO.",
    buttonText: "Get Started",
    benefitList: [
      "50 prompts per week",
      "SearchGPT, GPT-4o, Gemini, Claude, Perplexity",
      "Competitor benchmarking",
      // "Sentiment Analysis",
    ],
    link: `${process.env.NEXT_PUBLIC_APP_URL}/purchase/basic`,
  },

  {
    title: "Premium",
    popular: 1,
    price: 129,
    description: "Get the most out of your GEO.",
    buttonText: "Get Started",
    benefitList: [
      "150 prompts per week",
      "SearchGPT, GPT-4o, Gemini, Claude, Perplexity",
      "Competitor benchmarking",
      // "Sentiment Analysis",
      "Spot-on Recommendations",
      "Dedicated support",
    ],
    link: `${process.env.NEXT_PUBLIC_APP_URL}/purchase/premium`,
  },

  {
    title: "Enterprise",
    popular: 0,
    price: "Custom",
    description: "Become the conversation.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom amount of prompts",
      "Custom scan frequency",
      "All models in Premium + Custom models",
      "Location based search",
      "All features in Premium",
      "Dedicated support",
    ],
    link: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
  },
];

export default function Pricing() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div id="pricing" className="container py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pricing</h2>
      <div className="relative w-full px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.title} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
