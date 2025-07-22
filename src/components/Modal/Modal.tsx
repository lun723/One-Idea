import React, { useEffect, useRef } from 'react';
import type { ModalProps } from './Modal.types';
import { 
  modalSizeClasses, 
  modalBackdropClass, 
  modalOverlayClass, 
  modalContentClass, 
  modalHeaderClass, 
  modalBodyClass,
} from './Modal.styles';
import { trapFocus } from './Modal.utils';
import IconButton from '../IconButton';

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title = '', // 默認空字符串，避免 undefined
  children, 
  size = 'medium',
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen && modalRef.current) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      modalRef.current.focus(); // 確保 modalRef.current 不為 null
      const cleanup = trapFocus(modalRef);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
        cleanup();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={modalBackdropClass} onClick={onClose}>
      <div className={modalOverlayClass} />
      <div 
        ref={modalRef}
        className={`${modalContentClass} ${modalSizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
      >
        {title && (
          <div className={modalHeaderClass}>
            <h2 id="modal-title" className="text-xl font-bold text-gray-900">{title}</h2>
            <IconButton
                    onClick={onClose}
                    testId="sidebar-close-button"
                    ariaLabel="Close sidebar"
                    iconType="close"
                />
          </div>
        )}
        <div className={modalBodyClass}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;