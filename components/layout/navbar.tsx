"use client";
import { ChevronsDown, Github, Menu, ArrowRight } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { Circle } from "../ui/feed-sources";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#benefits",
    label: "Features",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <div className="flex-none w-1/3">
        <Link href="/" className="font-bold text-lg flex items-center">
          ESSIO
        </Link>
      </div>
      {/* <!-- Mobile --> */}
      <div className="xs:flex xs:justify-end xs:items-end xs:w-2/3 md:hidden ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center  ml-4">
                  <Link href="/" className="flex items-center">
                    ESSIO
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <Link href="/#contact" aria-label="View benefits" className="mt-4">
                <Button className="font-bold group/arrow bg-primary text-white">
                  Get Started
                  <ArrowRight
                    className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <div className="flex-1 flex justify-center">
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex">
            {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link href={href} className="text-base px-2">
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:flex  md:justify-end md:w-1/3">
        <Link href="/#contact" aria-label="Get Started">
          <Button className="font-bold group/arrow bg-primary text-white">Get Started</Button>
        </Link>
      </div>
    </header>
  );
};
