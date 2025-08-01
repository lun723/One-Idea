import React, { createContext, useContext, useState, useCallback } from 'react';
import Loading from '../components/Loading';

const modules = import.meta.glob('../views/modal/*.tsx', { eager: true });
const modalRegistry: Record<string, React.ComponentType<any>> = {};
for (const path in modules) {
  const modalName = path.replace(/^\.\.\/views\/modal\/(.*)\.tsx$/, '$1');
  modalRegistry[modalName] = (modules[path] as any).default;
}

interface ModalState {
  modalType: string | null;
  isOpen: boolean;
  modalProps: any;
  onCloseCallback?: () => void;
}

interface ModalContextType {
  openModal: (modalType: string, modalProps?: any, onCloseCallback?: () => void) => Promise<void>;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<ModalState>({
    modalType: null,
    isOpen: false,
    modalProps: {},
    onCloseCallback: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);

  const openModal = useCallback(
    async (modalType: string, modalProps: any = {}, onCloseCallback?: () => void) => {
      if (!modalRegistry[modalType]) {
        console.error(`Modal type "${modalType}" not found in registry`);
        return;
      }
      setIsLoading(true);
      try {
        const props = typeof modalProps === 'function' ? await modalProps() : modalProps;
        setModalState({
          modalType,
          isOpen: true,
          modalProps: props,
          onCloseCallback,
        });
      } catch (error) {
        console.error('Failed to open modal:', error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
    if (modalState.onCloseCallback) {
      modalState.onCloseCallback();
    }
    setTimeout(() => {
      setModalState({
        modalType: null,
        isOpen: false,
        modalProps: {},
        onCloseCallback: undefined,
      });
    }, 300);
  }, [modalState.onCloseCallback]);

  const ModalComponent = modalState.modalType ? modalRegistry[modalState.modalType] : null;

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children} {isLoading && <Loading />}
      {ModalComponent && (
        <ModalComponent isOpen={modalState.isOpen} onClose={closeModal} {...modalState.modalProps} />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};