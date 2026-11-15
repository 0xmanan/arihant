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
  y = 24,
  x = 0,
  className = "",
  viewportMargin = "0px 0px -30px 0px",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{
        once: true,
        amount: 0.08, // Trigger as soon as 8% of the element enters the phone screen
        margin: viewportMargin,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple fluid easing
      }}
      className={`transform-gpu ${className}`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
