"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import LinkedInIcon, { LinkedInIconBlue } from "@/components/icons/linkedin-icon";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image src="/logo.png" alt="ESSIO" width={160} height={160} />
            </Link>
          </div>

          <div className="hidden md:flex justify-end items-end gap-4">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 border-none bg-transparent"
                    onClick={() => (window.location.href = "mailto:dev@essio.ai")}
                  >
                    Feature Request
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}>dev@essio.ai</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 border-none bg-transparent"
                    onClick={() => (window.location.href = "mailto:feedback@essio.ai")}
                  >
                    Feedback
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}>feedback@essio.ai</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 border-none bg-transparent"
                    onClick={() => (window.location.href = "mailto:support@essio.ai")}
                  >
                    Issues
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}>support@essio.ai</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="/#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="/#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div> */}
          <h3 className="text-sm text-muted-foreground">&copy; 2024 ESSIO. All rights reserved.</h3>
        </div>

        <Separator className="my-6" />
        <section className="flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="sm:text-xs md:text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/toc" className="sm:text-xs md:text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
          <Link
            href="https://linkedin.com/company/essio-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <LinkedInIconBlue className="h-8 w-8  fill-[#0072b1]" />
          </Link>
        </section>
      </div>
    </footer>
  );
};
