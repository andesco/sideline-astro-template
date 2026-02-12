const SAND_PATHS = new Set([
  "/",
  "/faq",
  "/faq/",
  "/signup",
  "/signup/",
  "/login",
  "/login/",
]);

export const normalizePathname = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
};

export const getHeaderBackgroundClass = (pathname: string) => {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === "/about") return "bg-mint-50";
  if (SAND_PATHS.has(pathname) || SAND_PATHS.has(normalizedPath)) {
    return "bg-sand-100";
  }

  return "bg-background";
};

