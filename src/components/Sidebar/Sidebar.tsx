import React from 'react';
import { NavLink } from 'react-router-dom';
import type { SidebarProps, NavItem } from './Sidebar.types';
import { STYLES } from './Sidebar.styles';
import { generateTestId, getMenuIconPath } from './Sidebar.utils';

const Sidebar: React.FC<SidebarProps> = ({ 
    navItems, 
    ctaText, 
    ctaPath, 
    isOpen, 
    onClose 
}) => {
    const renderNavLink = (item: NavItem) => {
        return (
            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                    `${STYLES.sidebar.link.base} ${isActive ? STYLES.sidebar.link.active : STYLES.sidebar.link.inactive}`
                }
                onClick={onClose}
                data-testid={generateTestId(item.path, item.id)}
            >
                {item.label}
            </NavLink>
        );
    };

    return (
        <div
            className={`${STYLES.sidebar.container} ${isOpen ? STYLES.sidebar.open : STYLES.sidebar.closed}`}
            id="sidebar-menu"
            data-testid="sidebar-menu"
        >
            <div className={STYLES.sidebar.header}>
                {/* 關閉按鈕 */}
                <button
                    type="button"
                    className={STYLES.sidebar.closeButton}
                    aria-label="Close sidebar"
                    onClick={onClose}
                    data-testid="sidebar-close-button"
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className={STYLES.sidebar.inner}>
                {navItems.map(item => renderNavLink(item))}
                <NavLink
                    to={ctaPath}
                    className={STYLES.sidebar.ctaButton}
                    onClick={onClose}
                    data-testid="sidebar-cta-button"
                >
                    {ctaText}
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;