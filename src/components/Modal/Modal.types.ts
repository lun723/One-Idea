import type { ReactNode } from 'react';
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string | ReactNode; 
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full'; 
  className?: string;
}