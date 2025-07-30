import Home from '../page/Home';
import About from '../page/About';
import Japan from '../page/travel/Japan';
import Contact from '../page/Contact';

export interface RouteConfig {
    label: string;
    path: string;
    component: React.FC;
    isNavItem?: boolean;
    subItems?: RouteConfig[];
    id?: string; 
}

export const routes: RouteConfig[] = [
    { label: 'Home', path: '/', component: Home, isNavItem: true, id: 'home' },
    { label: 'About', path: '/about', component: About, isNavItem: true, id: 'about' },
    {
        label: 'Travel',
        path: '/travel',
        component: Japan,
        isNavItem: true,
        subItems: [
            { label: 'Japan', path: '/travel/Japan', component: Japan, isNavItem: true, id: 'Japan' },
        ]
    },
    { label: 'Contact', path: '/contact', component: Contact, isNavItem: true, id: 'contact' },
];