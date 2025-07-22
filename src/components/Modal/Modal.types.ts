export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string; // 可選屬性
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full'; // 限定 size 類型
  className?: string;
}