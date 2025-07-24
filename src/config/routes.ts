import Home from '../page/Home';
import About from '../page/About';
import Services from '../page/Services';
import Contact from '../page/Contact';
import Signup from '../page/Signup';

export interface RouteConfig {
    label: string;
    path: string;
    component: React.FC;
    isNavItem?: boolean;
    subItems?: RouteConfig[];
    id?: string; 
}

export const routes: RouteConfig[] = [
    { label: '首頁', path: '/', component: Home, isNavItem: true, id: 'home' },
    { label: '關於', path: '/about', component: About, isNavItem: true, id: 'about' },
    {
        label: '小工具',
        path: '/tools',
        component: Services,
        isNavItem: true,
        subItems: [
            { label: '諮詢服務', path: '/services/consulting', component: Services, isNavItem: true, id: 'consulting' },
            { label: '技術支持', path: '/services/support', component: Services, isNavItem: true, id: 'support' },
        ]
    },
    { label: '聯繫', path: '/contact', component: Contact, isNavItem: true, id: 'contact' },
    { label: '註冊', path: '/signup', component: Signup, isNavItem: false, id: 'signup' },
];