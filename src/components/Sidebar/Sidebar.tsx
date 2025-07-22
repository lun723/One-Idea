import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import type { SidebarProps, NavItem } from './Sidebar.types';
import { STYLES } from './Sidebar.styles';
import { generateTestId } from './Sidebar.utils';
import IconButton from '../IconButton';

const Sidebar: React.FC<SidebarProps> = ({ 
    navItems, 
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

    // 當點擊 Sidebar 外的區域時關閉 Sidebar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebarElement = document.getElementById('sidebar-menu');
            if (isOpen && sidebarElement && !sidebarElement.contains(event.target as Node)) {
                onClose();
            }
        };

        // 添加全局點擊事件監聽器
        document.addEventListener('mousedown', handleClickOutside);

        // 清理事件監聽器
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]); // 依賴項只包含 isOpen 和 onClose

    return (
        <div
            className={`${STYLES.sidebar.container} ${isOpen ? STYLES.sidebar.open : STYLES.sidebar.closed}`}
            id="sidebar-menu"
            data-testid="sidebar-menu"
        >
            <div className={STYLES.sidebar.header}>
                {/* 關閉按鈕 */}
                <IconButton
                    onClick={onClose}
                    testId="sidebar-close-button"
                    ariaLabel="Close sidebar"
                    iconType="close"
                />
            </div>
            <div className={STYLES.sidebar.inner}>
                {navItems.map(item => renderNavLink(item))}
            </div>
        </div>
    );
};

export default Sidebar;