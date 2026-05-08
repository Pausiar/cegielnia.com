"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  children: ReactNode;
};

const Reveal = ({ delay = 0, y = 24, children, ...rest }: Props) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
