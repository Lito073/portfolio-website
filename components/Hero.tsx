"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D").then(mod => ({ default: mod.Scene3DCanvas })), {
  ssr: false,
  loading: () => null
});

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <Scene3D />
        </div>
      )}

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-blue-900/40 backdrop-blur-sm pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">3 van 10 plekken al bezet</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight hero-text">
            <span className="block">Van idee naar live website</span>
            <span className="block text-gradient glow">
              <TypeAnimation
                sequence={[
                  'in 2 dagen',
                  2000,
                  'zonder gedoe',
                  2000,
                  'voor €200',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed hero-text">
            Geen Fiverr-troep. Geen Wix-templates. Geen bureau-prijzen.
            <br />
            <span className="text-white font-bold">Gewoon een professionele website die werkt. €200 all-in, klaar in 2 dagen.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 hero-text">
            <MagneticButton href="#contact">
              <span className="flex items-center gap-2">
                Claim mijn €200 website
                <ArrowRight className="w-5 h-5" />
              </span>
            </MagneticButton>
            
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-white/30 hover:border-white/50 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-semibold"
            >
              Zie voorbeelden
            </a>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </div>
    </section>
  );
}
