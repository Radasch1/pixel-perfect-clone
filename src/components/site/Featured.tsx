import { Reveal } from "./Reveal";
import { ScreenshotSlot } from "./ScreenshotSlot";
import { ActionLink, Section, SectionHeading } from "./ui";

const presets = [
  {
    name: "Desert Dusk",
    tag: "Sunset",
    body: "Warm low-angle light, softened haze and honest shadow falloff for evening hauls.",
  },
  {
    name: "Open Highway",
    tag: "Daytime",
    body: "Clean daytime clarity with balanced contrast and natural sky tones.",
  },
  {
    name: "Night Run",
    tag: "Night",
    body: "Readable night driving with controlled headlight bloom and deeper blacks.",
  },
  {
    name: "Storm Front",
    tag: "Weather",
    body: "Heavier skies, wet-road reflection and a moodier atmospheric profile.",
  },
  {
    name: "Interstate Chrome",
    tag: "Highway",
    body: "Crisp materials and truer metal response for long interstate stretches.",
  },
  {
    name: "City Limits",
    tag: "City",
    body: "Tuned for dense urban lighting without washing out signage and surfaces.",
  },
];

export function Featured() {
  return (
    <Section id="graphics">
      <Reveal>
        <SectionHeading
          kicker="Presets"
          title="Featured Graphics"
          subtitle="Bring your next haul to life."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
        {presets.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 90} as="article" className={i === 0 || i === 5 ? "lg:col-span-8" : "lg:col-span-4"}>
             <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-border border-l-4 bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-l-primary hover:shadow-lift">
              <ScreenshotSlot
                ratio="16 / 10"
                zoomOnHover
                label="Preset screenshot"
                className="rounded-none border-0 border-b border-border"
              />
              <div className="flex flex-1 flex-col p-5">
                <span className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-xl uppercase">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <ActionLink
                  href="#support"
                  variant="quiet"
                  className="mt-5 self-start"
                >
                  View Details
                </ActionLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
