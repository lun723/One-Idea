import About from '../views/page/About';
import Error from '../views/page/Error';
import Home from '../views/page/Home';
import Pokemon from '../views/page/practise/pokeapi';
export interface RouteConfig {
    label: string;
    path: string;
    component: React.FC;
    isNavItem?: boolean;
    subItems?: RouteConfig[];
    id?: string; 
}

export const routes: RouteConfig[] = [
    { label: '首頁', path: '/One-Idea/', component: Home, isNavItem: true, id: 'home' },
    { label: '關於', path: '/about', component: About, isNavItem: true, id: 'about' },
    {
        label: '練習',
        path: '/practise',
        component: Pokemon,
        isNavItem: true,
        subItems: [
            { label: 'Pokemon', path: '/practise/pokeapi', component: Pokemon, isNavItem: true, id: 'pokeapi' },
        ]
    },
    { label: '錯誤', path: '*', component: Error, isNavItem: false, id: 'error' }
];