import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Logo from '../assets/cat.svg';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: '首頁', path: '/' },
  { label: '關於', path: '/about' },
  { label: '服務', path: '/services' },
  { label: '聯繫', path: '/contact' },
];

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      <Header 
        logo={<img src={Logo} alt="Logo" className="h-10 w-auto" />}
        navItems={navItems}
        ctaText="註冊"
        ctaPath="/signup"
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;