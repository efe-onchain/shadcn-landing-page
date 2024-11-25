"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Particles from "@/components/ui/particles";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import SparklesText from "@/components/ui/sparkles-text";
import Link from "next/link";
import { WaitlistButton } from "@/components/ui/waitlist-button";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-12W md:py-24">
        <div className="text-center space-y-8">
          <Link href="/#benefits" aria-label="View benefits">
            <ShinyBadge />
          </Link>
          <h1 className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <div className="flex items-center justify-center">
              <span>Own the</span>
              <SparklesText text="Spotlight" className="ml-4 text-primary text-4xl md:text-6xl" />
            </div>
            <span>in Every AI Search</span>
          </h1>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Align your business with the evolving customer journey
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/#contact" aria-label="View benefits">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Get Started
                <ArrowRight
                  className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
            src={"/hero-image-dark.webp"}
            alt="essio AI Brand Visibility Platform Dashboard"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j..."
            loading="eager"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
