import type { Variants } from 'framer-motion';

// Motion variants for sidebar animation
export const sidebarVariants: Variants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    closed: {
        x: "100%",
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            when: "afterChildren"
        }
    }
};

// Overlay variants for backdrop animation
export const overlayVariants: Variants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

// Nav items container variants
export const navContainerVariants: Variants = {
    open: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

// Individual nav item variants
export const navItemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    },
    closed: {
        y: 20,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    }
};

// Sub-items container variants
export const subItemsVariants: Variants = {
    open: {
        height: "auto",
        opacity: 1,
        transition: {
            height: {
                type: "spring",
                stiffness: 300,
                damping: 30
            },
            opacity: {
                duration: 0.2,
                delay: 0.1
            },
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    },
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            height: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.1
            },
            opacity: {
                duration: 0.1
            },
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

// Sub-item variants
export const subItemVariants: Variants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    },
    closed: {
        x: -20,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    }
};

// Header variants
export const headerVariants: Variants = {
    open: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
            delay: 0.1
        }
    },
    closed: {
        scale: 0.8,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    }
};

// Icon rotation animation settings
export const iconRotationSettings = {
    transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 24 
    }
};

// 動畫配置常數，方便調整
export const ANIMATION_CONFIG = {
    spring: {
        stiffness: 300,
        damping: 30
    },
    timing: {
        fast: 0.1,
        normal: 0.2,
        slow: 0.3
    },
    stagger: {
        container: 0.1,
        items: 0.05
    }
} as const;