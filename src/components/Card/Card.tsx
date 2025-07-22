import React from 'react';
import type { CardProps } from './Card.types';
import { STYLES } from './Card.styles';

const Content: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className={STYLES.container}>
            <h1 className={STYLES.title}>{title}</h1>
            <div className={STYLES.content}>{children}</div>
        </div>
    );
};

export default Content;