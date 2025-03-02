"use client";

import { motion } from "framer-motion";

const competitors = [
  { name: "ClickUp", percentage: 63, logo: "/placeholder.svg?height=24&width=24" },
  { name: "Trello", percentage: 51, logo: "/placeholder.svg?height=24&width=24" },
  { name: "Monday.com", percentage: 47, logo: "/placeholder.svg?height=24&width=24" },
  { name: "Asana", percentage: 33, logo: "/placeholder.svg?height=24&width=24" },
  { name: "Jira", percentage: 21, logo: "/placeholder.svg?height=24&width=24" },
];

export default function RankingList() {
  return (
    <div className="h-full w-full p-4">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-semibold">Industry Ranking</h3>
        <img src="/placeholder.svg?height=24&width=24" alt="Deepseek logo" className="h-6" />
      </div>
      <div className="space-y-6">
        {competitors.map((competitor, index) => (
          <motion.div
            key={competitor.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">{index + 1}.</span>
              <img src={competitor.logo || "/placeholder.svg"} alt={`${competitor.name} logo`} className="h-6 w-6" />
              <span className="font-medium">{competitor.name}</span>
            </div>
            <span className="font-semibold">{competitor.percentage}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
