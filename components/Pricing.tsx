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
                  <span className="text-2xl text-gray-400 line-through">€500</span>
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
                  Klaar in 24-48 uur
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

        {/* Comparison Table */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Waarom Lito's Lab?</h3>
          <div className="overflow-x-auto">
            <div className="p-4 md:p-8 rounded-2xl bg-white/20 border border-white/40 backdrop-blur-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="text-left p-4 text-gray-300 font-semibold"></th>
                  <th className="p-4 text-center">
                    <div className="text-white font-bold text-lg">Lito's Lab</div>
                    <div className="text-purple-400 text-sm">€200</div>
                  </th>
                  <th className="p-4 text-center text-gray-300">Webbureau<br/><span className="text-sm">€2500+</span></th>
                  <th className="p-4 text-center text-gray-300">Fiverr<br/><span className="text-sm">€50-150</span></th>
                  <th className="p-4 text-center text-gray-300">Wix/Squarespace<br/><span className="text-sm">€15/mnd</span></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/20">
                  <td className="p-4 text-gray-200 font-medium">Levertijd</td>
                  <td className="p-4 text-center text-green-400 font-semibold">48 uur</td>
                  <td className="p-4 text-center text-gray-500">4-8 weken</td>
                  <td className="p-4 text-center text-gray-500">1-2 weken</td>
                  <td className="p-4 text-center text-gray-500">Zelf doen</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="p-4 text-gray-200 font-medium">Kwaliteit</td>
                  <td className="p-4 text-center text-green-400">✓ Professioneel</td>
                  <td className="p-4 text-center text-green-400">✓ Professioneel</td>
                  <td className="p-4 text-center text-red-400">✗ Wisselend</td>
                  <td className="p-4 text-center text-yellow-400">~ Template</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="p-4 text-gray-200 font-medium">Maandkosten</td>
                  <td className="p-4 text-center text-green-400 font-semibold">€0</td>
                  <td className="p-4 text-center text-gray-500">€50-200</td>
                  <td className="p-4 text-center text-gray-500">€0</td>
                  <td className="p-4 text-center text-gray-500">€15-40</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="p-4 text-gray-200 font-medium">Support</td>
                  <td className="p-4 text-center text-green-400">✓ 2 weken gratis</td>
                  <td className="p-4 text-center text-green-400">✓ Betaald</td>
                  <td className="p-4 text-center text-red-400">✗ Minimaal</td>
                  <td className="p-4 text-center text-yellow-400">~ Forum</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-200 font-medium">Eigendom code</td>
                  <td className="p-4 text-center text-green-400">✓ 100% van jou</td>
                  <td className="p-4 text-center text-green-400">✓ Meestal wel</td>
                  <td className="p-4 text-center text-yellow-400">~ Soms</td>
                  <td className="p-4 text-center text-red-400">✗ Vendor lock-in</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
