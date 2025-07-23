// Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Logo from '../assets/cat.svg';
import { routes } from '../config/routes';
import type { RouteConfig } from '../config/routes';

const navItems: RouteConfig[] = routes.filter(route => route.isNavItem);

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      <Header 
        logo={<img src={Logo} alt="Logo" className="h-10 w-auto" />}
        navItems={navItems}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;