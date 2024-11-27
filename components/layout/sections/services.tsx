import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/feed-sources";
import { AnimatedListDemo, Notification } from "@/components/ui/notifications";
import { OrbitingCirclesDemo } from "@/components/ui/oribiting-circles-demo";

enum Beta {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: Beta;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Your Brand",
    description: "Know what exactly to do to improve your brand's visibility on AI platforms.",
    pro: 1,
  },
  {
    title: "Your Products",
    description: "Get actionable insights to enhance your products' discoverability across AI search platforms.",
    pro: 1,
  },
  {
    title: "Most Relevant Sources",
    description: "Target the right sources to boost your visibility.",
    pro: 1,
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
    <section id="services" className="container py-24 sm:py-32 px-4 md:px-8 lg:px-36">
      <div className="grid md:grid-cols-2 place-items-center lg:gap-20">
        <div className="order-2 md:order-1 w-full">
          <AnimatedListDemo />
        </div>
        <div className="w-full flex flex-col justify-center items-end text-right order-1 md:order-2">
          <h2 className="text-lg text-primary mb-2 tracking-wider">Tracking</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {`Understand How AI is Talking About Your Brand`}
          </h2>
          <h3 className="mx-auto text-muted-foreground mb-8">
            {`Essio empowers you to understand how AI search engines represent your brand. Access data-backed actionable insights, drive meaningful impact, and capture the spotlight.`}
          </h3>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid sm:grid-cols-2 gap-4 w-full mx-auto">
          {/* {serviceList.map(({ title, description, pro }) => (
            <Card key={title} className="bg-muted/60 dark:bg-card h-full relative">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <Badge
                data-pro={Beta.YES === pro}
                variant="secondary"
                className="absolute -top-2 -right-3 data-[pro=false]:hidden"
              >
                BETA
              </Badge>
            </Card>
          ))} */}
        </div>
      </div>
    </section>
  );
};
