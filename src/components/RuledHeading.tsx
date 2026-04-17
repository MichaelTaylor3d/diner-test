"use client";

import { motion } from "motion/react";
import { hairlineDraw } from "@/components/motion/variants";

export function RuledHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-center gap-6 my-6 text-terracotta"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span className="flex-1 h-px bg-brass/60 origin-right" variants={hairlineDraw} />
      <span className="text-xs uppercase tracking-[0.4em] whitespace-nowrap">{children}</span>
      <motion.span className="flex-1 h-px bg-brass/60 origin-left" variants={hairlineDraw} />
    </motion.div>
  );
}
