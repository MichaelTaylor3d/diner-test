"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { stagger, fadeUp } from "@/components/motion/variants";

const presses = [
  "AZ Central",
  "Phoenix New Times",
  "Thrillist",
  "Food Network",
  "Chowhound",
  "Phoenix Magazine",
];

type Props = {
  className?: string;
  linkToMentions?: boolean;
};

export function PressStrip({ className = "", linkToMentions = true }: Props) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 text-center ${className}`}>
      <Eyebrow className="text-terracotta">As seen in</Eyebrow>
      <motion.div
        className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger(0.08)}
      >
        {presses.map((name) => (
          <motion.span
            key={name}
            variants={fadeUp}
            className="display italic text-xl md:text-2xl text-desert-shadow opacity-70 transition-opacity duration-300 hover:opacity-100 hover:text-ink"
          >
            {linkToMentions ? <Link href="/mentions">{name}</Link> : name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
