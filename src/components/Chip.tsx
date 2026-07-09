import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  size?: "sm" | "xs";
  dashed?: boolean;
}

export default function Chip({ children, size = "sm", dashed = false }: ChipProps) {
  const sizing =
    size === "xs" ? "px-2 py-[3px] text-[10px]" : "px-2.5 py-[5px] text-[11px]";

  return (
    <span
      className={`inline-flex items-center rounded-[4px] border leading-none transition-colors duration-200 ${sizing} ${
        dashed
          ? "border-dashed border-line-30 text-ink-55"
          : "border-line-18 bg-paper text-ink-70"
      } hover:border-ink hover:text-ink`}
    >
      {children}
    </span>
  );
}
