import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
}) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 sm:py-20", className)}>
      <div
        className={cn(
          "mx-auto",
          width === "narrow" && "max-w-3xl",
          width === "default" && "max-w-6xl",
          width === "wide" && "max-w-7xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-[0.98rem] text-muted-foreground">{description}</p> : null}
    </div>
  );
}
