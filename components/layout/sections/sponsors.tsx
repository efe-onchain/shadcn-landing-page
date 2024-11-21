"use client";

import { Icon } from "@/components/ui/icon";
import { Icons } from "@/components/ui/logo-icons";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "claude",
    name: "Claude",
  },
  {
    icon: "perplexity",
    name: "Perplexity",
  },
  {
    icon: "google",
    name: "Google",
  },
  {
    icon: "openai",
    name: "OpenAI",
  },
  {
    icon: "gemini",
    name: "Google Gemini",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg text-primary mb-2 tracking-wider text-center">Powered By</h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Data Sources</h2>
      <p className="text-muted-foreground mb-2 text-center w-[70%] mx-auto">
        We leverage a variety of AI-driven platforms to ensure your brand and products achieve maximum visibility and
        reach the right audience.
      </p>
      <div className="mx-auto pt-8">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover>
          {sponsors.map(({ icon, name }) => (
            <div key={name} className="flex items-center space-x-2 text-xl md:text-2xl font-medium">
              <div
                className={`w-8 h-8 flex items-center justify-center ${
                  icon === "openai" ? "bg-white rounded-full" : ""
                }`}
              >
                {Icons[icon as keyof typeof Icons]()}
              </div>
              <span>{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
