import type { Variants } from "framer-motion";

export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: [0, -5, 0], // Bobbing motion: moves up 10px and back
        transition: { 
            duration: 0.4, 
            ease: "easeOut",
            y: {
                repeat: Infinity, // Loop indefinitely
                repeatType: "loop",
                duration: 2, // Duration of one bob cycle
                ease: "easeInOut" // Smooth floating effect
            }
        } 
    },
    exit: { 
        opacity: 0, 
        y: -20, 
        transition: { duration: 0.3, ease: "easeIn" } 
    },
};