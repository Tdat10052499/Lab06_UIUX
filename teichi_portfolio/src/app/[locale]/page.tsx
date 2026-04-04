"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-7xl md:text-8xl font-heading text-kurumi-gold tracking-[0.2em] mb-4 text-center">
        TEICHI
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400/80 font-light tracking-wider text-center">
        Architect of Temporal Systems
      </p>
    </motion.section>
  );
}
