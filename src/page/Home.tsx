import React, { useState, useEffect, useRef, ReactNode } from 'react';

/**
 * AppleSection 組件的 Props 型別定義
 */
interface AppleSectionProps {
  children: ReactNode;           // 子元素內容
  className?: string;            // 額外的 CSS 類別
  fullHeight?: boolean;          // 是否為全螢幕高度
}

/**
 * Apple 風格的滾動觸發區塊組件
 * 當使用者滾動到該區塊時，會觸發淡入和上移動畫效果
 */
const AppleSection: React.FC<AppleSectionProps> = ({ 
  children, 
  className = '', 
  fullHeight = true 
}) => {
  // 控制元素是否已經進入視窗的狀態
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  // 控制元素透明度的狀態（0-1之間）
  const [opacity, setOpacity] = useState<number>(0);
  
  // 用於引用 DOM 元素的 ref
  const sectionRef = useRef<HTMLDivElement | null>(null);

  /**
   * useEffect Hook 用於設置 Intersection Observer
   * 監聽元素是否進入或離開視窗範圍
   */
  useEffect(() => {
    // 創建 Intersection Observer 實例
    const observer = new IntersectionObserver(
      (entries) => {
        // 遍歷所有被觀察的元素
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 元素進入視窗時設置為可見
            setIsVisible(true);
            
            // 根據元素在視窗中的比例計算透明度
            // intersectionRatio: 元素可見部分的比例 (0-1)
            const ratio = entry.intersectionRatio;
            // 透明度 = 比例 × 1.5，但最大不超過 1
            setOpacity(Math.min(ratio * 1.5, 1));
          } else {
            // 元素離開視窗時設置透明度為 0
            setOpacity(0);
          }
        });
      },
      {
        // threshold: 設置觸發回調的可見比例閾值
        // 這裡設置了多個閾值，讓動畫更加平滑
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        
        // rootMargin: 擴展或縮小根邊界框
        // '-10% 0px -10% 0px' 表示上下各縮小 10%，讓動畫提前觸發
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // 如果 DOM 元素存在，開始觀察它
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 清理函數：組件卸載時停止觀察
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // 空依賴陣列表示只在組件掛載時執行一次

  return (
    <div
      ref={sectionRef}
      className={`
        ${fullHeight ? 'min-h-screen' : 'min-h-[80vh]'} 
        flex items-center justify-center 
        transition-all duration-1000 ease-out 
        ${className}
      `}
      style={{
        // 使用狀態控制透明度
        opacity: opacity,
        
        // 使用狀態控制垂直位移
        // 未可見時向下偏移 50px，可見時歸位
        transform: `translateY(${isVisible ? 0 : 50}px)`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * 主頁組件
 * 包含多個 Apple 風格的滾動區塊
 */
const Home: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* Hero Section - 主標題區塊 */}
      <AppleSection className="text-black">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* 主標題：使用超大字體和極細字重 */}
          <h1 className="text-6xl md:text-8xl font-thin mb-8 tracking-tight">
            Think Different
          </h1>
          {/* 副標題：較小字體，灰色文字 */}
          <p className="text-xl md:text-2xl font-light text-gray max-w-2xl mx-auto">
            探索無限可能，創造非凡體驗
          </p>
        </div>
      </AppleSection>

      {/* Product Showcase 1 - 產品展示區塊（圖文並排） */}
      <AppleSection className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 items-center">
          {/* 左側文字內容 */}
          <div>
            <h2 className="text-4xl md:text-6xl font-thin mb-6 text-gray-900">
              創新設計
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              每一個細節都經過精心雕琢，為您帶來前所未有的使用體驗。
              簡約而不簡單，優雅而富有功能性。
            </p>
            {/* 行動按鈕：藍色背景，圓角設計 */}
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg">
              了解更多
            </button>
          </div>
          
          {/* 右側視覺元素：模擬產品圖片 */}
          <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl h-96 flex items-center justify-center shadow-2xl">
            <span className="text-white text-8xl">📱</span>
          </div>
        </div>
      </AppleSection>

      {/* Full Width Image Section - 全寬度圖片區塊 */}
      <AppleSection className="bg-gray-900 text-white">
        <div className="w-full relative">
          {/* 漸變遮罩層：從黑色到透明的漸變效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          
          {/* 背景區域：使用漸變色模擬大圖 */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-800 h-screen w-full flex items-center justify-center">
            {/* 文字內容：使用較高的 z-index 確保在遮罩層之上 */}
            <div className="text-center z-20 relative">
              <h2 className="text-5xl md:text-7xl font-thin mb-6">
                突破界限
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-200">
                重新定義可能性的邊界
              </p>
            </div>
          </div>
        </div>
      </AppleSection>

      {/* Feature Grid - 特色功能網格區塊 */}
      <AppleSection className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* 區塊標題 */}
          <h2 className="text-4xl md:text-6xl font-thin text-center mb-16 text-gray-900">
            核心特色
          </h2>
          
          {/* 三欄網格佈局 */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* 特色卡片 1：極速效能 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* 圖示容器：綠色圓角正方形 */}
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">極速效能</h3>
              <p className="text-gray-600 leading-relaxed">
                採用最新技術，提供無與倫比的速度和效能表現。
              </p>
            </div>
            
            {/* 特色卡片 2：安全可靠 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">安全可靠</h3>
              <p className="text-gray-600 leading-relaxed">
                頂級安全防護，讓您的數據和隱私得到最完善的保護。
              </p>
            </div>
            
            {/* 特色卡片 3：精美設計 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">精美設計</h3>
              <p className="text-gray-600 leading-relaxed">
                每一個像素都經過精心設計，創造出令人驚豔的視覺體驗。
              </p>
            </div>
          </div>
        </div>
      </AppleSection>

      {/* Product Showcase 2 - 第二個產品展示區塊（深色主題） */}
      <AppleSection className="bg-black text-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 items-center">
          {/* 左側視覺元素：不同配色的漸變 */}
          <div className="bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-3xl h-96 flex items-center justify-center shadow-2xl">
            <span className="text-white text-8xl">💻</span>
          </div>
          
          {/* 右側文字內容 */}
          <div>
            <h2 className="text-4xl md:text-6xl font-thin mb-6">
              專業工具
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              為專業人士量身打造的工具集，讓創意無限延伸，
              讓工作效率達到新的高度。
            </p>
            {/* 白色按鈕：在深色背景下的對比設計 */}
            <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg font-medium">
              立即體驗
            </button>
          </div>
        </div>
      </AppleSection>

      {/* Statistics Section - 統計數據區塊 */}
      <AppleSection className="bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-thin mb-16 text-gray-900">
            數字說話
          </h2>
          
          {/* 三欄統計數據 */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* 統計項目 1：用戶數量 */}
            <div>
              <div className="text-5xl md:text-7xl font-thin text-blue-600 mb-4">
                100M+
              </div>
              <p className="text-xl text-gray-600">用戶信任</p>
            </div>
            
            {/* 統計項目 2：可靠性 */}
            <div>
              <div className="text-5xl md:text-7xl font-thin text-green-600 mb-4">
                99.9%
              </div>
              <p className="text-xl text-gray-600">可靠性</p>
            </div>
            
            {/* 統計項目 3：服務時間 */}
            <div>
              <div className="text-5xl md:text-7xl font-thin text-purple-600 mb-4">
                24/7
              </div>
              <p className="text-xl text-gray-600">全天候支援</p>
            </div>
          </div>
        </div>
      </AppleSection>

      {/* Call to Action - 行動呼籲區塊 */}
      <AppleSection className="bg-black text-white">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-thin mb-8">
            準備好開始了嗎？
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-2xl mx-auto">
            加入我們，一起創造更美好的未來
          </p>
          
          {/* 雙按鈕設計：主要和次要行動 */}
          <div className="space-x-6">
            {/* 主要按鈕：藍色填充 */}
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-medium">
              立即開始
            </button>
            
            {/* 次要按鈕：透明邊框 */}
            <button className="border border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium">
              了解更多
            </button>
          </div>
        </div>
      </AppleSection>
    </div>
  );
};

export default Home;