import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OrbitingCirclesDemo } from "@/components/ui/oribiting-circles-demo";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Brand Visibility",
    description:
      "Discover the visibility of your brand on AI search platforms. Compare your performance with competitors.",
    pro: 0,
  },
  {
    title: "Product Visibility",
    description:
      "Discover the visibility of your products on AI search platforms. Compare your performance with competitors.",
    pro: 0,
  },
  {
    title: "Keyword Tracking",
    description:
      "Monitor high-impact keywords to stay ahead of trends and optimize your content strategy for better rankings.",
    pro: 0,
  },
  {
    title: "Skyrocket Your Visibility",
    description:
      "Boost the discoverability of your brand and products on AI search platforms to attract and convert more potential buyers.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Services</h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Grow Your Business</h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Velori is your shortcut to success. We help you boost your visibility on AI-driven search platforms, ensuring
        your brand and products reach the right audience.
      </h3>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid sm:grid-cols-2 gap-4 w-full mx-auto">
          {serviceList.map(({ title, description, pro }) => (
            <Card key={title} className="bg-muted/60 dark:bg-card h-full relative">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <Badge
                data-pro={ProService.YES === pro}
                variant="secondary"
                className="absolute -top-2 -right-3 data-[pro=false]:hidden"
              >
                PRO
              </Badge>
            </Card>
          ))}
        </div>

        <OrbitingCirclesDemo />
      </div>
    </section>
  );
};
