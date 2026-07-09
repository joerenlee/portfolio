import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`text-[11px] tracking-[0.08em] text-ink-55 ${className}`}>
      {children}
    </div>
  );
}
