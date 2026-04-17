"use client";

import { motion } from "motion/react";
import { fadeUp } from "./variants";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  once?: boolean;
  amount?: number;
};

export function RevealOnView({
  children,
  className,
  as = "div",
  once = true,
  amount = 0.2,
}: Props) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={fadeUp}
    >
      {children}
    </Component>
  );
}
