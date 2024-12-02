"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <h3 className="text-3xl">ESSIO</h3>
            </Link>
          </div>

          <div className="flex justify-enditems-end gap-4">
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
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">&copy; 2024 ESSIO. All rights reserved.</h3>
        </section>
      </div>
    </footer>
  );
};
