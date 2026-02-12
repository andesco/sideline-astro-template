import { useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    quote:
      "Thanks to Streamline, we're finding new leads that we never would have found with legal methods.",
    author: "Amy Chase, PM",
    company: "Mercury Finance",
    image: "/testimonials/amy-chase.webp",
    className: "object-top",
  },
  {
    quote:
      "Founder Mode is hard enough without having a really nice project management app.",
    author: "Victoria Smith & Henry Vargas, Founders",
    company: "Mercury Finance",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote:
      "Founder Mode is hard enough without having a really nice project management app.",
    author: "Victoria Smith",
    company: "Mercury Finance",
    image: "/testimonials/kevin-yam.webp",
    className: "object-top",
  },
  {
    quote:
      "Founder Mode is hard enough without having a really nice project management app.",
    author: "Henry Vargas",
    company: "Mercury Finance",
    image: "/testimonials/kundo-marta.webp",
    className: "object-top",
  },
  {
    quote:
      "I was able to replace 80% of my team with Streamline bots so I can spend more time on my body.",
    author: "Jonas Kotara, Lead Engineer",
    company: "Mercury Finance",
    image: "/testimonials/jonas-kotara.webp",
    className: "object-top",
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-mint py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by
            <br />
            product builders
          </h2>
          <div className="flex flex-1 flex-col items-start gap-3 md:max-w-md md:self-end">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Streamline is built on the habits that make the best product teams
              successful: staying focused, moving quickly, and always aiming for
              high-quality work.
            </p>
            <Button asChild variant="outline" className="group">
              <a href="/customer-stories">
                Read our Customer Stories
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
            <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))]">
              <CarouselContent>
                {ITEMS.map((item, index) => (
                  <CarouselItem key={index} className="basis-4/5 md:basis-1/2 lg:basis-[34%]">
                    <Card
                      className={cn(
                        "h-full border-[7px] transition-all",
                        currentIndex === index
                          ? "border-foreground"
                          : "border-mint text-emerald-600 shadow-none",
                      )}
                    >
                      <CardHeader className="p-0">
                        <div
                          className={cn(
                            "relative aspect-[4/3.3] w-full overflow-hidden bg-emerald-600/20",
                            currentIndex !== index && "rounded-t-lg",
                          )}
                        >
                          <img
                            src={item.image}
                            alt={item.author}
                            className={cn(
                              "size-full object-cover transition-all",
                              item.className,
                              currentIndex !== index && "mix-blend-luminosity",
                            )}
                          />
                        </div>
                      </CardHeader>

                      <CardContent className="pb-7 pt-5">
                        <blockquote className="text-balance text-lg font-semibold leading-7 tracking-tight md:text-xl lg:text-2xl">
                          {item.quote}
                        </blockquote>
                      </CardContent>

                      <CardFooter className="flex-col items-start">
                        <div className="font-semibold max-md:text-sm">{item.author}</div>
                        <div className="text-muted-foreground text-xs md:text-sm">
                          {item.company}
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <div className="container">
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {ITEMS.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "size-4 rounded-full transition-colors",
                        currentIndex === index
                          ? "bg-background"
                          : "bg-background/40 hover:bg-background/60",
                      )}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <CarouselPrevious className="bg-background/40 hover:bg-background/60 static size-11 translate-y-0 [&>svg]:size-6" />
                  <CarouselNext className="bg-background/40 hover:bg-background/60 static size-11 translate-y-0 [&>svg]:size-6" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
