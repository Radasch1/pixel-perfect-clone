import { Reveal } from "./Reveal";
import { ScreenshotSlot } from "./ScreenshotSlot";
import { Section, SectionHeading } from "./ui";

const shots = [
  { label: "Sunset", ratio: "16 / 10", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Day", ratio: "4 / 3", span: "" },
  { label: "Night", ratio: "4 / 3", span: "" },
  { label: "Weather", ratio: "16 / 9", span: "sm:col-span-2" },
  { label: "Highway", ratio: "3 / 4", span: "sm:row-span-2" },
  { label: "City", ratio: "4 / 3", span: "" },
  { label: "Desert", ratio: "4 / 3", span: "" },
];

export function Gallery() {
  return (
    <Section className="bg-dusk">
      <Reveal>
        <SectionHeading
          kicker="Gallery"
          title="See the Difference"
          subtitle="Real in-game results from American Truck Simulator, captured across every condition on the road."
        />
      </Reveal>

      <div className="mt-12 grid auto-rows-[minmax(0,auto)] gap-3 sm:grid-cols-3 sm:gap-5">
        {shots.map((s, i) => (
          <Reveal key={s.label} delay={(i % 3) * 80} className={`min-w-0 ${s.span}`}>
            <figure className="group h-full overflow-hidden border-b-2 border-border pb-3">
              <ScreenshotSlot
                ratio={s.ratio}
                zoomOnHover
                label={s.label}
                className="h-full transition-colors duration-300 group-hover:border-primary/60"
              />
              <figcaption className="mt-2 font-display text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                {s.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
