// Header.types.ts
import type { ReactNode } from 'react';
import type { RouteConfig } from '../../config/routes';

export type NavItem = RouteConfig; // 直接使用 RouteConfig 作為 NavItem

export interface ImageLogo {
    src: string;
    alt: string;
}

export interface HeaderProps {
    logo: string | ImageLogo | ReactNode;
    navItems: NavItem[];
    className?: string;
    'data-testid'?: string;
}

export type LogoType = HeaderProps['logo'];