import React, { useEffect, useCallback } from 'react';
import type { ModalProps } from './Modal.types';
import { modalSizeClasses, modalBackdropClass, modalOverlayClass, modalContentClass, modalHeaderClass, modalBodyClass, } from './Modal.styles';
import IconButton from '../IconButton';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title = '', children, size = 'medium', className = '', }) => {

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className={modalBackdropClass}>
      <div className={modalOverlayClass} onClick={handleBackdropClick}/>
      <div className={`${modalContentClass} ${modalSizeClasses[size]} ${className}`.trim()} role="dialog" aria-modal="true" aria-labelledby={title ? 'modal-title' : undefined} tabIndex={-1}>
        <div className={modalHeaderClass}>
          <h2 id="modal-title" className="text-xl font-bold text-gray-900">{title}</h2>
          <IconButton onClick={onClose} testId="modal-close-button" ariaLabel="Close modal" iconType="close"/>
        </div>
        <div className={modalBodyClass}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;