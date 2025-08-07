import type { Variants } from "framer-motion";

export const modalVariants: Variants = {
    hidden: { 
        opacity: 0,
        scaleY: 0,
        transformOrigin: "center"
    },
    visible: { 
        opacity: 1,
        scaleY: 1,
        transition: { 
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1], 
            opacity: { duration: 0.25 }
        }
    },
    exit: { 
        opacity: 0,
        scaleY: 0,
        transition: { 
            duration: 0.3,
            ease: [0.4, 0, 1, 1], 
            opacity: { duration: 0.2 }
        }
    }
};

export const overlayVariants: Variants = {
    hidden: { 
        opacity: 0 
    },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 0.3,
            ease: "easeOut"
        }
    },
    exit: { 
        opacity: 0,
        transition: { 
            duration: 0.2,
            ease: "easeIn"
        }
    }
};