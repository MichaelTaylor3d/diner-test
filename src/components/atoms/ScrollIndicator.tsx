"use client";

import { motion, useReducedMotion } from "motion/react";

export function ScrollIndicator() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: reduce ? 1 : [0.35, 1, 0.35] }}
      transition={
        reduce
          ? { duration: 0.8 }
          : { duration: 2.4, ease: "easeInOut", repeat: Infinity }
      }
    >
      <svg
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-cream"
      >
        <path d="M10 2 v20 M3 17 l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}
