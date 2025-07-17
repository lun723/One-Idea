// 匯入 React，useState 和其他需要的函數
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // 匯入 NavLink 用於導航
import type { HeaderProps, NavItem } from './Header.types';  // 匯入 Header 的型別
import { STYLES } from './Header.styles';  // 匯入樣式
import { isStringLogo, isImageLogo, generateTestId, getMenuIconPath } from './Header.utils';  // 匯入工具函數

// 定義 Header 元件，接受 HeaderProps 型別的屬性
const Header: React.FC<HeaderProps> = ({ 
    logo, 
    navItems, 
    ctaText, 
    ctaPath, 
    className = '',  // 可選的 className 用來自訂樣式
    'data-testid': testId = 'header',  // 預設的 test ID
}) => {
    // 設置狀態以控制手機菜單的開啟或關閉
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 控制手機菜單顯示或隱藏的函數
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);  // 反轉菜單狀態
    };

    // 關閉手機菜單的函數
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // 根據 logo 的類型進行不同的渲染
    const renderLogo = () => {
        if (isStringLogo(logo)) {
            // 如果 logo 是字串，顯示為文本
            return (
                <span className={STYLES.logo.text} data-testid="logo-text">
                    {logo}
                </span>
            );
        }
        
        if (isImageLogo(logo)) {
            // 如果 logo 是圖像物件，顯示為圖片
            return (
                <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={STYLES.logo.image}
                    data-testid="logo-image"
                />
            );
        }
        
        // 如果是其他自定義的 logo，則直接渲染
        return (
            <div className={STYLES.logo.wrapper} data-testid="logo-custom">
                {logo}
            </div>
        );
    };

    // 渲染每個導航鏈接的函數
    const renderNavLink = (item: NavItem, isMobile = false) => {
        const baseStyles = isMobile ? STYLES.mobileMenu.link.base : STYLES.navLink.base;  // 根據設備選擇樣式
        const activeStyles = isMobile ? STYLES.mobileMenu.link.active : STYLES.navLink.active;  // 激活狀態的樣式
        const inactiveStyles = isMobile ? STYLES.mobileMenu.link.inactive : STYLES.navLink.inactive;  // 非激活狀態的樣式

        return (
            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}  // 根據是否激活來改變樣式
                onClick={isMobile ? closeMobileMenu : undefined}  // 在手機端點擊後關閉菜單
                data-testid={generateTestId(item.path, item.id)}  // 為每個鏈接生成唯一的 test ID
            >
                {item.label}  {/* 顯示導航項目的標籤 */}
            </NavLink>
        );
    };

    return (
        <header className={`${STYLES.header} ${className}`} data-testid={testId}>
            <nav className={STYLES.nav}>
                <div className={STYLES.container}>
                    {/* Logo 區域 */}
                    <div className={STYLES.logo.container}>
                        <NavLink to="/" className="flex items-center" data-testid="logo-link">
                            {renderLogo()}  {/* 渲染 logo */}
                        </NavLink>
                    </div>

                    {/* 桌面版導航 */}
                    <div className={STYLES.navigation.desktop}>
                        {navItems.map(item => renderNavLink(item))}  {/* 渲染所有導航項目 */}
                    </div>

                    {/* 桌面版 CTA 按鈕 */}
                    <div className={STYLES.cta.container}>
                        <NavLink
                            to={ctaPath}  // 行動呼籲的鏈接
                            className={STYLES.cta.button}
                            data-testid="cta-button"
                        >
                            {ctaText}  {/* 顯示行動呼籲文字 */}
                        </NavLink>
                    </div>

                    {/* 移動版選單按鈕 */}
                    <div className={STYLES.navigation.mobile}>
                        <button
                            type="button"
                            className={STYLES.mobileMenu.button}
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            onClick={toggleMobileMenu}
                            data-testid="mobile-menu-button"
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
                                    d={getMenuIconPath(isMobileMenuOpen)}  // 根據菜單狀態切換圖示路徑
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* 移動版選單 */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu" data-testid="mobile-menu">
                    <div className={STYLES.mobileMenu.container}>
                        {navItems.map(item => renderNavLink(item, true))}  {/* 渲染移動版導航項目 */}
                        <NavLink
                            to={ctaPath}  // 行動呼籲按鈕
                            className={STYLES.mobileMenu.ctaButton}
                            onClick={closeMobileMenu}  // 點擊後關閉菜單
                            data-testid="mobile-cta-button"
                        >
                            {ctaText}
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;  // 匯出 Header 元件
