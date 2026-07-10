import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen w-full bg-paper text-ink">
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
