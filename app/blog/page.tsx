import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata: Metadata = {
  title: "Blog | ESSIO - AI Brand Visibility Platform",
  description:
    "Explore the latest insights on AI search optimization, brand visibility strategies, and AI marketing trends.",
  openGraph: {
    title: "Blog | ESSIO - AI Brand Visibility Platform",
    description:
      "Explore the latest insights on AI search optimization, brand visibility strategies, and AI marketing trends.",
    url: "https://essio.ai/blog",
  },
  alternates: {
    canonical: "https://essio.ai/blog",
  },
};

const latestPosts = [
  {
    title: "Maximizing Brand Visibility in AI Search Results",
    description:
      "Learn how to optimize your brand's presence across AI-powered search platforms and stay ahead of the competition.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/blog/ai-search.webp",
    slug: "maximizing-brand-visibility-ai-search",
  },
  {
    title: "The Future of SEO: AI-First Optimization",
    description:
      "Discover how AI is reshaping SEO and what strategies you need to implement to succeed in this new landscape.",
    date: "March 12, 2024",
    readTime: "4 min read",
    image: "/blog/ai-seo.webp",
    slug: "future-of-seo-ai-first-optimization",
  },
  {
    title: "Understanding AI Search Analytics",
    description:
      "A comprehensive guide to interpreting and acting on AI search analytics to improve your brand's visibility.",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/blog/analytics.webp",
    slug: "understanding-ai-search-analytics",
  },
];

export default function BlogPage() {
  return (
    <main className="container py-24 sm:py-32">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Our Blog</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights & Trends</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover strategies and insights for optimizing your brand's visibility across AI search platforms.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <Link href={`/blog/${latestPosts[0].slug}`} className="block">
          <Card className="group overflow-hidden">
            <div className="relative h-[400px] w-full">
              {/* <Image
                src={latestPosts[0].image}
                alt={latestPosts[0].title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
              <div className="absolute bottom-0 p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {latestPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {latestPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {latestPosts[0].title}
                </h2>
                <p className="text-muted-foreground">{latestPosts[0].description}</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <Card className="group hover:border-primary/50 transition-colors h-full">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full mb-4">
                  {/* <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  /> */}
                </div>
                <div className="px-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6">
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <FooterSection />
    </main>
  );
}
