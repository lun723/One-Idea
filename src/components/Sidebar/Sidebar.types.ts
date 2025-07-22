// 定義 NavItem 介面，描述導航項目的結構
export interface NavItem {
    label: string; // 導航項目的顯示文字
    path: string;  // 導航項目的目標路徑（URL）
    id?: string;   // 可選的 id，用來唯一標識該導航項目
}

export interface SidebarProps {
    navItems: NavItem[];
    isOpen: boolean;
    onClose: () => void;
}