"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const latestPosts: BlogPost[] = [
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

export const BlogSection = () => {
  return (
    <section id="blog" className="container py-24 sm:py-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider text-center">Latest Insights</h2>
          <h3 className="text-3xl md:text-4xl max-w-xl mx-auto font-bold text-center">
            Learn About The Research and Trends in AI Search
          </h3>
        </div>
        <Link href="/blog" className="mt-8 hidden md:block">
          <Button className="group/button">
            View all articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group hover:border-primary/50 transition-colors flex flex-col h-full">
              <CardHeader className="p-0 flex-grow">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="px-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 flex-grow">
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link href="/blog">
          <Button variant="ghost" className="group/button">
            View all articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
