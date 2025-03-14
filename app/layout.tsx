import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://essio.ai"),
  title: "ESSIO | AI-Search Analytics Platform",
  description:
    "Track and optimize your brand's visibility across AI search platforms like ChatGPT, Claude, and Gemini. Get real-time insights and actionable recommendations.",
  keywords: [
    "GEO",
    "GEO AI",
    "Generative Engine Optimization",
    "ChatGPT SEO",
    "Gemini SEO",
    "AI SEO",
    "AI search",
    "brand visibility",
    "AI search optimization",
    "ChatGPT visibility",
    "AI marketing",
    "brand tracking",
    "AI content optimization",
    "AI search analytics",
  ],
  authors: [{ name: "essio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://essio.ai",
    title: "essio - AI Brand Visibility Platform",
    description:
      "Track and optimize your brand's visibility across AI search platforms. Get actionable insights to improve visibility and drive more traffic.",
    siteName: "essio",
    images: [
      {
        url: "/og.ong",
        width: 1200,
        height: 630,
        alt: "essio AI Brand Visibility Platform",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESSIO - AI Brand Visibility Platform",
    description: "Track and optimize your brand's visibility across AI search platforms.",
    creator: "@getessio",
    images: ["/opengraph-image.png"],
  },
};

function addWebsiteJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ESSIO",
      "url": "https://essio.ai",
      "logo": "https://essio.ai/opengraph-image.png",
      "description": "Track and optimize your brand's visibility across AI search platforms like ChatGPT, Claude, and Gemini.",
      "sameAs": [
        "https://twitter.com/getessio",
        "https://linkedin.com/company/essio-ai"
      ]
    }`,
  };
}

function addBlogJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ESSIO Blog",
      "url": "https://essio.ai/blog",
      "description": "Explore insights and strategies for optimizing brand visibility across AI search platforms.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://essio.ai/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NBBV67PXL5"></Script>
        <Script id="google-tag-manager">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NBBV67PXL5');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msvalidate.01" content="D28219F6475C8E4D68EF02ABF27ADBD5" />
        <meta name="OAI-SearchBot" content="index,follow" />
        <Script async src="https://cdn.seline.so/seline.js" data-token="e38ab5637034c9e" strategy="beforeInteractive" />
        <Script src="https://darkvisitors.com/tracker.js?project_key=cf5be4c3-6227-44d3-8d0a-35ac731cb683"></Script>

        <meta name="PerplexityBot" content="index,follow" />
      </head>
      <body className={cn("min-h-screen bg-background antialiased")}>
        <script type="application/ld+json" dangerouslySetInnerHTML={addWebsiteJsonLd()} key="website-jsonld" />
        <script type="application/ld+json" dangerouslySetInnerHTML={addBlogJsonLd()} key="blog-jsonld" />
        <link rel="preload" href="/hero-image-dark.webp" as="image" type="image/webp" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
