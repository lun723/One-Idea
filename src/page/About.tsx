import React from 'react';
// import Content from '../components/Content';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8 pt-30">
      <p className="text-gray-600">
        我們是一家致力於創新和客戶滿意度的公司，成立於 2020 年。
      </p>
      <ul className="list-disc pl-5 mt-2">
        <li>使命：提供高品質的解決方案</li>
        <li>願景：成為行業領導者</li>
      </ul>
    </div>
  );
};

export default About;