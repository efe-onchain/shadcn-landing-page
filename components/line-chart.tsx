"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {
  const [aiModel, setAiModel] = useState<{ name: string; logo: string }>({ name: "ChatGPT", logo: "/oai2.svg" });

  const aiModels = [
    { name: "ChatGPT", logo: "/oai2.svg" },
    { name: "Perplexity", logo: "/perplexity.svg" },
    { name: "Gemini", logo: "/google-gemini-icon2.svg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAiModel(aiModels[Math.floor(Math.random() * aiModels.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getDataForModel = () => {
    switch (aiModel.name) {
      case "ChatGPT":
        return {
          labels: ["October", "November", "December", "January"],
          datasets: [
            {
              label: "Brand Visibility",
              data: [65, 72, 68, 75],
              borderColor: "#ffffff",
              tension: 0.4,
            },
          ],
        };
      case "Perplexity":
        return {
          labels: ["October", "November", "December", "January"],
          datasets: [
            {
              label: "Brand Visibility",
              data: [58, 63, 70, 82],
              borderColor: "#20808d",
              tension: 0.4,
            },
          ],
        };
      case "Gemini":
        return {
          labels: ["October", "November", "December", "January"],
          datasets: [
            {
              label: "Brand Visibility",
              data: [42, 55, 61, 73],
              borderColor: "#4285F4",
              tension: 0.4,
            },
          ],
        };
      default:
        return {
          labels: ["October", "November", "December", "January"],
          datasets: [
            {
              label: "Brand Visibility",
              data: [65, 72, 68, 75],
              borderColor: "#FFC107",
              tension: 0.4,
            },
          ],
        };
    }
  };

  const data = getDataForModel();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: function (tickValue: string | number) {
            return tickValue + "%";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">AI Visibility</h3>
            <p className="text-muted-foreground">Compare the visibility of your brand across different AI models</p>
          </div>
        </div>
        <div className="flex items-center gap-3 transition-all duration-300 ease-in-out">
          <img
            src={aiModel.logo}
            alt={`${aiModel.name} logo`}
            className="h-8 w-8 transition-transform duration-300 ease-in-out animate-in fade-in"
            key={aiModel.name}
          />
          <h3
            className="text-xl font-semibold transition-opacity duration-300 ease-in-out animate-in fade-in"
            key={`title-${aiModel.name}`}
          >
            {aiModel.name}
          </h3>
        </div>
      </div>
      <div className="h-[300px]">
        <Line data={getDataForModel()} options={options} />
      </div>
    </div>
  );
}
