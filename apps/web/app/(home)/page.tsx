import { SiteHeader } from "./site-header";
import { Hero } from "./hero";
import { LogoCloud } from "./logo-cloud";
import { Features } from "./features";
import { HowItWorks } from "./how-it-works";
import { UseCases } from "./use-cases";
import { Stats } from "./stats";
import { Cta } from "./cta";
import { SiteFooter } from "./site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <UseCases />
        <Stats />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
