"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Wat als ik niet tevreden ben?",
    a: "100% geld-terug-garantie. Niet tevreden? Volledige refund, no questions asked. Jouw tevredenheid is mijn prioriteit."
  },
  {
    q: "Krijg ik de broncode van mijn website?",
    a: "Ja, je krijgt volledige toegang tot alle bestanden. De website is 100% van jou. Geen vendor lock-in."
  },
  {
    q: "Kan ik later zelf aanpassingen maken?",
    a: "Absoluut! Ik lever een gebruiksvriendelijke website waar je zelf teksten en afbeeldingen kunt aanpassen. Plus een korte instructievideo."
  },
  {
    q: "Wat gebeurt er na 1 jaar hosting?",
    a: "Hosting kost €25/jaar. Je krijgt 1 maand van tevoren een herinnering. Wil je zelf hosten? Kan ook, je hebt alle bestanden."
  },
  {
    q: "Hoe zit het met SEO?",
    a: "Basis SEO is inbegrepen: snelle laadtijd, mobile-friendly, goede structuur, meta tags. Voor geavanceerde SEO kan ik doorverwijzen."
  },
  {
    q: "Krijg ik training om de website te gebruiken?",
    a: "Ja! Je krijgt een korte instructievideo + schriftelijke handleiding. Plus 2 weken gratis support via WhatsApp."
  },
  {
    q: "Wat als mijn site crasht of gehackt wordt?",
    a: "Ik maak dagelijks backups. Bij problemen herstel ik je site binnen 24 uur. Gratis in het eerste jaar."
  },
  {
    q: "Waarom zo goedkoop? Wat is de catch?",
    a: "Geen catch. Ik bouw alles from scratch met Next.js. Geen overhead van een groot bureau, geen dure kantoorpanden. Gewoon eerlijke prijzen."
  },
  {
    q: "Hoe snel kan ik starten?",
    a: "Vandaag nog! Stuur me je info via WhatsApp, dan start ik morgen. Website is binnen 48 uur live."
  },
  {
    q: "Wat heb je van mij nodig?",
    a: "Logo, teksten, foto's, kleurvoorkeur. Heb je dit niet? Ik help je ermee. Stockfoto's en teksten kan ik ook verzorgen."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Veelgestelde <span className="text-gradient">vragen</span>
          </h2>
          <p className="text-xl text-gray-300">
            Alles wat je moet weten voordat je start
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/20 border border-white/40 rounded-xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-lg text-white">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-200 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300">
            Nog vragen? <a href="#contact" className="text-purple-300 hover:text-purple-200 font-bold underline">Stuur me een bericht</a>
          </p>
        </div>
      </div>
    </section>
  );
}
