import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const title = "Joeren Lee — Full Stack Developer / AI Engineer";
const description =
  "Joeren Lee — Full Stack Developer / AI Engineer. 4 years shipping production web applications, end to end: frontend, backend, database, and deployment.";

export const metadata: Metadata = {
  metadataBase: new URL("https://joerenlee.github.io"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "joeren.lee",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Applied before first paint so a dark-mode visitor never sees a light flash.
const themeScript = `(function(){try{var m=localStorage.getItem('jl-theme')||'system';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plex.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-mono">{children}</body>
    </html>
  );
}
