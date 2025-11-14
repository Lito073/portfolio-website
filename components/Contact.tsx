"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hoi! Ik ben ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/31612345678?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Laten we <span className="text-gradient">starten</span>
          </h2>
          <p className="text-xl text-gray-400">
            Stuur een bericht of app direct via WhatsApp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl blur-3xl" />
            <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Naam</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Jouw naam"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="jouw@email.nl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bericht</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Vertel over je project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Verstuur via WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-emerald-600/30 rounded-2xl blur-3xl group-hover:blur-3xl transition-all duration-300" />
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
              >
                <MessageCircle className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-400 mb-4">Direct antwoord binnen 1 uur</p>
                <span className="text-green-400 font-semibold">Start chat →</span>
              </a>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl blur-3xl group-hover:blur-3xl transition-all duration-300" />
              <a
                href="mailto:lito@litoslab.nl"
                className="relative block p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              >
                <Mail className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <p className="text-gray-400 mb-4">Antwoord binnen 24 uur</p>
                <span className="text-blue-400 font-semibold">lito@litoslab.nl</span>
              </a>
            </div>

            <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-sm text-gray-300">
                <span className="text-purple-400 font-semibold">Tip:</span> Vermeld in je bericht wat voor bedrijf je hebt en wanneer je live wilt gaan. Dan kan ik direct een planning maken!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
