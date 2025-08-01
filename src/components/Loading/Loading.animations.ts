import type { Variants } from 'framer-motion';

export const loadingAnimation: Variants = {
    initial: { 
        opacity: 0,
        transition: { duration: 0.5 }
    },
    animate: { 
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: { 
        opacity: 0,
        transition: { duration: 0.5 }
    }
};

export const containerAnimation: Variants = {
    initial: { 
        scale: 1, 
        opacity: 0,
        transition: { duration: 1, type: "spring" }
    },
    animate: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 1, type: "spring" }
    },
    exit: { 
        scale: 1, 
        opacity: 0,
        transition: { duration: 1, type: "spring" }
    }
};

export const dotAnimation: Variants = {
    initial: {
        y: 0,
        scale: 1,
        backgroundColor: '#1E3A8A'
    },
    animate: (index: number) => ({
        y: [0, -20, 0],
        scale: [1, 1.2, 1],
        backgroundColor: ['#1E3A8A', '#60A5FA', '#1E3A8A'],
        transition: {
            duration: 1,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    })
};