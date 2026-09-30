import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <IntroSection />
      </main>
    </>
  );
}
