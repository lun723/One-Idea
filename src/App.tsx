import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>首頁內容</div>} />
          <Route path="/about" element={<div>關於內容</div>} />
          <Route path="/services" element={<div>服務內容</div>} />
          <Route path="/contact" element={<div>聯繫內容</div>} />
          <Route path="/signup" element={<div>註冊頁面</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;