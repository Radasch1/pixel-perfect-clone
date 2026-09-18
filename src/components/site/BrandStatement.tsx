import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./ui";

const features = [
  {
    title: "Realistic",
    body: "Graphics designed around believable lighting and visuals.",
  },
  {
    title: "Immersive",
    body: "Built to make long hauls feel more atmospheric and engaging.",
  },
  {
    title: "Authentic",
    body: "Focused on enhancing the American trucking experience rather than making the game look artificial.",
  },
];

export function BrandStatement() {
  return (
    <Section className="texture-grain">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            kicker="Simuverse"
            title="Built for the Road Ahead."
            subtitle="Simuverse creates realistic graphics presets for American Truck Simulator drivers who want a more immersive, authentic visual experience — believable light, honest color, and atmosphere that holds up mile after mile."
          />
        </Reveal>

        <div className="grid gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="border-l-4 border-primary bg-card p-6 shadow-card">
                <p className="font-display text-sm uppercase tracking-[0.24em] text-primary">
                  {f.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
