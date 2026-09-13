import { FACEBOOK_URL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ActionLink, FacebookIcon, PlaceholderTag, Section, SectionHeading } from "./ui";

function Stars() {
  return (
    <div className="flex gap-1 text-primary/40" aria-label="Star rating placeholder">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="m12 4 2.4 5 5.6.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.6-.8z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" className="bg-dusk">
      <Reveal>
        <SectionHeading
          kicker="Reviews"
          title="What Drivers Are Saying"
          subtitle="Reviews from the Simuverse Facebook page will appear here. The cards below are empty placeholders — no reviews have been added yet."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="h-full rounded-md border border-dashed border-border bg-card/60 p-6">
              <PlaceholderTag>Awaiting review</PlaceholderTag>
              <div className="mt-4">
                <Stars />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70">
                Review text from Facebook goes here.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full border border-dashed border-border" />
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
                    Reviewer name
                  </p>
                  <p className="text-xs text-muted-foreground/50">Facebook review</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <ActionLink href={FACEBOOK_URL} target="_blank" rel="noreferrer noopener" variant="outline">
          <FacebookIcon className="h-4 w-4" />
          Read More Reviews on Facebook
        </ActionLink>
      </div>
    </Section>
  );
}
