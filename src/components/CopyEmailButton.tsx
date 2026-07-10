"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — fail silently.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address to clipboard"
      className="inline-block cursor-pointer border border-ink px-5 py-3 text-xs transition-[background-color,color,transform] duration-150 hover:bg-ink hover:text-paper active:translate-y-px"
    >
      {copied ? "copied ✓" : "copy email"}
    </button>
  );
}
