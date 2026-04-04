"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Settings, Cog } from "lucide-react";
import { useEffect, useState } from "react";

export default function ClockworkBackground() {
  const hoursMotion = useMotionValue(0);
  const minutesMotion = useMotionValue(0);
  const secondsMotion = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useAnimationFrame(() => {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    secondsMotion.set(seconds * 6);
    minutesMotion.set(minutes * 6);
    hoursMotion.set(hours * 30);
  });

  const romanNumerals = [
    "XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"
  ];

  if (!mounted) return null; // Avoid SSR hydration mismatch with clock hands

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-10] bg-background">
      {/* Giant Roman Clock Face (Zafkiel Style) */}
      <div className="absolute -top-[15%] -right-[15%] w-[85vw] h-[85vw] min-w-[800px] min-h-[800px] text-kurumi-gold mix-blend-screen opacity-[0.08]">
        <svg viewBox="0 0 1000 1000" className="w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
          {/* Outer Rings */}
          <circle cx="500" cy="500" r="490" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6"/>
          <circle cx="500" cy="500" r="455" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.8"/>
          <circle cx="500" cy="500" r="340" stroke="currentColor" strokeWidth="5" fill="none" opacity="0.7"/>
          <circle cx="500" cy="500" r="330" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          <circle cx="500" cy="500" r="50" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8"/>

          {/* Minute Ticks */}
          {Array.from({ length: 60 }).map((_, i) => (
            <line
              key={i}
              x1="500"
              y1={i % 5 === 0 ? "55" : "90"}
              x2="500"
              y2="140"
              transform={`rotate(${i * 6} 500 500)`}
              stroke="currentColor"
              strokeWidth={i % 5 === 0 ? "4" : "1.5"}
              opacity={i % 5 === 0 ? "0.9" : "0.4"}
            />
          ))}

          {/* Roman Numerals */}
          {romanNumerals.map((num, i) => (
            <text
              key={num}
              x="500"
              y="235"
              transform={`rotate(${i * 30} 500 500)`}
              fill="currentColor"
              fontSize="75"
              fontFamily="var(--font-heading), serif"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="central"
              letterSpacing="0.05em"
            >
              {num}
            </text>
          ))}

          {/* Inner Rotating Magic Circle (Hexagram) */}
          <motion.g 
            animate={{ rotate: -360 }} 
            transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
            style={{ transformOrigin: "500px 500px" }}
          >
            <polygon points="500,170 785.8,665 214.2,665" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <polygon points="500,830 785.8,335 214.2,335" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <circle cx="500" cy="500" r="230" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" fill="none" opacity="0.5"/>
            <circle cx="500" cy="500" r="150" stroke="currentColor" strokeWidth="2" strokeDasharray="15 15" fill="none" opacity="0.6"/>
            
            {/* Small inner gear decorations */}
            {Array.from({ length: 12 }).map((_, i) => (
               <circle key={`dec-${i}`} cx="500" cy="270" r="8" fill="currentColor" transform={`rotate(${i * 30} 500 500)`} opacity="0.5"/>
            ))}
          </motion.g>

          {/* Center decorative gear */}
          <motion.g
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            style={{ transformOrigin: "500px 500px" }}
          >
             <circle cx="500" cy="500" r="30" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" fill="none" opacity="0.9"/>
          </motion.g>

          {/* --- CLOCK HANDS --- */}
          {/* Hour Hand */}
          <motion.g style={{ rotate: hoursMotion, transformOrigin: "500px 500px" }}>
             <path d="M 485 500 L 500 220 L 515 500 Z" fill="currentColor" opacity="0.85"/>
             <path d="M 490 500 L 500 580 L 510 500 Z" fill="currentColor" opacity="0.7"/>
          </motion.g>

          {/* Minute Hand */}
          <motion.g style={{ rotate: minutesMotion, transformOrigin: "500px 500px" }}>
             <path d="M 492 500 L 500 120 L 508 500 Z" fill="currentColor" opacity="0.9"/>
             <path d="M 495 500 L 500 640 L 505 500 Z" fill="currentColor" opacity="0.75"/>
             <circle cx="500" cy="500" r="15" fill="var(--color-background)" stroke="currentColor" strokeWidth="4" />
          </motion.g>

          {/* Second Hand */}
          <motion.g style={{ rotate: secondsMotion, transformOrigin: "500px 500px" }}>
             <line x1="500" y1="680" x2="500" y2="70" stroke="currentColor" strokeWidth="3" />
             <circle cx="500" cy="500" r="6" fill="currentColor" />
             <circle cx="500" cy="180" r="15" fill="var(--color-background)" stroke="currentColor" strokeWidth="4" />
          </motion.g>

        </svg>
      </div>

      {/* Auxiliary Background Gears */}
      <motion.div
        className="absolute bottom-10 left-10 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] text-kurumi-gold opacity-[0.03] filter blur-[1px]"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
      >
        <Settings className="w-full h-full" strokeWidth={0.5} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 -left-[5%] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] text-kurumi-gold opacity-[0.02] filter blur-[2px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        <Cog className="w-full h-full" strokeWidth={0.8} />
      </motion.div>
      
      <motion.div
        className="absolute -bottom-20 right-1/4 w-[20vw] h-[20vw] max-w-[250px] max-h-[250px] text-kurumi-gold opacity-[0.04] filter blur-[0.5px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
      >
        <Cog className="w-full h-full" strokeWidth={1.2} />
      </motion.div>

    </div>
  );
}
