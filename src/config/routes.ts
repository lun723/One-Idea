import Home from '../page/Home';
import About from '../page/About';
import Services from '../page/Services';
import Contact from '../page/Contact';
import Signup from '../page/Signup';

export interface RouteConfig {
    label: string;
    path: string;
    component: React.FC;
    isNavItem?: boolean; // 是否顯示在導航欄
}

export const routes: RouteConfig[] = [
    { label: '首頁', path: '/', component: Home, isNavItem: true },
    { label: '關於', path: '/about', component: About, isNavItem: true },
    { label: '服務', path: '/services', component: Services, isNavItem: true },
    { label: '聯繫', path: '/contact', component: Contact, isNavItem: true },
    { label: '註冊', path: '/signup', component: Signup, isNavItem: false },
];