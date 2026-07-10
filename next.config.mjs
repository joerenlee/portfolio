/** @type {import('next').NextConfig} */

// The site is a GitHub Pages *project* site, served from https://joerenlee.github.io/portfolio/.
// In production every asset must be prefixed with this base path; in dev it's the root.
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages can't run the image optimizer
  },
  basePath,
  // Exposed to the client so plain <img>/<a> asset URLs (which Next does NOT
  // auto-prefix, unlike _next assets) can be base-path-aware.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
