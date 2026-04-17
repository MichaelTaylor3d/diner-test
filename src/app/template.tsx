"use client";

import { motion } from "motion/react";
import { easeLux } from "@/components/motion/variants";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeLux }}
    >
      {children}
    </motion.div>
  );
}
