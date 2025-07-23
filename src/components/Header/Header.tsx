import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { HeaderProps } from './Header.types';
import { STYLES } from './Header.styles';
import { isStringLogo, isImageLogo } from './Header.utils';
import Sidebar from '../Sidebar';
import IconButton from '../IconButton';

const Header: React.FC<HeaderProps> = ({ 
    logo, 
    navItems, 
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

                    <div className={STYLES.sidebar.buttonContainer}>
                        <IconButton
                            onClick={toggleSidebar}
                            testId="sidebar-button"
                            ariaLabel="Open menu"
                            iconType="menu"
                        />
                    </div>
                </div>
            </nav>

            {/* 側邊欄 */}
            <Sidebar 
                navItems={navItems}
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />
        </header>
    );
};

export default Header;