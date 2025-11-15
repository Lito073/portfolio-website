"use client";

import { motion } from "framer-motion";

const projectTypes = [
  {
    name: "Schildersbedrijf",
    category: "Lokale dienstverlening",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    color: "from-blue-600/20 to-cyan-600/20"
  },
  {
    name: "Coach of Trainer",
    category: "Coaching & Training",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    color: "from-purple-600/20 to-pink-600/20"
  },
  {
    name: "Installatiebedrijf",
    category: "Technische diensten",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    color: "from-orange-600/20 to-red-600/20"
  },
  {
    name: "Yoga of Fitness Studio",
    category: "Wellness & Sport",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    color: "from-green-600/20 to-emerald-600/20"
  },
  {
    name: "Kapsalon of Schoonheidssalon",
    category: "Beauty & Verzorging",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    color: "from-pink-600/20 to-rose-600/20"
  },
  {
    name: "Tuinbedrijf",
    category: "Tuin & Buitenruimte",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
    color: "from-lime-600/20 to-green-600/20"
  }
];

export function Portfolio() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Perfect voor <span className="text-gradient">jouw bedrijf</span>
          </h2>
          <p className="text-xl text-gray-300">
            Voorbeelden van wat ik voor jou kan bouwen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projectTypes.map((project, i) => (
            <div
              key={i}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              <div className="relative rounded-2xl overflow-hidden border border-white/50 bg-white/25 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-purple-400 mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-3 text-white">{project.name}</h3>
                  <p className="text-gray-300 text-sm">Professionele website op maat voor jouw branche</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 rounded-2xl border border-purple-500/50 bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm">
            <p className="text-xl font-bold mb-2 text-white">
              Zie jij jouw bedrijf hier staan?
            </p>
            <p className="text-gray-300">Laten we samen jouw website bouwen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
