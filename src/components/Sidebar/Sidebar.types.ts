import type { RouteConfig } from '../../config/routes';

export type NavItem = RouteConfig; 
export interface SidebarProps {
    navItems: NavItem[];
    isOpen: boolean;
    onClose: () => void;
}