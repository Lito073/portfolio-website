"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "⚡",
    title: "Live in 2 dagen",
    text: "Geen weken wachten. Jouw website staat binnen 48 uur online."
  },
  {
    icon: "💰",
    title: "€200 all-in",
    text: "Geen verborgen kosten, geen maandelijkse abonnementen. Eenmalig betalen."
  },
  {
    icon: "🎯",
    title: "100% from scratch",
    text: "Geen templates. Alles gebouwd met Next.js, speciaal voor jou."
  }
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Wat je <span className="text-gradient">krijgt</span> bij Lito's Lab
          </h2>
          <p className="text-xl text-gray-300">
            Eerlijk, snel en betaalbaar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/25 border border-white/50 backdrop-blur-sm text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block p-6 rounded-2xl bg-purple-500/20 border border-purple-500/40">
            <p className="text-lg text-gray-200">
              <span className="text-white font-bold">Nieuw gestart?</span> Help me mijn portfolio opbouwen.<br/>
              Jij krijgt een top website voor €200, ik krijg een mooi referentieproject.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
