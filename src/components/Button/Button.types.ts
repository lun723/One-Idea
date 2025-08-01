import type { ReactNode } from 'react';
export interface ButtonProps {
    label: ReactNode;
    onClick: () => void;
    hidden?: boolean;
    disabled?: boolean;
}