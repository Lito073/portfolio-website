import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Testimonials />
      <ScrollAnimations>
        <Services />
        <div id="portfolio">
          <Portfolio />
        </div>
        <Pricing />
        <FAQ />
        <Contact />
      </ScrollAnimations>
      <Footer />
    </main>
  );
}
