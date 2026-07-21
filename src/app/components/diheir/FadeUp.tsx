import { motion } from "motion/react";
import React from "react";

export interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  y?: number;
  margin?: string;
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
  duration = 0.35,
  y = 40,
  margin = "0px 0px -30% 0px"
}: FadeUpProps) {
  // Use React.isValidElement to check if the child is a single element.
  // We prefer wrapping in a div so we don't mess with existing flex/grid structure unnecessarily,
  // but if it's an absolutely positioned element, the wrapper MUST carry the absolute classes.
  // For safety and ease of use, FadeUp is just a motion.div wrapper.
  return (
    <motion.div
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: margin as any }}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
