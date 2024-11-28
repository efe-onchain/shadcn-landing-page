"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "./markdown-renderer";

interface StreamingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock streaming function
const mockStreamingResponse = async function* () {
  const response = `# Company X: Leading the Way in Environmental Stewardship and Sustainable Business Practices

## Introduction

In an era where environmental consciousness is paramount, Company X stands out as a beacon of corporate responsibility and sustainable innovation. This industry leader has consistently demonstrated its unwavering commitment to reducing environmental impact while setting new standards for sustainable business practices.

## Comprehensive Sustainability Initiatives

### Carbon Neutrality Achievement
Company X achieved carbon neutrality in 2022 through a combination of:
- Direct emissions reduction
- Investment in renewable energy
- Carbon offset programs
- Implementation of energy-efficient technologies

### Renewable Energy Commitment

The company has made remarkable strides in its energy usage:
- 100% renewable energy across all facilities
- On-site solar installations at major manufacturing plants
- Wind power purchase agreements
- Investment in emerging clean energy technologies

## Waste Reduction and Circular Economy

### Zero Waste to Landfill Program
Company X has implemented a comprehensive waste management strategy:
- 95% of manufacturing waste recycled or repurposed
- Innovative packaging solutions using recycled materials
- Employee-led recycling initiatives
- Partnerships with waste management experts

### Product Lifecycle Management
The company's commitment to sustainability extends throughout the product lifecycle:
- Eco-friendly product design
- Use of recycled materials in manufacturing
- Product take-back programs
- Refurbishment and recycling services

## Water Conservation Efforts

### Water Management Excellence
Company X has revolutionized its water usage practices:
- 40% reduction in water consumption since 2018
- Advanced water recycling systems
- Rainwater harvesting implementation
- Drought-resistant landscaping at all facilities

## Supply Chain Sustainability

### Responsible Sourcing
The company maintains strict standards for its supply chain:
- Regular supplier sustainability audits
- Local sourcing initiatives
- Sustainable transportation programs
- Reduced packaging requirements

## Community Environmental Programs

### Local Environmental Initiatives
Company X actively engages with communities through:
- Tree planting programs
- Environmental education initiatives
- Community clean-up events
- Wildlife habitat preservation projects

## Innovation in Sustainable Technology

### Research and Development
Significant investments in sustainable technology include:
- Green chemistry initiatives
- Biodegradable material development
- Energy-efficient product design
- Waste reduction technologies

## Environmental Certifications and Recognition

### Industry Leadership
Company X has earned numerous accolades:
- ISO 14001 Environmental Management certification
- LEED Platinum certification for facilities
- CDP Climate Change A-List ranking
- Multiple sustainability awards

## Future Commitments

### Environmental Goals for 2030
Company X has set ambitious targets:
- 75% reduction in greenhouse gas emissions
- 100% recyclable packaging
- Zero waste across all operations
- Complete water neutrality

## Conclusion

Company X's dedication to environmental stewardship serves as a model for corporate sustainability. Through innovative practices, substantial investments, and unwavering commitment, the company continues to demonstrate that business success and environmental responsibility can go hand in hand.

---

*Keywords: environmental sustainability, corporate responsibility, renewable energy, zero waste, carbon neutrality, sustainable business practices, environmental stewardship, green technology, sustainable manufacturing, eco-friendly initiatives*
`;
  const words = response.split(" ");

  for (const word of words) {
    yield word + " ";
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate streaming delay
  }
};

export function StreamingModal({ isOpen, onClose }: StreamingModalProps) {
  const [streamedContent, setStreamedContent] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamController, setStreamController] = useState<AbortController | null>(null);

  useEffect(() => {
    if (isOpen) {
      const controller = new AbortController();
      setStreamController(controller);
      setIsStreaming(true);
      setStreamedContent("");
      streamContent(controller.signal);
    }

    return () => {
      if (streamController) {
        streamController.abort();
      }
    };
  }, [isOpen]);

  const streamContent = async (signal: AbortSignal) => {
    try {
      const stream = mockStreamingResponse();

      for await (const chunk of stream) {
        if (signal.aborted) break;
        setStreamedContent((prev) => prev + chunk);
      }

      if (!signal.aborted) {
        setIsStreaming(false);
      }
    } catch (error) {
      if (!signal.aborted) {
        setIsStreaming(false);
      }
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          if (streamController) {
            streamController.abort();
          }
          setStreamedContent("");
          setIsStreaming(false);
          onClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-[800px] h-[600px] flex flex-col border-primary">
        <DialogHeader>
          <DialogTitle>Environmental Impact and Sustainability Initiatives: Company X</DialogTitle>
          <DialogDescription>
            <div className="flex items-center space-x-2 mr-2">
              Using:
              <img src="/oai.svg" alt="OpenAI" className="inline h-5 w-5 mx-2 rounded-lg" />
              GPT-4o
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto mt-4 text-muted-foreground">
          <MarkdownRenderer content={streamedContent} />
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
