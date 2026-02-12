import { Facebook, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Feature1", href: "/#feature1" },
      { label: "Feature2", href: "/#feature2" },
      { label: "Feature3", href: "/#feature3" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Terms of service", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
    ],
  },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-primary">
        <div className="border-sand-600 mx-auto flex max-w-[95vw] flex-col items-center border-b py-10 text-center md:py-14 lg:py-20">
          <h2 className="max-w-[800px] text-balance text-5xl font-semibold leading-none tracking-tight lg:text-6xl">
            Streamline starts now. <span className="text-sand-600">Your future won&apos;t wait.</span>
          </h2>
          <Button asChild variant="secondary" className="mt-9 rounded-lg px-8">
            <a href="/get-started">Get started with 7 days free</a>
          </Button>
        </div>

        <nav className="border-sand-600/50 mx-auto max-w-[95vw] border-b py-6">
          <div className="container flex flex-wrap gap-x-32 gap-y-20 md:justify-end md:gap-y-24 lg:gap-y-32">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-6 font-medium lg:text-lg">{group.title}</h3>
                <ul className="space-y-6">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-muted-foreground lg:text-lg">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="container py-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-medium">
              © {new Date().getFullYear()} Streamline -{" "}
              <a
                href="https://shadcnblocks.com"
                className="underline transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shadcnblocks.com
              </a>
            </p>
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    aria-label={item.href}
                    href={item.href}
                    className="hover:text-muted-foreground"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
