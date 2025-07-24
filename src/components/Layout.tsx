import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Logo from '../assets/cat.svg';
import { routes } from '../config/routes';
import type { RouteConfig } from '../config/routes';

const navItems: RouteConfig[] = routes.filter(route => route.isNavItem);

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100 relative">
      <Header 
        logo={<img src={Logo} alt="Logo" className="h-10 w-auto" />}
        navItems={navItems}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;