// 匯入 React，useState 和其他需要的函數
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // 匯入 NavLink 用於導航
import type { HeaderProps, NavItem } from './Header.types';  // 匯入 Header 的型別
import { STYLES } from './Header.styles';  // 匯入樣式
import { isStringLogo, isImageLogo, generateTestId, getMenuIconPath } from './Header.utils';  // 匯入工具函數
import Sidebar from '../Sidebar';

// 定義 Header 元件，接受 HeaderProps 型別的屬性
const Header: React.FC<HeaderProps> = ({ 
    logo, 
    navItems, 
    ctaText, 
    ctaPath, 
    className = '', 
    'data-testid': testId = 'header',
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const renderLogo = () => {
        if (isStringLogo(logo)) {
            return (
                <span className={STYLES.logo.text} data-testid="logo-text">
                    {logo}
                </span>
            );
        }
        
        if (isImageLogo(logo)) {
            return (
                <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={STYLES.logo.image}
                    data-testid="logo-image"
                />
            );
        }
        
        return (
            <div className={STYLES.logo.wrapper} data-testid="logo-custom">
                {logo}
            </div>
        );
    };

    return (
        <header className={`${STYLES.header} ${className}`} data-testid={testId}>
            <nav>
                <div className={STYLES.container}>
                    {/* Logo 區域 */}
                    <div className={STYLES.logo.container}>
                        <NavLink to="/" className="flex items-center" data-testid="logo-link">
                            {renderLogo()}
                        </NavLink>
                    </div>

                    {/* 側邊欄觸發按鈕 */}
                    <div className={STYLES.sidebar.buttonContainer}>
                        <button
                            type="button"
                            className={STYLES.sidebar.button}
                            aria-controls="sidebar-menu"
                            aria-expanded={isSidebarOpen}
                            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
                            onClick={toggleSidebar}
                            data-testid="sidebar-button"
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
                                    d={getMenuIconPath(isSidebarOpen)}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* 側邊欄 */}
            <Sidebar 
                navItems={navItems}
                ctaText={ctaText}
                ctaPath={ctaPath}
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />
        </header>
    );
};

export default Header;