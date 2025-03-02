"use client";
import { useState, useEffect, useRef } from "react";
import { Tooltip, ResponsiveContainer, AreaChart, Area, Treemap } from "recharts";
import { ExternalLink, TrendingUp, ArrowUpRight, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import LineChart from "./line-chart";
import CompetitorComparison from "./competitor-comparison";
import RankingList from "./ranking-list";

const FeaturesSection = () => {
  const visibilityData = [
    { date: "2023-01-01", visibility: 42, industry: 35 },
    { date: "2023-02-01", visibility: 45, industry: 36 },
    { date: "2023-03-01", visibility: 50, industry: 38 },
    { date: "2023-04-01", visibility: 48, industry: 39 },
    { date: "2023-05-01", visibility: 52, industry: 40 },
    { date: "2023-06-01", visibility: 55, industry: 41 },
  ];

  const citedLinks = [
    { url: "yourdomain.com/blog/ai-trends", count: 127, icon: "/placeholder.svg?height=24&width=24" },
    { url: "yourdomain.com/research", count: 89, icon: "/placeholder.svg?height=24&width=24" },
    { url: "yourdomain.com/case-studies", count: 76, icon: "/placeholder.svg?height=24&width=24" },
  ];

  const competitorData = [
    { name: "Your Brand", size: 85, color: "#4f46e5" },
    { name: "Competitor A", size: 67, color: "#a5b4fc" },
    { name: "Competitor B", size: 72, color: "#818cf8" },
    { name: "Competitor C", size: 58, color: "#c7d2fe" },
  ];

  // Define AI models for visibility data
  const aiModels = [
    { name: "ChatGPT", logo: "/chatgpt-logo.svg" },
    { name: "Perplexity", logo: "/perplexity-logo.svg" },
    { name: "Gemini", logo: "/gemini-logo.svg" },
  ];

  // Feature definitions
  const features = [
    {
      id: "ai-visibility",
      title: "AI Visibility",
      description: "Track your visibility across different AI models",
      component: <LineChart />,
    },
    {
      id: "competitor-benchmarking",
      title: "Competitor Benchmarking",
      description: "Compare your performance against competitors",
      component: <CompetitorComparison />,
    },
    {
      id: "link-tracking",
      title: "Link Tracking",
      description: "Monitor which links are influential in AI search",
      component: <RankingList />,
    },
  ];

  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const featureDuration = 60000; // 20 seconds in milliseconds
  const progressUpdateInterval = 100; // Update progress every 100ms

  // Function to reset progress and start timer
  const startFeatureTimer = (featureIndex: number) => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setProgress(0);
    setActiveFeature(featureIndex);

    let elapsedTime = 0;

    intervalRef.current = setInterval(() => {
      elapsedTime += progressUpdateInterval;
      const newProgress = (elapsedTime / featureDuration) * 100;

      if (newProgress >= 100) {
        // Move to next feature
        const nextFeature = (featureIndex + 1) % features.length;
        setActiveFeature(nextFeature);
        setProgress(0);
        elapsedTime = 0;
        startFeatureTimer(nextFeature);
      } else {
        setProgress(newProgress);
      }
    }, progressUpdateInterval);
  };

  // Start timer when component mounts
  useEffect(() => {
    startFeatureTimer(0);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle manual feature selection
  const handleFeatureClick = (index: number) => {
    startFeatureTimer(index);
  };

  const CustomizedContent = (props: any) => {
    const { x, y, width, height, name, size, color } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: color,
            stroke: "#fff",
            strokeWidth: 2,
            strokeOpacity: 1,
          }}
        />
        {width > 50 && height > 50 && (
          <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
            fontWeight="bold"
            dominantBaseline="middle"
          >
            {name}
          </text>
        )}
        {width > 70 && height > 50 && (
          <text
            x={x + width / 2}
            y={y + height / 2 + 20}
            textAnchor="middle"
            fill="#fff"
            fontSize={12}
            dominantBaseline="middle"
          >
            {size}%
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="container py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover how our platform helps you optimize your content for AI search engines
        </p>
      </div>

      {/* Feature selection buttons */}
      <div className="flex justify-center gap-4">
        {features.map((feature, index) => (
          <Button
            key={feature.id}
            variant={activeFeature === index ? "default" : "outline"}
            onClick={() => handleFeatureClick(index)}
            className="min-w-32"
          >
            {feature.title}
          </Button>
        ))}
      </div>

      {/* Progress bar */}
      {/* <div className="w-full max-w-xl mx-auto">
        <Progress value={progress} className="h-1" />
      </div> */}

      {/* Feature content */}
      <Card className="w-full max-w-3xl mx-auto bg-transparent border-none">
        <CardContent className="p-6 bg-transparent">
          <div className="space-y-4">
            <div className="flex items-center justify-center">{features[activeFeature].component}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesSection;
