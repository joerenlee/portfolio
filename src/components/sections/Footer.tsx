export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-4 border-t border-line-15 px-5 py-8 sm:px-7">
      <div className="text-[11px] text-ink-45">© 2026 Joeren Lee</div>
      <a
        href="#top"
        className="text-[11px] text-ink-55 transition-colors duration-200 hover:text-ink"
      >
        back to top ↑
      </a>
    </footer>
  );
}
