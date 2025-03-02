"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    name: "Video Conferencing",
    competitors: [
      { name: "Zoom", percentage: 75, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Microsoft Teams", percentage: 68, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Google Meet", percentage: 55, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Skype", percentage: 42, logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    name: "Marketing Platforms",
    competitors: [
      { name: "HubSpot", percentage: 82, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Braze", percentage: 71, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Insider", percentage: 65, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Iterable", percentage: 58, logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    name: "Web Hosting",
    competitors: [
      { name: "GoDaddy", percentage: 68, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Bluehost", percentage: 63, logo: "/placeholder.svg?height=24&width=24" },
      { name: "HostGator", percentage: 57, logo: "/placeholder.svg?height=24&width=24" },
      { name: "Hostinger", percentage: 52, logo: "/placeholder.svg?height=24&width=24" },
    ],
  },
];

export default function CompetitorComparison() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold">Competitor Comparison</h3>
          <p className="text-muted-foreground">Compare your performance against competitors</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.h3
            key={activeIndustry}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-xl font-semibold"
          >
            {industries[activeIndustry].name}
          </motion.h3>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-6"
        >
          {industries[activeIndustry].competitors.map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img src={competitor.logo || "/placeholder.svg"} alt={`${competitor.name} logo`} className="h-8 w-8" />
                <span className="font-medium">{competitor.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-48 bg-muted rounded-full h-2">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${competitor.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="font-semibold w-12">{competitor.percentage}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
