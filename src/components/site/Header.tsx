import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site";
import { ActionLink } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/92 backdrop-blur"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#home"
          className="border-l-4 border-primary pl-3 font-display text-2xl uppercase tracking-[0.08em] text-foreground"
        >
          Simuverse
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-transparent font-display text-sm uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <ActionLink href="#graphics" className="ml-2">
            Explore Graphics
          </ActionLink>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/98 backdrop-blur md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-display text-sm uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <ActionLink href="#graphics" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Explore Graphics
            </ActionLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
