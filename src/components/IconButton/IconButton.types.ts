export interface IconButtonProps {
  onClick: () => void;
  className?: string;
  testId?: string;
  ariaLabel?: string;
  iconType?: 'menu' | 'close';
  customPath?: string;
}