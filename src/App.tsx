import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './config/routes';
import type { RouteConfig } from './config/routes';

// 遞迴渲染路由的輔助函數
const renderRoutes = (routeList: RouteConfig[]) => {
  return routeList.map(({ path, component: Component, subItems }) => (
    <Route key={path} path={path} element={<Component />}>
      {subItems && subItems.length > 0 && renderRoutes(subItems)}
    </Route>
  ));
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {renderRoutes(routes)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;