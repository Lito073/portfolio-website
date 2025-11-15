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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-8">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 font-semibold">3 van 10 plekken al bezet</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-gradient">€200</span>
                </div>
                <p className="text-xl text-gray-200 font-semibold">Eenmalig. Geen abonnement.</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="space-y-3 text-gray-200">
                <p className="text-lg">
                  <span className="text-white font-bold">Complete professionele website</span> voor een fractie van de normale prijs.
                </p>
                <p className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Klaar in 2 dagen
                </p>
              </div>

              <div className="pt-6">
                <MagneticButton href="#contact">
                  <span>Claim jouw plek nu</span>
                </MagneticButton>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30">
                <p className="text-sm text-green-200 font-bold text-center">
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

        {/* Why Choose Us */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Waarom Lito's Lab?</h3>
          <div className="p-6 md:p-8 rounded-2xl bg-white/20 border border-white/40 backdrop-blur-sm space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-bold">Live in 2 dagen</p>
                <p className="text-gray-300 text-sm">Geen weken wachten zoals bij bureaus</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-bold">€200 eenmalig, €0 per maand</p>
                <p className="text-gray-300 text-sm">Geen abonnementen zoals Wix (€15-40/mnd)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-bold">Professionele kwaliteit</p>
                <p className="text-gray-300 text-sm">Geen Fiverr-troep of Wix-templates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-bold">100% eigendom van jouw code</p>
                <p className="text-gray-300 text-sm">Geen vendor lock-in, alles van jou</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <div>
                <p className="text-white font-bold">2 weken gratis support</p>
                <p className="text-gray-300 text-sm">Direct via WhatsApp, geen forums</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
