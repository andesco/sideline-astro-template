const COMPANIES = [
  {
    name: "Mercury",
    logo: "/logos/mercury.svg",
    width: 143,
    height: 26,
    href: "https://mercury.com",
  },
  {
    name: "Watershed",
    logo: "/logos/watershed.svg",
    width: 154,
    height: 31,
    href: "https://watershed.com",
  },
  {
    name: "Retool",
    logo: "/logos/retool.svg",
    width: 113,
    height: 22,
    href: "https://retool.com",
  },
  {
    name: "Descript",
    logo: "/logos/descript.svg",
    width: 112,
    height: 27,
    href: "https://descript.com",
  },
  {
    name: "Perplexity",
    logo: "/logos/perplexity.svg",
    width: 141,
    height: 32,
    href: "https://perplexity.ai",
  },
  {
    name: "Monzo",
    logo: "/logos/monzo.svg",
    width: 104,
    height: 18,
    href: "https://monzo.com",
  },
  {
    name: "Ramp",
    logo: "/logos/ramp.svg",
    width: 105,
    height: 28,
    href: "https://ramp.com",
  },
  {
    name: "Raycast",
    logo: "/logos/raycast.svg",
    width: 128,
    height: 33,
    href: "https://raycast.com",
  },
  {
    name: "Arc",
    logo: "/logos/arc.svg",
    width: 90,
    height: 28,
    href: "https://arc.com",
  },
];

const LogoTrack = () => (
  <div className="animate-marquee flex shrink-0 items-center gap-12">
    {COMPANIES.map((company) => (
      <a href={company.href} target="_blank" key={company.name} className="p-6">
        <img
          src={company.logo}
          alt={company.name}
          width={company.width}
          height={company.height}
          className="object-contain transition-opacity hover:opacity-70"
        />
      </a>
    ))}
  </div>
);

export const Logos = () => {
  return (
    <section className="bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container text-center">
        <h2 className="text-balance text-xl font-semibold tracking-tight lg:text-3xl">
          Powering the world&apos;s best product teams.
          <br />
          <span className="text-muted-foreground">
            From next-gen startups to established enterprises.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          <LogoTrack />
          <LogoTrack />
        </div>
      </div>
    </section>
  );
};
