import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { SidebarProps, NavItem } from './Sidebar.types';
import { STYLES } from './Sidebar.styles';
import { generateTestId } from './Sidebar.utils';
import IconButton from '../IconButton';

const Sidebar: React.FC<SidebarProps> = ({ navItems, isOpen, onClose }) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    const toggleExpand = (path: string) => {
        setExpandedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(path)) {
                newSet.delete(path);
            } else {
                newSet.add(path);
            }
            return newSet;
        });
    };

    const renderNavLink = (item: NavItem, level: number = 0) => {
        const isExpanded = expandedItems.has(item.path);
        const linkContent = (
            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }: { isActive: boolean }): string =>
                    `${STYLES.sidebar.link.base} ${isActive ? STYLES.sidebar.link.active : STYLES.sidebar.link.inactive} w-full flex items-center justify-between`
                }
                onClick={(e) => {
                    if (item.subItems && item.subItems.length > 0) {
                        e.preventDefault();
                        toggleExpand(item.path);
                    } else {
                        onClose();
                    }
                }}
                data-testid={generateTestId(item.path, item.id)}
            >
                <span className="flex-1">{item.label}</span>
                {item.subItems && item.subItems.length > 0 && (
                    <i
                        className={`fas ${isExpanded ? 'fa-caret-down' : 'fa-caret-right'} ml-2 text-black`}
                    />
                )}
            </NavLink>
        );

        if (Array.isArray(item.subItems) && item.subItems.length > 0 && isExpanded) {
            console.log(`Rendering subItems for ${item.label}:`, item.subItems); // 調試
            return (
                <div key={item.path}>
                    {linkContent}
                    <div className={STYLES.sidebar.subItemContainer}>
                        {item.subItems.map(subItem => (
                            <div key={subItem.path} data-testid={`subitem-${subItem.path}`}>
                                {renderNavLink(subItem, level + 1)}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return linkContent;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebarElement = document.getElementById('sidebar-menu');
            if (isOpen && sidebarElement && !sidebarElement.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className={`${STYLES.sidebar.container} ${isOpen ? STYLES.sidebar.open : STYLES.sidebar.closed}`}
            id="sidebar-menu"
            data-testid="sidebar-menu"
        >
            <div className={STYLES.sidebar.header}>
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