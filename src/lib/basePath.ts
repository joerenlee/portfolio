// Base path the site is served from (e.g. "/portfolio" on GitHub Pages, "" locally).
// Injected at build time via next.config.mjs `env`.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a root-absolute public asset path with the base path.
 * Use for plain <img>/<a> URLs that Next does NOT auto-prefix (unlike _next assets).
 * e.g. asset("/projects/x.jpg") -> "/portfolio/projects/x.jpg" in production.
 */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
