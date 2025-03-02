"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const platforms = [
  { name: "OpenAI", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Perplexity", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Anthropic", logo: "/placeholder.svg?height=48&width=48" },
]

const sources = [
  {
    name: "Financial Times",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20183746-3FJ3cq5jjRmknsFkynJzPj69tyKLHl.png",
  },
  {
    name: "YouTube",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20183746-3FJ3cq5jjRmknsFkynJzPj69tyKLHl.png",
  },
  {
    name: "Wikipedia",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20183746-3FJ3cq5jjRmknsFkynJzPj69tyKLHl.png",
  },
  {
    name: "Fortune",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20183746-3FJ3cq5jjRmknsFkynJzPj69tyKLHl.png",
  },
  {
    name: "Der Spiegel",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20183746-3FJ3cq5jjRmknsFkynJzPj69tyKLHl.png",
  },
]

export default function SourcesAnimation() {
  const [activePlatform, setActivePlatform] = useState(0)
  const [activeSource, setActiveSource] = useState(0)

  useEffect(() => {
    const sourceTimer = setInterval(() => {
      setActiveSource((prev) => (prev + 1) % sources.length)
    }, 2000)

    const platformTimer = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platforms.length)
    }, 6000)

    return () => {
      clearInterval(sourceTimer)
      clearInterval(platformTimer)
    }
  }, [])

  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative w-[500px] h-[500px]">
        {/* Platform in center */}
        <motion.div
          key={activePlatform}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={platforms[activePlatform].logo || "/placeholder.svg"}
            alt={platforms[activePlatform].name}
            className="w-24 h-24"
          />
        </motion.div>

        {/* Sources in circle */}
        {sources.map((source, index) => {
          const angle = (index * 360) / sources.length
          const radius = 180
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          return (
            <motion.div
              key={source.name}
              className="absolute w-16 h-16"
              style={{
                top: "50%",
                left: "50%",
                x: x - 32,
                y: y - 32,
              }}
              animate={{
                scale: activeSource === index ? 1.2 : 1,
                opacity: activeSource === index ? 1 : 0.5,
              }}
            >
              <img src={source.logo || "/placeholder.svg"} alt={source.name} className="w-full h-full object-contain" />
            </motion.div>
          )
        })}

        {/* Animated connection line */}
        {activeSource !== null && (
          <motion.div
            className="absolute top-1/2 left-1/2 h-0.5 bg-primary origin-left"
            style={{
              width: "180px",
              rotate: `${(activeSource * 360) / sources.length}deg`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        )}
      </div>
    </div>
  )
}

