"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  viewportMargin?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  y = 32,
  x = 0,
  className = "",
  viewportMargin = "-50px",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: viewportMargin as any }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple fluid easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
