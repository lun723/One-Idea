import React from 'react';
import { STYLES } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = '',
  testId = 'sidebar-button',
  ariaLabel = 'Open menu',
  iconType = 'menu',
  customPath,
}) => {
  const getIconPath = () => {
    if (customPath) return customPath;
    switch (iconType) {
      case 'close':
        return 'M6 18L18 6M6 6l12 12';
      case 'menu':
      default:
        return 'M4 6h16M4 12h16m-7 6h7';
    }
  };

  return (
    <button
      type="button"
      className={`${STYLES.button} ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
      data-testid={testId}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={getIconPath()}
        />
      </svg>
    </button>
  );
};

export default IconButton;