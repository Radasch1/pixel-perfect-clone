import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandStatement } from "@/components/site/BrandStatement";
import { Featured } from "@/components/site/Featured";
import { Gallery } from "@/components/site/Gallery";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Support } from "@/components/site/Support";
import { Footer } from "@/components/site/Footer";

const title = "Simuverse — Realistic ATS Graphics Presets";
const description =
  "Realistic graphics presets for American Truck Simulator, built for immersive, authentic trucking across day, night, weather and desert highway conditions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Featured />
        <BeforeAfter />
        <BrandStatement />
        <Gallery />
        <About />
        <Reviews />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
