import React from 'react';
import Content from '../components/Card';

const Services: React.FC = () => {
  return (
    <Content title="我們的服務">
      <p className="text-gray-600">我們提供以下服務：</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="border p-4 rounded">
          <h3 className="font-semibold">技術支持</h3>
          <p>24/7 技術支援服務</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-semibold">產品開發</h3>
          <p>客製化產品解決方案</p>
        </div>
      </div>
    </Content>
  );
};

export default Services;