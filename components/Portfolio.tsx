"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Schildersbedrijf Jansen",
    category: "Lokale dienstverlening",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    color: "from-blue-600/20 to-cyan-600/20"
  },
  {
    name: "Coaching Practice Lisa",
    category: "Coaching & Training",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    color: "from-purple-600/20 to-pink-600/20"
  },
  {
    name: "Installatiebedrijf Bakker",
    category: "Technische diensten",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    color: "from-orange-600/20 to-red-600/20"
  }
];

export function Portfolio() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Recent <span className="text-gradient">gebouwd</span>
          </h2>
          <p className="text-xl text-gray-400">
            Echte websites voor echte ondernemers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-purple-400 mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-purple-400 transition-colors">
                    <span className="text-sm">Bekijk project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            <span className="text-white font-semibold">Jouw website kan de volgende zijn</span> – Start vandaag nog
          </p>
        </div>
      </div>
    </section>
  );
}
