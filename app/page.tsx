import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ScrollAnimations>
        <Services />
        <Pricing />
        <Contact />
      </ScrollAnimations>
      <Footer />
    </main>
  );
}
