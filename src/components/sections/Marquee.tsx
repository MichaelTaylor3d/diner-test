"use client";

import { motion } from "motion/react";

const tokens = [
  "Welcome Diner",
  "Garfield Historic District",
  "Since 2004",
  "All-Day Breakfast",
  "Fried Green Tomato",
  "Scratch Kitchen",
];

export function Marquee() {
  const text = tokens.join("  \u25C6  ");
  const full = `${text}  \u25C6  ${text}  \u25C6  `;
  return (
    <section className="relative overflow-hidden border-y border-brass/20 bg-cream/40 py-6">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <div className="display italic text-3xl md:text-5xl tracking-wide text-terracotta/90 pr-12">
          {full}
        </div>
        <div className="display italic text-3xl md:text-5xl tracking-wide text-terracotta/90 pr-12">
          {full}
        </div>
      </motion.div>
    </section>
  );
}
