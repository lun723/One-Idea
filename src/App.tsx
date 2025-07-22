import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;