"use client";

import { motion } from "motion/react";
import { HeroStage } from "@/components/molecules/HeroStage";
import { BrassButton } from "@/components/atoms/BrassButton";
import { letterReveal, stagger, easeLux } from "@/components/motion/variants";
import { externalLinks } from "@/data/externalLinks";
import { images } from "@/data/images";

const word = "WELCOME DINER";

export function HomeHero() {
  return (
    <HeroStage image={images.heroHome} alt="Welcome Diner interior">
      <motion.h1
        className="display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-[0.2em] uppercase leading-[0.95] text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
        initial="hidden"
        animate="show"
        variants={stagger(0.08)}
        aria-label={word}
      >
        <span className="block">
          {"WELCOME".split("").map((c, i) => (
            <motion.span key={i} className="inline-block" variants={letterReveal}>
              {c}
            </motion.span>
          ))}
        </span>
        <span className="block mt-1">
          {"DINER".split("").map((c, i) => (
            <motion.span key={i} className="inline-block" variants={letterReveal}>
              {c}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      <motion.p
        className="mt-8 text-xs md:text-sm tracking-[0.35em] uppercase"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: easeLux }}
      >
        929 E Pierce St · Phoenix AZ · est. 2004
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7, ease: easeLux }}
      >
        <BrassButton href="/menu" size="lg">
          See Menus
        </BrassButton>
        <BrassButton href={externalLinks.order} external size="lg">
          Order
        </BrassButton>
      </motion.div>
    </HeroStage>
  );
}
