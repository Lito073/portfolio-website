"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mark van der Berg",
    company: "Van der Berg Schilderwerken",
    text: "Binnen 2 dagen een professionele website. Precies wat ik nodig had. Geen gedoe, gewoon resultaat.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Lisa Janssen",
    company: "Janssen Coaching",
    text: "Eindelijk een website waar ik trots op ben. Voor €200 had ik dit nooit verwacht. Echt top!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=45"
  },
  {
    name: "Tom Bakker",
    company: "Bakker Installaties",
    text: "Geen gedoe met dure bureaus meer. Lito regelt het gewoon. Snelle communicatie, mooi resultaat.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=33"
  }
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Wat <span className="text-gradient">klanten</span> zeggen
          </h2>
          <p className="text-xl text-gray-300">
            100+ tevreden ondernemers gingen je voor
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="text-green-400 font-semibold">★ 4.9/5</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-200">Gebaseerd op 100+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
