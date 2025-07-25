export const modalSizeClasses: Record<'small' | 'medium' | 'large' | 'full', string> = {
  small: 'max-w-md',
  medium: 'max-w-2xl',
  large: 'max-w-4xl',
  full: 'max-w-7xl',
};

export const modalBackdropClass = 'fixed inset-0 z-50 flex items-center justify-center';
export const modalOverlayClass = 'absolute inset-0 bg-black/30';
export const modalContentClass = 'relative bg-white rounded-xl shadow-2xl mx-4 w-full max-h-[90vh] overflow-hidden';
export const modalHeaderClass = 'flex items-center justify-between p-4 border-b border-gray-200';
export const modalBodyClass = 'p-6 overflow-y-auto max-h-[calc(90vh-120px)]';
export const closeButtonClass = 'p-2 hover:bg-gray-100 rounded-full transition-colors duration-200';