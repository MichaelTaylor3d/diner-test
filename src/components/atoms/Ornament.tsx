"use client";

import { motion, useReducedMotion } from "motion/react";

type Variant = "thin" | "standard" | "grand";
type Props = { variant?: Variant; className?: string };

const widths: Record<Variant, string> = {
  thin: "w-16 md:w-24",
  standard: "w-24 md:w-32",
  grand: "w-40 md:w-56",
};

export function Ornament({ variant = "standard", className = "" }: Props) {
  const reduce = useReducedMotion();
  const draw = {
    hidden: { scaleX: 0, opacity: 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  const fade = {
    hidden: { opacity: 0, scale: 0.6 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: reduce ? 0 : 0.3 },
    },
  };
  return (
    <div
      aria-hidden="true"
      className={`mx-auto flex items-center justify-center gap-3 py-8 ${className}`}
    >
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={draw}
        style={{ originX: 1 }}
        className={`h-px bg-brass/60 ${widths[variant]}`}
      />
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fade}
        className="text-brass/70 text-[10px] tracking-[0.3em]"
      >
        ◇
      </motion.span>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fade}
        className="text-brass text-sm"
      >
        ◆
      </motion.span>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fade}
        className="text-brass/70 text-[10px] tracking-[0.3em]"
      >
        ◇
      </motion.span>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={draw}
        style={{ originX: 0 }}
        className={`h-px bg-brass/60 ${widths[variant]}`}
      />
    </div>
  );
}
