import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * AppleSection 組件的 Props 型別定義
 */
interface AppleSectionProps {
  children: React.ReactNode;           // 子元素內容
  className?: string;            // 額外的 CSS 類別
  fullHeight?: boolean;          // 是否為全螢幕高度
}

/**
 * Apple 風格的滾動觸發區塊組件
 * 當使用者滾動到該區塊時，會觸發淡入和上移動畫效果
 */
const AppleSection: React.FC<AppleSectionProps> = ({
  children,
  className = "",
  fullHeight = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // 取得滾動進度（0~1）
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // 元素進入視窗底部到離開視窗頂部
  });

  // 透明度：滾動進度 0~0.3 時從 0~1
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  // 垂直位移：滾動進度 0~0.3 時從 50px~0px
  const translateY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <motion.div
      ref={ref}
      className={`
        ${fullHeight ? "min-h-screen" : "min-h-[80vh]"}
        flex items-center justify-center
        transition-all duration-1000 ease-out
        ${className}
      `}
      style={{
        opacity,
        y: translateY,
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * 主頁組件
 * 包含多個 Apple 風格的滾動區塊
 */
const Home: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero 區塊 */}
      <AppleSection className="bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 py-16">
          {/* 可放大頭貼或圖示 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">李心綸</h1>
          <h2 className="text-xl md:text-2xl font-light mb-4 text-gray-700">前端工程師</h2>
          <p className="text-lg text-gray-600 mb-6">
            擁有一年以上 React.js 前端開發經驗，熟悉 Vite、MUI、Ant Design、Bootstrap，具備 RWD 響應式設計與團隊協作能力。
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">React.js</span>
            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">Vite</span>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">MUI</span>
            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
            <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm">RWD</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">SCSS/SASS</span>
            <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm">Git</span>
            <span className="bg-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-sm">API 串接</span>
            <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">AWS</span>
          </div>
          <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">學歷</h2>
          <div>
            <span className="font-bold">南臺科技大學</span>
            <span className="ml-2 text-gray-700">資訊管理系</span>
          </div>
        </div>
          <div className="flex gap-4 justify-center">
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">Email</a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </AppleSection>

      {/* 經歷區塊 */}
      <AppleSection className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">工作經歷</h2>
          <div className="mb-4">
            <div className="flex items-center">
              <span className="font-bold text-lg">越世實業股份有限公司</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>參與1項開發專案、4項維運及開發專案，具中大型專案經驗</li>
              <li>與SA、SD討論UI/UX、API規格，開發專案畫面</li>
              <li>使用React.js元件模組化、自訂功能函式、路由管理</li>
              <li>導入Vite、MUI、Bootstrap，實現快速開發與一致性設計</li>
              <li>前端專案部屬至AWS（S3、CloudFront）</li>
            </ul>
          </div>
        </div>
      </AppleSection>

    </div>
  );
};

export default Home;