export const trapFocus = (modalRef: React.RefObject<HTMLDivElement>) => {
  if (!modalRef.current) return () => {};

  const focusableElements = modalRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement | undefined;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement | undefined;

  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement?.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement?.focus();
    }
  };

  modalRef.current.addEventListener('keydown', handleTab);
  return () => modalRef.current?.removeEventListener('keydown', handleTab);
};