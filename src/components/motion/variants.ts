import type { Variants, Transition } from "motion/react";

export const easeLux: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeLux } },
};

export const stagger = (each = 0.07, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
});

export const hairlineDraw: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: easeLux } },
};

export const kenBurns: Variants = {
  hidden: { scale: 1.12, x: -10, y: 10 },
  show: {
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.8, ease: easeLux },
  },
};
