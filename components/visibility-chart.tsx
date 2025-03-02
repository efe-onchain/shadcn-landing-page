"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const aiModels = [
  {
    name: "OpenAI",
    logo: "/placeholder.svg?height=24&width=24",
    data: [65, 72, 68, 75],
    color: "#10a37f",
  },
  {
    name: "Perplexity",
    logo: "/placeholder.svg?height=24&width=24",
    data: [60, 65, 70, 78],
    color: "#3b82f6",
  },
  {
    name: "Gemini",
    logo: "/placeholder.svg?height=24&width=24",
    data: [55, 63, 67, 73],
    color: "#8b5cf6",
  },
]

export default function VisibilityChart() {
  const [activeModel, setActiveModel] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveModel((prev) => (prev + 1) % aiModels.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const data = {
    labels: ["October", "November", "December", "January"],
    datasets: [
      {
        label: aiModels[activeModel].name,
        data: aiModels[activeModel].data,
        borderColor: aiModels[activeModel].color,
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 50,
        max: 80,
        ticks: {
          stepSize: 10,
          callback: (value: number) => value + "%",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="h-full w-full p-4">
      <div className="flex justify-between items-center mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex items-center gap-3"
          >
            <img
              src={aiModels[activeModel].logo || "/placeholder.svg"}
              alt={`${aiModels[activeModel].name} logo`}
              className="h-8 w-8"
            />
            <h3 className="text-xl font-semibold">{aiModels[activeModel].name}</h3>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeModel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-[400px]"
        >
          <Line data={data} options={options} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

