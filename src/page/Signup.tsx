import React from 'react';
import Content from '../components/Card';

const Signup: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8 pt-30">
      <Content title="註冊">
        <p className="text-gray-600">立即註冊以體驗我們的服務！</p>
        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="用戶名"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="電子郵件"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="密碼"
            className="w-full border p-2 rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            註冊
          </button>
        </div>
      </Content>
    </div>
  );
};

export default Signup;