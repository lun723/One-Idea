import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import type { HeaderProps } from './Header.types';
import { STYLES } from './Header.styles';
import { isStringLogo, isImageLogo } from './Header.utils';
import Sidebar from '../Sidebar';
import IconButton from '../IconButton';

const Header: React.FC<HeaderProps> = ({ logo, navItems, className = '', 'data-testid': testId = 'header', }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const renderLogo = () => {
        if (isStringLogo(logo)) {
            return (
                <span className={STYLES.logo.text} data-testid="logo-text">{logo}</span>
            );
        }
        
        if (isImageLogo(logo)) {
            return (
                <img src={logo.src} alt={logo.alt} className={STYLES.logo.image} data-testid="logo-image"/>
            );
        }
        
        return (
            <div className={STYLES.logo.wrapper} data-testid="logo-custom">{logo}</div>
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`${STYLES.header} ${className} ${isVisible ? '' : 'hidden'}`} data-testid={testId}>
            <nav>
                <div className={STYLES.container}>
                    <div className={STYLES.logo.container}>
                        <NavLink to="/" className="flex items-center" data-testid="logo-link">{renderLogo()}</NavLink>
                    </div>
                    <div className={STYLES.sidebar.buttonContainer}>
                        <IconButton onClick={toggleSidebar} testId="sidebar-button" ariaLabel="Open menu" iconType="menu" />
                    </div>
                </div>
            </nav>
            <Sidebar navItems={navItems} isOpen={isSidebarOpen} onClose={closeSidebar}/>
        </header>
    );
};

export default Header;