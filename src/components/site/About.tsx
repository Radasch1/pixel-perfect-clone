import { Reveal } from "./Reveal";
import { ScreenshotSlot } from "./ScreenshotSlot";
import { Section, SectionHeading } from "./ui";

const benefits = [
  {
    title: "Realistic Visuals",
    body: "Designed to improve the visual atmosphere of American Truck Simulator without making it feel artificial.",
    path: "M3 17h18M6 17V9l6-4 6 4v8",
  },
  {
    title: "Immersive Experience",
    body: "Designed for players who want their virtual trucking experience to feel more authentic.",
    path: "M12 3v18M3 12h18",
  },
  {
    title: "American Trucking Focus",
    body: "Built specifically around the visual character of American Truck Simulator.",
    path: "M3 16h11V7H3zM14 16h4l3-3v-3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
  },
  {
    title: "Attention to Detail",
    body: "Graphics presets focused on lighting, atmosphere, color and environmental realism.",
    path: "M12 4v4m0 8v4m8-8h-4M8 12H4m11.5-5.5-2.8 2.8m-3.4 3.4-2.8 2.8m9 0-2.8-2.8M9.3 9.3 6.5 6.5",
  },
];

export function About() {
  return (
    <>
      <Section id="about" className="bg-dusk">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              kicker="About"
              title="Made for the American Trucking Experience"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Simuverse is a destination for American Truck Simulator
                enthusiasts looking for a more immersive drive. The focus is
                simple: realistic graphics presets that make the world outside
                the windshield feel genuine.
              </p>
              <p>
                Every preset is tuned around light, color and atmosphere — the
                details that turn a long haul into something worth remembering,
                without pushing the game into something it isn't.
              </p>
            </div>
            {/* Southwestern horizon detail */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 60"
              className="mt-8 w-full max-w-sm text-primary/50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M0 48h120l28-26 22 26h40l30-18 26 18h134" />
              <path d="M0 56h400" strokeDasharray="18 14" />
            </svg>
          </Reveal>

          <Reveal delay={120}>
            <ScreenshotSlot
              ratio="4 / 3"
              label="About screenshot slot"
              hint="Optional — a favorite in-game shot fits well here."
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading kicker="Why Simuverse" title="Why Drivers Choose It" align="center" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 80}>
              <div className="h-full rounded-md border border-border bg-card p-6 shadow-card transition-colors duration-300 hover:border-primary/60">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d={b.path} />
                </svg>
                <h3 className="mt-4 text-base uppercase tracking-[0.1em]">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
