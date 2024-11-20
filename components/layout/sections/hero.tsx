"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import Particles from "@/components/ui/particles";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import SparklesText from "@/components/ui/sparkles-text";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={theme === "light" ? "#000" : "#fff"}
        refresh
      />
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-12 md:py-24">
        <div className="text-center space-y-8">
          <Link href="/#benefits">
            <ShinyBadge />
          </Link>
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <div className="flex items-center justify-center">
              <p>Own the</p>

              <SparklesText text="Spotlight" className="ml-4 text-primary text-4xl md:text-6xl" />
            </div>
            <p>in Every AI Search</p>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Connect with customers who are using AI to discover brands like yours.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full  mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={theme === "light" ? "/hero-image-light.png" : "/hero-image-dark.png"}
            alt="dashboard"
            unoptimized
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
