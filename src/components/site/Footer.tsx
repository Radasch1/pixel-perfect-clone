import { FACEBOOK_URL, NAV_LINKS, PAYPAL_URL } from "@/lib/site";
import { ActionLink, FacebookIcon } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-dusk px-5 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg uppercase tracking-[0.3em]">Simuverse</p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Realistic graphics for the American Truck Simulator experience.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <p className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-primary">
              Navigate
            </p>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-primary">
              Connect
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Simuverse on Facebook"
              className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <div className="mt-5">
              <ActionLink
                href={PAYPAL_URL}
                target="_blank"
                rel="noreferrer noopener"
                variant="quiet"
              >
                Support Simuverse
              </ActionLink>
            </div>
          </div>
        </div>

        <div className="hairline-rule mt-12" />
        <p className="mt-6 text-xs text-muted-foreground/70">
          © 2026 Simuverse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
