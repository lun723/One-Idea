// Sidebar.types.ts
import type { RouteConfig } from '../../config/routes';

export type NavItem = RouteConfig; // 直接使用 RouteConfig 作為 NavItem

export interface SidebarProps {
    navItems: NavItem[];
    isOpen: boolean;
    onClose: () => void;
}