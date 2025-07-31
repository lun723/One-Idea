import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './config/routes';
import type { RouteConfig } from './config/routes';
import { ModalProvider } from './context/modalContext';
import { LoadingProvider } from './context/LoadingContext';

const renderRoutes = (routeList: RouteConfig[]) => {
  return routeList.map(({ path, component: Component, subItems }) => (
    <Route key={path} path={path} element={<Component />}>
      {subItems && subItems.length > 0 && renderRoutes(subItems)}
    </Route>
  ));
};

function App() {
  return (
    <LoadingProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                {renderRoutes(routes)}
              </Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </LoadingProvider>
  );
}

export default App;