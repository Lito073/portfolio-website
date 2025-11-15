"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Jij groeit, ik groei",
    forYou: "Meer klanten, meer omzet door professionele online aanwezigheid",
    forMe: "Tevreden klanten die mij doorverwijzen naar hun netwerk",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: Clock,
    title: "Snelheid = Kansen",
    forYou: "Live in 2 dagen, geen maanden wachten op een bureau",
    forMe: "Efficiënt werken betekent meer ondernemers helpen",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Zap,
    title: "Kwaliteit zonder gedoe",
    forYou: "Premium website voor €200, geen verborgen kosten of upsells",
    forMe: "Blije klanten die terugkomen voor uitbreidingen",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Heart,
    title: "Langetermijn partner",
    forYou: "Gratis support, updates en advies wanneer je groeit",
    forMe: "Portfolio opbouwen met échte succesverhalen",
    color: "from-orange-600 to-red-600"
  }
];

export function WhyUs() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6">
            <span className="text-sm font-semibold text-purple-400">Win-Win Samenwerking</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Waarom dit <span className="text-gradient">voor ons beiden werkt</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparant en eerlijk. Dit is waarom samenwerken met Lito's Lab een slimme keuze is.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300`} />
                <div className="relative p-8 rounded-2xl border border-white/50 bg-white/25 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-white">{benefit.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-semibold text-green-400">Voor jou</span>
                      </div>
                      <p className="text-gray-200 pl-4">{benefit.forYou}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-sm font-semibold text-purple-400">Voor mij</span>
                      </div>
                      <p className="text-gray-200 pl-4">{benefit.forMe}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl border border-purple-500/50 bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm">
            <p className="text-xl md:text-2xl font-bold mb-2">
              Simpel gezegd: <span className="text-gradient">Jouw succes = Mijn succes</span>
            </p>
            <p className="text-gray-300">
              Daarom werk ik keihard om jou de beste website te geven voor €200
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
