import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Eye, SearchIcon, Loader2, Edit3, WandSparkles } from "lucide-react";
import { AnimatedBeamMultipleOutputDemo } from "./feed-sources";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { StreamingModal } from "./streaming-modal";
import SparklesText from "./sparkles-text";

export default function AISearchStrategy() {
  const [isStreamingModalOpen, setIsStreamingModalOpen] = useState(false);

  const handleDraftWithAI = () => {
    setIsStreamingModalOpen(true);
  };

  const steps = [
    {
      title: "Identify Non-VisibleKeywords",
      description: "Discover keywords your company is not visible for in AI-driven search results.",
      icon: Search,
    },
    {
      title: "Create Content",
      description: "Develop or repurpose content to target the identified keywords and topics.",
      icon: FileText,
    },
    {
      title: "Enhance Visibility",
      description: "Optimize your content to be more visible on AI-driven search platforms.",
      icon: Eye,
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card key="step-1" className="flex flex-col h-full bg-transparent border-none">
          <CardHeader>
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <SearchIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl mb-2">Identify Keywords</CardTitle>
            <CardDescription>
              Discover keywords your company is not visible for in AI-driven search results.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard title="Affordability" />
              <FeatureCard title="Build Quality" />
              <FeatureCard title="Performance" />
              <FeatureCard title="Environmental Impact" />
            </div>
          </CardContent>
        </Card>
        <Card key="step-2" className="flex flex-col h-full bg-transparent border-none">
          <CardHeader>
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <WandSparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl mb-2 flex items-center">Create GEO Optimized Content</CardTitle>
            <CardDescription>
              Develop or repurpose content to target the identified keywords and topics.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end items-end h-full">
            <Button onClick={() => handleDraftWithAI()}>
              Draft with AI <Edit3 className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <StreamingModal isOpen={isStreamingModalOpen} onClose={() => setIsStreamingModalOpen(false)} />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12 md:px-8">
        <div className="flex flex-col justify-center gap-2">
          <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl">
            Own the <SparklesText text="Spotlight" className="text-primary text-2xl md:text-3xl" />
          </CardTitle>
          <CardDescription>
            Become visible in the AI-driven search results. Drive traffic to your brand and products.
          </CardDescription>
        </div>
        <AnimatedBeamMultipleOutputDemo />
      </div>
    </div>
  );
}

function FeatureCard({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute -inset-1 bg-primary/50 rounded-full animate-ping [animation-duration:2000ms]"></div>
      </div>
      <p className="text-muted-foreground">{title}</p>
    </div>
  );
}
