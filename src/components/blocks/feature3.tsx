import { Blend, ChartNoAxesColumn, CircleDot, Diamond } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
    content: {
      title: "Issue tracking with more noise.",
      description:
        "Simple, robust, and blazingly fast. Streamline is designed with developer ergonomics in mind. It's the first issue tracker your team will actually enjoy using.",
      image: "/resource-allocation/templates.webp",
      className: "md:[&_img]:translate-x-20 [&_img]:translate-x-5",
    },
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
    content: {
      title: "Issue tracking with more noise.",
      description:
        "Simple, robust, and blazingly fast. Streamline is designed with developer ergonomics in mind. It's the first issue tracker your team will actually enjoy using.",
      image: "/resource-allocation/discussions.webp",
    },
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
    content: {
      title: "Issue tracking with more noise.",
      description:
        "Simple, robust, and blazingly fast. Streamline is designed with developer ergonomics in mind. It's the first issue tracker your team will actually enjoy using.",
      image: "/resource-allocation/notifications.webp",
    },
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
    content: {
      title: "Issue tracking with more noise.",
      description:
        "Simple, robust, and blazingly fast. Streamline is designed with developer ergonomics in mind. It's the first issue tracker your team will actually enjoy using.",
      image: "/resource-allocation/graveyard.webp",
    },
  },
];

export const Feature3 = () => {
  return (
    <section id="feature3" className="bg-mint-50 py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Streamline your resource allocation and execution
          </h2>
          <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
            Streamline is built on the habits that make the best product teams
            successful: staying focused, moving quickly, and always aiming for
            high-quality work.
          </p>
        </div>

        <Tabs
          defaultValue={FEATURES[0].title}
          className="mt-8 flex gap-4 max-lg:flex-col-reverse md:mt-12 lg:mt-20"
          orientation="vertical"
        >
          <TabsList className="flex h-auto justify-start overflow-x-auto rounded-xl bg-black/[0.03] p-1.5 lg:basis-1/4 lg:flex-col">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title}
                  className="text-foreground w-full min-w-[200px] flex-1 justify-start whitespace-normal rounded-lg px-4 py-3 text-start transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:data-[state=active]:text-white"
                >
                  <div>
                    <Icon className="size-7 md:size-8 lg:size-9" />
                    <h3 className="mt-3 font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {FEATURES.map((feature) => (
            <TabsContent
              key={feature.title}
              value={feature.title}
              className={cn(
                "bg-background m-0 flex-1 overflow-hidden rounded-xl",
                feature.content.className,
              )}
            >
              <div className="max-w-2xl text-balance p-5 text-lg lg:p-7">
                <h4 className="inline font-semibold">{feature.content.title} </h4>
                <span className="text-muted-foreground mt-2 text-pretty font-medium">
                  {feature.content.description}
                </span>
              </div>

              <div className="relative h-[420px] rounded-lg lg:h-[500px] lg:flex-1">
                <img
                  src={feature.content.image}
                  alt={feature.title}
                  className="size-full object-cover object-left-top"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
