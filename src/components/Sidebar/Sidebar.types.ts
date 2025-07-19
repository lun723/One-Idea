// 匯入 ReactNode 型別，並且使用 `import type` 確保這僅在編譯階段使用，不會被實際引入到運行時
import type { ReactNode } from 'react';

// 定義 NavItem 介面，描述導航項目的結構
export interface NavItem {
    label: string; // 導航項目的顯示文字
    path: string;  // 導航項目的目標路徑（URL）
    id?: string;   // 可選的 id，用來唯一標識該導航項目
}

export interface SidebarProps {
    navItems: NavItem[];
    ctaText: string;
    ctaPath: string;
    isOpen: boolean;
    onClose: () => void;
}