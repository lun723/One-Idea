import type { Variants } from 'framer-motion';

export const loadingAnimation: Variants = {
    initial: { 
        opacity: 0,
        transition: { duration: 0.3 }
    },
    animate: { 
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: { 
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

export const containerAnimation: Variants = {
    initial: { 
        scale: 0.5, 
        opacity: 0,
        transition: { duration: 0.5, type: "spring" }
    },
    animate: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.5, type: "spring" }
    },
    exit: { 
        scale: 0.5, 
        opacity: 0,
        transition: { duration: 0.5, type: "spring" }
    }
};

export const spinnerAnimation: Variants = {
    initial: { rotate: 0 },
    animate: { 
        rotate: 360,
        transition: { 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
        }
    }
};