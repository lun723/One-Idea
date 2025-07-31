import { useState, useCallback } from 'react';
import { useModalContext } from '../context/modalContext';
import { useLoading } from './useLoading';

interface ModalConfig {
  data?: unknown;
  onClose?: () => void;
}

interface UseModalReturn {
  isOpen: boolean;
  modalData: unknown;
  openModal: (modalName: string, config?: ModalConfig) => void;
  closeModal: () => void;
  openModalWithLoading: <T>(
    modalName: string,
    asyncOperation: () => Promise<T>,
    config?: Omit<ModalConfig, 'data'>
  ) => Promise<void>;
}

export const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<unknown>(null);
  const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | undefined>();
  const { openModal: contextOpenModal, closeModal: contextCloseModal } = useModalContext();
  const { showLoading, hideLoading } = useLoading();

  const openModal = useCallback((modalName: string, config?: ModalConfig) => {
    setIsOpen(true);
    setModalData(config?.data || null);
    setOnCloseCallback(() => config?.onClose);
    contextOpenModal(modalName, config?.data);
  }, [contextOpenModal]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalData(null);
    if (onCloseCallback) {
      onCloseCallback();
    }
    contextCloseModal();
  }, [contextCloseModal, onCloseCallback]);

  const openModalWithLoading = useCallback(async <T,>(
    modalName: string,
    asyncOperation: () => Promise<T>,
    config?: Omit<ModalConfig, 'data'>
  ) => {
    openModal(modalName);
    showLoading();
    
    try {
      const data = await asyncOperation();
      hideLoading();
      openModal(modalName, {
        ...config,
        data
      });
    } catch (error) {
      console.error(error);
      hideLoading();
      closeModal();
      throw error;
    }
  }, [openModal, closeModal, showLoading, hideLoading]);

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
    openModalWithLoading
  };
};

export default useModal;