import React from 'react';
import Content from '../components/Card';

const Home: React.FC = () => {
  return (
    <div>
      <Content title="首頁">
        <p className="text-gray-600">
          歡迎來到我們的網站！探索我們的服務和特色。
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          了解更多
        </button>
      </Content>
    </div>
  );
};

export default Home;