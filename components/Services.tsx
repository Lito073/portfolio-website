"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Palette, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Razendsnel",
    description: "Jouw website live in 24-48 uur. Geen weken wachten.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Perfect op elke telefoon, tablet en desktop.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Strak, professioneel en helemaal van deze tijd.",
  },
];

const included = [
  "Homepage met impact",
  "Diensten/Overzichtpagina",
  "Contactpagina met formulier",
  "Mobile-friendly responsive design",
  "1 correctieronde inbegrepen",
  "SEO-geoptimaliseerd",
  "Snelle laadtijden",
  "Geen maandelijkse kosten",
];

export function Services() {
  return (
    <section id="diensten" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Wat je <span className="text-gradient">krijgt</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop met geld verbranden aan dure webbureau's.<br/>
            <span className="text-white font-bold">Krijg meer voor minder.</span>
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group service-card"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-2xl blur-3xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm hover:border-purple-500/70 transition-all duration-500 hover:bg-white/25">
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included features */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-3xl blur-3xl" />
          <div className="relative p-12 rounded-3xl bg-white/15 border border-white/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Inbegrepen in je pakket</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {included.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 feature-item"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
