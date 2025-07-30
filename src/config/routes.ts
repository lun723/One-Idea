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
    { label: 'Home', path: '/', component: Home, isNavItem: true, id: 'home' },
    { label: 'About', path: '/about', component: About, isNavItem: true, id: 'about' },
    {
        label: 'Practise',
        path: '/practise',
        component: pokeapi,
        isNavItem: true,
        subItems: [
            { label: 'pokeapi', path: '/practise/pokeapi', component: pokeapi, isNavItem: true, id: 'pokeapi' },
        ]
    }
];