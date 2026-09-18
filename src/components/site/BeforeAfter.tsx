import { useCallback, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { ScreenshotSlot } from "./ScreenshotSlot";
import { Section, SectionHeading } from "./ui";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  return (
    <Section>
      <Reveal>
        <SectionHeading
          kicker="Comparison"
          title="Experience the Difference"
          subtitle="Drag the handle to compare default American Truck Simulator visuals with a Simuverse preset."
        />
      </Reveal>

      <Reveal delay={100}>
        <div
          ref={frame}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && move(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          className="relative mt-12 select-none overflow-hidden rounded-sm border-4 border-leather shadow-lift"
          style={{ touchAction: "pan-y" }}
        >
          <ScreenshotSlot
            ratio="16 / 9"
            label="After — Simuverse Graphics"
            hint="Insert the preset screenshot here."
            className="rounded-none border-0"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <ScreenshotSlot
              ratio="16 / 9"
              label="Before — Default ATS"
              hint="Insert the vanilla screenshot here."
              className="h-full rounded-none border-0"
            />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-primary"
            style={{ left: `${pos}%` }}
          >
            <div className="pointer-events-auto absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background shadow-card">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m10 7-5 5 5 5M14 7l5 5-5 5" />
              </svg>
            </div>
          </div>

          <span className="absolute left-3 top-3 rounded-sm border border-border bg-background/80 px-2 py-1 font-display text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            Default ATS
          </span>
          <span className="absolute right-3 top-3 rounded-sm border border-primary/60 bg-background/80 px-2 py-1 font-display text-[0.6rem] uppercase tracking-[0.2em] text-primary">
            Simuverse
          </span>
        </div>
      </Reveal>

      <label className="mt-5 block">
        <span className="sr-only">Comparison position</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-[var(--primary)]"
        />
      </label>
    </Section>
  );
}
