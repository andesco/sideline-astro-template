import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ITEMS = [
  {
    title: "Reusable templates.",
    description:
      "Draft lightning-fast documents with our Smart Instructions and Templates.",
    image: "/resource-allocation/templates.webp",
    alt: "Cycle 37 graph showing Scope, Started, and Completed metrics",
    className: "md:col-span-3 md:row-span-3",
    imageClassName:
      "size-full object-cover object-left-top translate-x-6 md:translate-x-10 lg:translate-x-20",
    overlay: ["to-background bg-linear-to-r absolute inset-0 z-10 from-transparent via-transparent"],
  },
  {
    title: "Simplify your stack.",
    description: "No more Confluence, SharePoint, or Microsoft Word.",
    image: "/resource-allocation/graveyard.webp",
    alt: "Triage interface showing issue management options",
    className: "md:col-span-3 md:col-start-4 md:row-span-3",
    imageClassName:
      "size-full object-cover object-left-top translate-x-6 md:translate-x-10 lg:translate-x-20",
    overlay: [
      "to-background bg-linear-to-r absolute inset-0 z-10 from-transparent via-transparent",
      "to-background bg-linear-to-b absolute inset-0 z-10 from-transparent via-transparent",
    ],
  },
  {
    title: "Access controls.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    image: "/resource-allocation/notifications.webp",
    alt: "Access controls interface showing People, Compliance, and Security options",
    className: "md:col-span-2 md:row-span-2 md:row-start-4",
    imageClassName:
      "size-full object-cover object-left-bottom translate-x-6 pb-6 md:translate-x-10",
    overlay: [
      "to-background bg-linear-to-r absolute inset-0 z-10 from-transparent via-transparent",
      "to-background bg-linear-to-t absolute inset-0 z-10 from-transparent via-transparent",
    ],
  },
  {
    title: "Task chat.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    image: "/resource-allocation/discussions.webp",
    alt: "Task chat interface showing a conversation",
    className: "md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-4",
    imageClassName: "size-full object-contain object-left-top mt-4 px-6",
    overlay: [],
  },
  {
    title: "Cycle analysis.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    image: "/resource-allocation/graveyard.webp",
    alt: "Cycle analysis showing backlog priorities and statistics",
    className: "md:col-span-2 md:col-start-5 md:row-span-2 md:row-start-4",
    imageClassName: "size-full object-contain object-center pb-6",
    overlay: [],
  },
];

export const ResourceAllocation = () => {
  return (
    <section id="feature2" className="bg-muted py-16 md:py-28 lg:py-32">
      <div className="container">
        <h2 className="text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Streamline your resource allocation and execution
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-6 md:grid-rows-5 lg:mt-20">
          {ITEMS.map((item) => (
            <Card
              key={item.title}
              className={`bg-card text-card-foreground relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] ${item.className}`}
            >
              <CardHeader className="mb-2">
                <CardTitle className="inline text-balance font-semibold leading-tight">
                  {item.title} <span className="text-muted-foreground font-medium">{item.description}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                {item.overlay.map((overlayClass) => (
                  <div key={overlayClass} className={overlayClass} />
                ))}
                <img src={item.image} alt={item.alt} className={item.imageClassName} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
