import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";

export function InfiniteScroll({ children, gap = "20px" }: { children: React.ReactNode, gap?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [children]);

  useEffect(() => {
    if (contentWidth > 0) {
      controls.start({
        x: -contentWidth,
        transition: {
          duration: contentWidth / 50, // adjust speed
          ease: "linear",
          repeat: Infinity,
        }
      });
    }
  }, [contentWidth, controls]);

  return (
    <div className="overflow-hidden w-full" style={{ paddingBottom: '1rem' }}>
      <motion.div 
        ref={containerRef}
        animate={controls}
        style={{ x, display: 'flex', gap }}
        className="w-max cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -contentWidth }}
        onDragStart={() => controls.stop()}
        onDragEnd={(e, info) => {
          // Resume animation after drag
          const currentX = x.get();
          const remainingDistance = contentWidth + currentX;
          const duration = remainingDistance / 50;
          controls.start({
            x: -contentWidth,
            transition: {
              duration: duration > 0 ? duration : 0.1,
              ease: "linear",
              repeat: Infinity,
            }
          });
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
