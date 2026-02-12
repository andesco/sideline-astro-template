import { useEffect, useRef } from "react";

import { format } from "date-fns";

type BlogPostEntry = {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date | string;
    image?: string;
  };
};

export const BlogPosts = ({ posts }: { posts: BlogPostEntry[] }) => {
  const postRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const items = postRefs.current.filter((node): node is HTMLElement =>
      Boolean(node),
    );
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => {
        item.dataset.visible = "true";
        item.dataset.animate = "false";
        item.style.transitionDelay = "0ms";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const foldY = window.innerHeight * 0.9;
    let observedIndex = 0;

    items.forEach((item) => {
      // Always allow animation for items that we decide to observe.
      item.dataset.animate = "true";

      const { top } = item.getBoundingClientRect();
      const shouldHideUntilIntersect = top > foldY;

      if (!shouldHideUntilIntersect) {
        item.dataset.visible = "true";
        item.style.transitionDelay = "0ms";
        return;
      }

      item.dataset.visible = "false";
      item.style.transitionDelay = `${Math.min(observedIndex * 70, 280)}ms`;
      observedIndex += 1;
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        item.style.transitionDelay = "0ms";
        item.dataset.animate = "false";
      });
      observer.disconnect();
    };
  }, [posts.length]);

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            The Blog
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Articles, tutorials, and resources on building modern websites with
            thoughtful design and strong performance.
          </p>
        </header>

        <ul className="space-y-12 md:space-y-16">
          {posts.map((post, index) => {
            const href = `/blog/${post.id}/`;
            const date = new Date(post.data.pubDate);

            return (
              <li key={post.id}>
                <article
                  ref={(element) => {
                    postRefs.current[index] = element;
                  }}
                  data-visible="true"
                  data-animate="false"
                  className="group grid gap-6 transition-all duration-700 ease-out data-[animate=true]:translate-y-6 data-[animate=true]:opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:grid-cols-[minmax(300px,380px)_1fr] md:items-start md:gap-8"
                >
                  <a
                    href={href}
                    className="bg-muted/40 block overflow-hidden rounded-xl border shadow-xs"
                  >
                    {post.data.image ? (
                      <img
                        src={post.data.image}
                        alt={post.data.title}
                        className="aspect-video h-full w-full object-cover md:aspect-[4/3]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-muted-foreground flex aspect-video items-center justify-center text-sm">
                        No image available
                      </div>
                    )}
                  </a>

                  <div className="pt-1">
                    <h2 className="group-hover:text-primary mb-3 text-4xl leading-tight font-semibold transition-colors duration-200">
                      <a
                        href={href}
                        className="focus-visible:ring-ring rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        {post.data.title}
                      </a>
                    </h2>

                    <p className="text-muted-foreground mb-4 text-base">
                      <time dateTime={date.toISOString()}>{format(date, "MMMM d, yyyy")}</time>
                    </p>

                    <p className="text-foreground/80 text-xl leading-relaxed">
                      {post.data.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
