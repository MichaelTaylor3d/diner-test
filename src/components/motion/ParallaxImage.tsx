"use client";

import { useRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type Props = Omit<ImageProps, "placeholder"> & {
  strength?: number;
  className?: string;
};

export function ParallaxImage({ strength = 40, className, ...imageProps }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <motion.div ref={ref} style={{ y }} className={`will-change-transform ${className ?? ""}`}>
      <Image {...imageProps} alt={imageProps.alt} />
    </motion.div>
  );
}
