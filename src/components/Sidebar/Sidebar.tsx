import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { SidebarProps, NavItem } from './Sidebar.types';
import { STYLES } from './Sidebar.styles';
import { generateTestId } from './Sidebar.utils';
import {
    sidebarVariants,
    overlayVariants,
    navContainerVariants,
    navItemVariants,
    subItemsVariants,
    subItemVariants,
    headerVariants,
    iconRotationSettings
} from './Sidebar.animations';
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
        const hasSubItems = item.subItems && item.subItems.length > 0;

        return (
            <motion.div
                key={item.path}
                variants={navItemVariants}
                className="w-full"
            >
                <NavLink
                    to={item.path}
                    className={({ isActive }: { isActive: boolean }): string =>
                        `${STYLES.sidebar.link.base} ${isActive ? STYLES.sidebar.link.active : STYLES.sidebar.link.inactive} w-full flex items-center justify-between`
                    }
                    onClick={(e) => {
                        if (hasSubItems) {
                            e.preventDefault();
                            toggleExpand(item.path);
                        } else {
                            onClose();
                        }
                    }}
                    data-testid={generateTestId(item.path, item.id)}
                >
                    <span>{item.label}</span>
                    {hasSubItems && (
                        <motion.i
                            className={`fas ${isExpanded ? 'fa-caret-down' : 'fa-caret-right'} ml-2 text-black`}
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={iconRotationSettings.transition}
                        />
                    )}
                </NavLink>

                <AnimatePresence>
                    {hasSubItems && isExpanded && (
                        <motion.div
                            variants={subItemsVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className={`${STYLES.sidebar.subItemContainer} overflow-hidden`}
                        >
                            {item.subItems!.map(subItem => (
                                <motion.div
                                    key={subItem.path}
                                    variants={subItemVariants}
                                    data-testid={`subitem-${subItem.path}`}
                                >
                                    {renderNavLink(subItem, level + 1)}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Animated Overlay */}
                    <motion.div
                        variants={overlayVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className={STYLES.sidebar.overlay}
                        onClick={onClose}
                        data-testid="sidebar-overlay"
                    />

                    {/* Animated Sidebar */}
                    <motion.div
                        variants={sidebarVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className={STYLES.sidebar.container}
                        id="sidebar-menu"
                        data-testid="sidebar-menu"
                        style={{ transform: 'none' }} // Override default transform to let Framer Motion handle it
                    >
                        {/* Animated Header */}
                        <motion.div
                            variants={headerVariants}
                            className={STYLES.sidebar.header}
                        >
                            <IconButton
                                onClick={onClose}
                                testId="sidebar-close-button"
                                ariaLabel="Close sidebar"
                                iconType="close"
                            />
                        </motion.div>

                        {/* Animated Navigation Container */}
                        <motion.div
                            variants={navContainerVariants}
                            className={STYLES.sidebar.inner}
                        >
                            {navItems.map(item => renderNavLink(item))}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;