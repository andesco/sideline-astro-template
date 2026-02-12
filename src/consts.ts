export const SITE_TITLE = "Streamline - Modern Astro Template";
export const SITE_DESCRIPTION =
  "A modern, fully featured Astro template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.";

export const GITHUB_URL =
  "https://shadcnblocks.com/template/streamline?bundle=astro";

export const SITE_METADATA = {
  title: {
    default: "Streamline - Modern Astro Template",
    template: "%s | Streamline",
  },
  description:
    "A modern, fully featured Astro template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.",
  keywords: [
    "Astro",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Template",
    "Shadcn/UI",
    "Web Development",
  ],
  authors: [{ name: "streamline Team" }],
  creator: "streamline Team",
  publisher: "streamline",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Streamline - Modern Astro Template",
    description:
      "A modern, fully featured Astro template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.",
    siteName: "streamline",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "streamline - Modern Astro Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamline - Modern Astro Template",
    description:
      "A modern, fully featured Astro template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.",
    images: ["/og-image.jpg"],
    creator: "@streamline",
  },
};
