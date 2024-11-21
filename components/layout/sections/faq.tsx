import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does essio provide?",
    answer:
      "essio specializes in tracking your brand's visibility on AI-driven search platforms, ensuring you connect with the right audience.",
    value: "item-1",
  },
  {
    question: "How can I monitor my brand's performance?",
    answer:
      "You can monitor your brand's visibility on AI-driven search platforms to ensure it reaches a broader and more relevant audience.",
    value: "item-2",
  },
  {
    question: "What insights can I gain about my products?",
    answer: "essio provides actionable insights to enhance your products' discoverability across AI search platforms.",
    value: "item-3",
  },
  {
    question: "How does essio optimize content strategy?",
    answer: "We analyze AI search trends to help you create content that resonates with your audience.",
    value: "item-4",
  },
  {
    question: "What are the benefits of using essio?",
    answer: "essio enhances your brand's visibility and connects you with the right audience on AI-driven platforms.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">Common Questions</h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
