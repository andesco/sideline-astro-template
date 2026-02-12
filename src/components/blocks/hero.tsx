import { useEffect, useState } from "react";

import {
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
  type LucideIcon,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURE_ITEMS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

const SLIDES = [
  { image: "/hero.webp", label: "Kanban" },
  { image: "/resource-allocation/templates.webp", label: "Issues" },
  { image: "/resource-allocation/discussions.webp", label: "Add Issues" },
];

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: {
  currentSlide: number;
  slides: { image: string; label: string }[];
  className?: string;
  api?: CarouselApi;
}) => {
  return (
    <div className={cn("flex flex-col items-center font-medium", className)}>
      <div>
        <span className="text-sand-700">{currentSlide + 1} of 3 - </span>
        <span className="text-primary">{slides[currentSlide]?.label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="py-2"
          >
            <div
              className={cn(
                "h-0.5 w-6 rounded-full transition-colors",
                index === currentSlide
                  ? "bg-primary"
                  : "bg-primary/20 hover:bg-primary/40",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <section className="bg-sand-100 relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_0.68fr]">
        <div className="to-foreground/27 bg-linear-to-r absolute inset-x-0 bottom-0 z-10 -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] h-px from-transparent" />

        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Strategy guides product
            </h1>
            <p className="text-sand-700 mt-3 text-3xl font-medium md:text-4xl lg:text-5xl">
              Streamline is the fit-for-purpose tool for planning and building
              modern software products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {FEATURE_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex max-w-[250px] gap-2.5 lg:gap-5">
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button aria-label="Get started">Get started</Button>
            <a href="#streamline-news">
              <Button
                aria-label="Streamline raises $12M from Roba Ventures"
                variant="outline"
                className="max-sm:hidden"
              >
                <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                  Streamline raises $12M from Roba Ventures
                  <ArrowRight className="size-4 stroke-3" />
                </span>
              </Button>
            </a>
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4 max-lg:hidden"
            api={carouselApi}
          />
        </div>

        <div className="relative -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] shadow-xl max-lg:translate-x-10 lg:shadow-2xl">
          <Carousel className="size-full [&>div]:size-full" setApi={setCarouselApi} opts={{ loop: true }}>
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative size-full min-h-[30rem] overflow-hidden rounded-t-xl">
                    <img
                      src={slide.image}
                      alt={`Streamline product interface showing ${slide.label}`}
                      className="size-full object-cover object-left-top"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <SlideIndicator
        currentSlide={currentSlide}
        slides={SLIDES}
        className="mb-8 mt-6 lg:hidden"
        api={carouselApi}
      />
    </section>
  );
};
