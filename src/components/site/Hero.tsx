import { useEffect, useState } from "react";
import { ActionLink } from "./ui";
import heroImage from "@/assets/mojave-truck-hero.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.12, 60));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[82vh] items-end overflow-hidden border-b-[6px] border-leather pt-28">
      <img src={heroImage} alt="Semi truck crossing the Mojave desert at dusk" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-scrim" />
      <div className="texture-grain-layer pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 text-center sm:px-8 sm:pb-28">
        <p className="mx-auto inline-block border border-primary bg-background/80 px-4 py-1 text-kicker shadow-card">American Truck Simulator · Graphics Presets</p>
        <h1 className="mt-6 text-[clamp(5rem,15vw,11rem)] uppercase leading-[0.78] text-foreground [text-shadow:0_10px_30px_var(--background)]">
          Simuverse
          <span className="mt-5 block text-[clamp(2rem,5vw,4.5rem)] leading-none text-primary">Realistic Graphics. Authentic Trucking.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          Take American Truck Simulator to the next level with realistic
          graphics presets built for immersive, authentic trucking.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ActionLink href="#graphics" className="w-full sm:w-auto">
            Explore Graphics
          </ActionLink>
          <ActionLink href="#about" variant="outline" className="w-full sm:w-auto">
            Learn About Simuverse
          </ActionLink>
        </div>

        <div className="pointer-events-none absolute inset-x-5 bottom-9 h-1 road-rule opacity-40 sm:inset-x-8" style={{ transform: `translateY(-${offset * 0.15}px)` }} />
      </div>
    </section>
  );
}
