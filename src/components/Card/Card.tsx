import React from 'react';
import type { CardProps } from './Card.types';
import { STYLES } from './Card.styles';
import { motion } from 'framer-motion';
import { cardVariants } from './Card.animations';

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <motion.div variants={cardVariants} initial="hidden" animate="visible" exit="exit" className={STYLES.container}>
            <h1 className={STYLES.title}>{title}</h1>
            <div className={STYLES.content}>{children}</div>
        </motion.div>
    );
};

export default Card;