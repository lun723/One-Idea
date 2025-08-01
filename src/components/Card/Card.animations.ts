import type { Variants } from "framer-motion";

export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: [0, -5, 0], 
        transition: { 
            duration: 0.4, 
            ease: "easeOut",
            y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 2, 
                ease: "easeInOut" 
            }
        } 
    },
    exit: { 
        opacity: 0, 
        y: -20, 
        transition: { duration: 0.3, ease: "easeIn" } 
    },
};