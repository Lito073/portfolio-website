"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect voor service cards
      gsap.utils.toArray(".service-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: i % 2 === 0 ? -5 : 5,
        });
      });

      // Pricing reveal
      gsap.from(".pricing-box", {
        scrollTrigger: {
          trigger: ".pricing-box",
          start: "top bottom-=100",
          end: "top center",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
        rotationY: 15,
      });

      // Feature items stagger
      gsap.from(".feature-item", {
        scrollTrigger: {
          trigger: ".feature-item",
          start: "top bottom-=50",
        },
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
