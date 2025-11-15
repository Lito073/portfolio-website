"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Pricing() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative pricing-box">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-3xl" />
          
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 backdrop-blur-sm">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-8"
            >
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 font-semibold">3 van 10 plekken al bezet</span>
            </motion.div>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-gradient">€200</span>
                  <span className="text-2xl text-gray-400 line-through">€500</span>
                </div>
                <p className="text-xl text-gray-300">Eenmalig. Geen abonnement.</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  <span className="text-white font-semibold">Complete professionele website</span> voor een fractie van de normale prijs.
                </p>
                <p className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Klaar in 24-48 uur
                </p>
              </div>

              <div className="pt-6">
                <MagneticButton href="#contact">
                  <span>Claim jouw plek nu</span>
                </MagneticButton>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-green-300 font-semibold text-center">
                  ✓ 100% tevredenheidsgarantie<br/>
                  ✓ Gratis correctieronde inbegrepen
                </p>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                Optioneel: Domeinnaam + 1 jaar hosting voor €25 extra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
