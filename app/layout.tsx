import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "essio",
  description: "Your brand, front and center in every AI conversation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />

          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
