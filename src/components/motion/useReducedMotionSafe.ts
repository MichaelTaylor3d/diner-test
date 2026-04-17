"use client";

import { useReducedMotion } from "motion/react";

export function useReducedMotionSafe(): boolean {
  const reduced = useReducedMotion();
  return reduced === true;
}
