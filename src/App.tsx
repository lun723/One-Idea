import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './config/routes';
import type { RouteConfig } from './config/routes';
import { ModalProvider } from './context/modalContext';

const renderRoutes = (routeList: RouteConfig[]) => {
  return routeList.map(({ path, component: Component, subItems }) => (
    <Route key={path} path={path} element={<Component />}>
      {subItems && subItems.length > 0 && renderRoutes(subItems)}
    </Route>
  ));
};

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              {renderRoutes(routes)}
            </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;