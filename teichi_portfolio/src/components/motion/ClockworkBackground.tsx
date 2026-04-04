"use client";

import { motion } from "framer-motion";
import { Settings, Cog } from "lucide-react";

export default function ClockworkBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] bg-background">
      {/* Large Gear - Bottom Right */}
      <motion.div
        className="absolute -bottom-32 -right-32 text-kurumi-gold opacity-5 opacity-[0.05] filter blur-[1px]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
      >
        <Settings size={600} strokeWidth={0.5} />
      </motion.div>

      {/* Medium Gear - Top Left */}
      <motion.div
        className="absolute -top-24 -left-24 text-kurumi-gold opacity-[0.04] filter blur-[1px]"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        <Cog size={400} strokeWidth={0.8} />
      </motion.div>

      {/* Small Gear - Center Left */}
      <motion.div
        className="absolute top-1/2 -left-16 text-kurumi-gold opacity-[0.03] filter blur-[1px]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        <Settings size={250} strokeWidth={1} />
      </motion.div>

      {/* Extra Small Gear - Top Right */}
      <motion.div
        className="absolute top-32 right-[10%] text-kurumi-gold opacity-[0.04] filter blur-[1px]"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <Cog size={150} strokeWidth={1.2} />
      </motion.div>
      
      {/* Extra Small Gear - Bottom Left */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-kurumi-gold opacity-[0.03] filter blur-[1px]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        <Settings size={180} strokeWidth={1} />
      </motion.div>
    </div>
  );
}
