import { useEffect, useMemo, useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    category: "Support",
    question: "Is there a free version?",
    answer:
      "Yes! We offer a generous free plan with just enough features except that one feature you really want! Our strategy is to get your credit card details on file then steadily double our prices against inflation rates.",
  },
  {
    category: "Support",
    question: "Is support free, or do I need to Perplexity everything?",
    answer:
      "We pride ourselves on our comprehensive support system. Our chatbot will happily redirect you to our documentation, which will then redirect you back to the chatbot.",
  },
  {
    category: "Support",
    question: "What if I need immediate assistance?",
    answer:
      "Our AI support team will get back to you in approximately 3-5 business years.",
  },
  {
    category: "Account",
    question: "How do I update my account without breaking my laptop?",
    answer:
      "Our platform is designed to be extremely user-friendly. Just follow our simple 47-step process, and you should be fine!",
  },
  {
    category: "Account",
    question: "How do I update my account without breaking the universe?",
    answer: "Just be very careful not to press any buttons too hard.",
  },
  {
    category: "Account",
    question: "What happens if I forget my password?",
    answer: "You'll need to solve three riddles and defeat a dragon.",
  },
  {
    category: "Features",
    question: "Are you going to be subsumed by AI?",
    answer:
      "Probably! But until then, we'll keep pretending we're irreplaceable.",
  },
  {
    category: "Features",
    question: "What makes your platform unique?",
    answer:
      "We use at least 7 different types of AI, and none of them work together!",
  },
  {
    category: "Features",
    question: "Do you support integration with other tools?",
    answer: "We integrate with everything except the tools you actually use.",
  },
  {
    category: "Security",
    question: "How secure is my data?",
    answer:
      "We use military-grade encryption, but our password is \"password123\".",
  },
  {
    category: "Security",
    question: "What happens in case of a data breach?",
    answer:
      "We'll send you a very apologetic email with a $5 gift card to your local coffee shop.",
  },
  {
    category: "Security",
    question: "Do you have a backup system?",
    answer:
      "Yes, we back up everything to a USB stick that we keep in a very safe place... somewhere.",
  },
  {
    category: "Other",
    question: "Why is your pricing so complicated?",
    answer:
      "Because simple pricing would make it too easy for you to understand what you're paying for.",
  },
  {
    category: "Other",
    question: "Do you offer refunds?",
    answer: "Yes, but only if you can prove you're from an alternate dimension.",
  },
  {
    category: "Other",
    question: "What's your roadmap look like?",
    answer: "It's more of a road-squiggle, really. We're agile!",
  },
];

const CATEGORIES = ["Support", "Account", "Features", "Security", "Other"];
const STICKY_OFFSET = 300;

export const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Support");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({
    Support: null,
    Account: null,
    Features: null,
    Security: null,
    Other: null,
  });

  const grouped = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        category,
        items: FAQ_ITEMS.filter((item) => item.category === category),
      })),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - STICKY_OFFSET) -
              Math.abs(b.boundingClientRect.top - STICKY_OFFSET),
          )[0];

        if (visible) {
          const category = visible.target.getAttribute("data-category");
          if (category) setActiveCategory(category);
        }
      },
      {
        root: null,
        rootMargin: `-${STICKY_OFFSET}px 0px -100% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const [category, element] of Object.entries(sectionRefs.current)) {
      if (element) {
        element.setAttribute("data-category", category);
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(`faq-${category.toLowerCase()}`);
    if (element) {
      element.style.scrollMargin = `${STICKY_OFFSET}px`;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-sand-100 min-h-screen py-16 md:py-28 lg:py-32">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            We&apos;ve got answers
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-center">
            This really should be an LLM but we&apos;re waiting for RAG to truly
            reach commodity stage before we touch it.
          </p>
        </div>

        <div className="mt-8 grid max-w-5xl gap-8 md:mt-12 md:grid-cols-[200px_1fr] md:gap-12 lg:mt-16">
          <div className="sticky top-24 flex h-fit flex-col gap-4 max-md:hidden">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "justify-start text-left text-xl transition-colors",
                  activeCategory === category
                    ? "font-semibold"
                    : "font-normal hover:opacity-75",
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {grouped.map(({ category, items }) => (
              <div
                key={category}
                id={`faq-${category.toLowerCase()}`}
                ref={(element) => {
                  sectionRefs.current[category] = element;
                }}
                className={cn(
                  "rounded-xl px-6",
                  activeCategory === category ? "bg-background" : "bg-background/40",
                )}
                style={{ scrollMargin: `${STICKY_OFFSET}px` }}
              >
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={`${CATEGORIES[0]}-0`}
                  className="w-full"
                >
                  {items.map((item, index) => (
                    <AccordionItem
                      key={`${category}-${index}`}
                      value={`${category}-${index}`}
                      className="border-muted border-b last:border-0"
                    >
                      <AccordionTrigger className="text-base font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base font-medium">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
