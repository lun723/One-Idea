import Home from '../page/Home';
import About from '../page/About';
import pokeapi from '../page/practise/pokeapi';

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
        label: '練習',
        path: '/practise',
        component: pokeapi,
        isNavItem: true,
        subItems: [
            { label: 'Pokemon', path: '/practise/pokeapi', component: pokeapi, isNavItem: true, id: 'pokeapi' },
        ]
    }
];