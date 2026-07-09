import pkg from 'next';
const { NextConfig } = pkg;

const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML
  images: {
    unoptimized: true, // Required because GitHub Pages cannot optimize images on the fly
  },
  // Uncomment the line below if your site is NOT a custom domain (e.g., ://github.com)
  // basePath: '/my-repo', 
};

export default nextConfig;