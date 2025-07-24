import React from 'react';
import Content from '../components/Card';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8 pt-30">
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