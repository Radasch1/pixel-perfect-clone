import { useEffect, useState } from "react";
import { ScreenshotSlot } from "./ScreenshotSlot";
import { ActionLink } from "./ui";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.12, 60));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-dusk" />
      <div className="texture-grain-layer pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <p className="text-kicker">American Truck Simulator · Graphics Presets</p>
        <h1 className="mt-4 max-w-3xl text-4xl uppercase leading-[1.05] sm:text-6xl">
          Realistic Graphics.
          <span className="block text-primary">Authentic Trucking.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Take American Truck Simulator to the next level with realistic
          graphics presets built for immersive, authentic trucking.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ActionLink href="#graphics" className="w-full sm:w-auto">
            Explore Graphics
          </ActionLink>
          <ActionLink href="#about" variant="outline" className="w-full sm:w-auto">
            Learn About Simuverse
          </ActionLink>
        </div>

        <div className="relative mt-12" style={{ transform: `translateY(-${offset}px)` }}>
          <ScreenshotSlot
            ratio="21 / 9"
            label="Hero screenshot slot"
            hint="Drop a wide ATS screenshot here — desert highway at sunset works best."
            className="shadow-lift"
          />
          <div className="pointer-events-none absolute inset-0 rounded-md bg-scrim opacity-40" />
        </div>
      </div>

      <div className="hairline-rule mx-auto w-full max-w-6xl" />
    </section>
  );
}
