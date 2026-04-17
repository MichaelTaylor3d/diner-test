"use client";

import { motion } from "motion/react";
import { HeroStage } from "@/components/molecules/HeroStage";
import { BrassButton } from "@/components/atoms/BrassButton";
import { ScrollIndicator } from "@/components/atoms/ScrollIndicator";
import { letterReveal, stagger, easeLux } from "@/components/motion/variants";
import { externalLinks } from "@/data/externalLinks";
import { images } from "@/data/images";

const word = "WELCOME DINER";

export function HomeHero() {
  return (
    <HeroStage image={images.heroHome} alt="Welcome Diner interior">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.45)_80%)]"
      />
      <motion.h1
        className="relative display uppercase text-cream leading-[0.92] tracking-[0.18em] text-[clamp(3.75rem,12vw,11rem)] [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]"
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
        className="relative mt-8 text-xs md:text-sm tracking-[0.35em] uppercase text-cream"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: easeLux }}
      >
        929 E Pierce St · Phoenix AZ · est. 2004
      </motion.p>

      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
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

      <ScrollIndicator />
    </HeroStage>
  );
}
