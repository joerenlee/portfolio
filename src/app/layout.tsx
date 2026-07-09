import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joeren Lee — Full Stack Developer / AI Engineer",
  description:
    "Joeren Lee — Full Stack Developer / AI Engineer. 4 years shipping production web applications, end to end: frontend, backend, database, and deployment.",
};

// Applied before first paint so a dark-mode visitor never sees a light flash.
const themeScript = `(function(){try{var m=localStorage.getItem('jl-theme')||'system';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.style.filter=d?'invert(1)':'';}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plex.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-mono">{children}</body>
    </html>
  );
}
