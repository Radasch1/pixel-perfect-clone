import { FACEBOOK_URL, PAYPAL_URL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ActionLink, FacebookIcon, PlaceholderTag, Section, SectionHeading } from "./ui";

export function Support() {
  return (
    <Section id="support">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            kicker="Support"
            title="Need Help?"
            subtitle="Have a question about Simuverse graphics, presets, installation, or your purchase? Get in touch."
          />

          <div className="mt-8 space-y-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <FacebookIcon className="h-5 w-5 text-primary" />
              <span>
                <span className="block font-display text-xs uppercase tracking-[0.2em]">
                  Facebook
                </span>
                <span className="block text-sm text-muted-foreground">
                  Fastest way to reach Simuverse
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-md border border-dashed border-border p-5">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>
                <span className="block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block">
                  <PlaceholderTag>Add email address</PlaceholderTag>
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-md border border-dashed border-border p-5">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M8 14c-1.5 1-3 1.5-4 1.5L2 18c2 1.5 5 2.5 8 2.5s6-1 8-2.5l-2-2.5c-1 0-2.5-.5-4-1.5" />
                <path d="M7 9.5h.01M17 9.5h.01M6 5h12l2 8H4z" />
              </svg>
              <span>
                <span className="block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Discord
                </span>
                <span className="mt-1 block">
                  <PlaceholderTag>Add Discord link</PlaceholderTag>
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative flex h-full flex-col justify-center overflow-hidden border-l-[6px] border-primary bg-card p-8 shadow-card sm:p-10">
            <div className="absolute right-0 top-0 h-full w-1/3 skew-x-[-18deg] bg-primary/10" />
            <div className="relative">
            <p className="text-kicker">Support Simuverse</p>
            <h3 className="mt-3 text-2xl uppercase leading-tight sm:text-3xl">
              Keep the presets rolling
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Help support the continued development of realistic graphics and
              visual enhancements for American Truck Simulator.
            </p>
            <ActionLink
              href={PAYPAL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 w-full sm:w-auto sm:self-start"
            >
              Support Simuverse
            </ActionLink>
            <p className="mt-4 text-xs text-muted-foreground/70">
              Secure payment handled through PayPal.
            </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
