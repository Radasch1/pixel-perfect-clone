import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-display uppercase tracking-[0.16em] text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-sunset text-primary-foreground px-6 py-3 shadow-card hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-border bg-transparent text-foreground px-6 py-3 hover:border-primary hover:text-primary",
  ghost: "text-muted-foreground px-3 py-2 hover:text-primary",
  quiet:
    "border border-border bg-secondary text-secondary-foreground px-4 py-2 hover:border-primary hover:text-primary",
} as const;

export function ActionLink({
  variant = "primary",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
}) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {kicker ? <p className="text-kicker">{kicker}</p> : null}
      <h2 className="mt-3 text-3xl uppercase leading-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function PlaceholderTag({ children = "Placeholder" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-dashed border-primary/60 px-2 py-0.5 font-display text-[0.6rem] uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.93 8.44-9.94Z" />
    </svg>
  );
}
