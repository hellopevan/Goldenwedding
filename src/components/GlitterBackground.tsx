import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitterParticle {
  id: number;
  size: number;
  left: string;
  top: string;
  opacity: number;
  duration: number;
  delay: number;
  hue: number;
}

export function GlitterBackground() {
  const [particles, setParticles] = useState<GlitterParticle[]>([]);

  useEffect(() => {
    // Create initial particles
    const newParticles = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      size: Math.random() * 1.6 + 0.7,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: 0,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 6,
      hue: Math.random() < 0.7 ? 45 : 210,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#070708] to-[#050506]" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            background:
              particle.hue === 45
                ? "rgba(201,169,97,0.95)"
                : "rgba(210,232,255,0.95)",
            boxShadow:
              particle.hue === 45
                ? "0 0 10px 2px rgba(201,169,97,0.45)"
                : "0 0 12px 2px rgba(140,200,255,0.35)",
          }}
          animate={{
            opacity: [0.0, 0.8, 0.15, 0.9, 0.0],
            scale: [1, 1.2, 1, 1.25, 1],
            x: [0, (Math.random() - 0.5) * 16],
            y: [0, (Math.random() - 0.5) * 14],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
