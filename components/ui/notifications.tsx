"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  icon: string;
  time: string;
}

let notifications = [
  {
    name: "Pricing",
    description: "AI models frequently mention your product as overpriced.",
    time: "15m ago",
    icon: "/perplexity.svg",
  },
  {
    name: "Affordability Ranking",
    description: "Your product is #1 on affordability according to Claude.",
    time: "12m ago",
    icon: "/claude-ai-icon.svg",
  },
  {
    name: "Impacting Source",
    description: "example.com is the most impacting source for your brand on Claude.",
    time: "6m ago",
    icon: "/claude-ai-icon.svg",
  },
  {
    name: "Customer Service",
    description: "Your customer service is heavily disliked on SearchGPT.",
    time: "10m ago",
    icon: "/oai.svg",
  },
  {
    name: "Environmental Impact",
    description: "Your company has positive sentiment on environmental impact on Perplexity.",
    time: "5m ago",
    icon: "/perplexity.svg",
  },
  {
    name: "Durability Ranking",
    description: "Your product is #7 on durability according to Gemini.",
    time: "8m ago",
    icon: "/google-gemini-icon2.svg",
  },
  {
    name: "Entertainment Systems",
    description: "Your product is #5 on entertainment systems according to Perplexity.",
    time: "6m ago",
    icon: "/perplexity.svg",
  },
  {
    name: "Impacting Source",
    description: "example.com is the most impacting source for your brand on OpenAI.",
    time: "6m ago",
    icon: "/oai.svg",
  },
  {
    name: "Maintenance",
    description: "Your product is ranked #3 on maintenance on Perplexity.",
    time: "6m ago",
    icon: "/google-gemini-icon2.svg",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

export const Notification = ({ name, description, icon, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-500 ease-in-out hover:scale-[103%]", // Increased duration from 200 to 500
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl">
          <Image src={icon} alt={name} width={24} height={24} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg bg-background ", className)}
    >
      <AnimatedList>
        {" "}
        {/* Added interval prop to slow down animations */}
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
