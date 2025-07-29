import type { Variants } from "framer-motion";

export const tickersVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (idx: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeInOut", delay: idx * 0.05 },
    }),
};