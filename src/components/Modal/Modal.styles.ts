export const modalSizeClasses: Record<'small' | 'medium' | 'large' | 'full', string> = {
  small: 'max-w-md',
  medium: 'max-w-2xl',
  large: 'max-w-4xl',
  full: 'max-w-7xl',
};

export const modalBackdropClass = 'fixed inset-0 z-50 flex items-center justify-center';
export const modalOverlayClass = 'absolute inset-0 bg-black/30';
export const modalContentClass = 'relative bg-white mx-4 w-full max-h-[90vh] overflow-hidden shadow-[5px_5px_0_0_#1e3a8a]';
export const modalHeaderClass = 'flex items-center justify-between py-4 px-6';
export const modalBodyClass = 'py-6 px-10 overflow-y-auto max-h-[90vh]';