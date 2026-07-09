import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-paper text-ink">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
