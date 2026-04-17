"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { kenBurns } from "@/components/motion/variants";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

type Props = {
  image: string;
  alt: string;
  overlay?: number;
  children: React.ReactNode;
  heightClass?: string;
};

export function HeroStage({
  image,
  alt,
  overlay = 0.35,
  children,
  heightClass = "h-[88vh] min-h-[620px]",
}: Props) {
  const reduced = useReducedMotionSafe();
  return (
    <section className={`relative w-full overflow-hidden ${heightClass}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduced ? undefined : "hidden"}
        animate={reduced ? undefined : "show"}
        variants={reduced ? undefined : kenBurns}
      >
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: `rgba(31,26,23,${overlay})` }} />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-bg-ivory">
        {children}
      </div>
    </section>
  );
}
