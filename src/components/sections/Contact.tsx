import SectionLabel from "@/components/SectionLabel";
import Cursor from "@/components/Cursor";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-7">
      <SectionLabel className="mb-5">// CONTACT</SectionLabel>

      <h2 className="mb-4 text-[clamp(24px,4.5vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
        Let&rsquo;s build something.
        <Cursor />
      </h2>

      <p className="max-w-[52ch] text-[14px] leading-relaxed text-ink-70">
        Open to Full Stack and AI Engineering roles, freelance projects, or just
        a good conversation about building things.
      </p>

      <div className="mt-8">
        <a
          href="mailto:joerenlee1@gmail.com"
          className="inline-block bg-ink px-5 py-3 text-xs text-paper transition-[opacity,transform] duration-150 hover:opacity-80 active:translate-y-px active:opacity-100"
        >
          send me an email →
        </a>
      </div>
    </section>
  );
}
