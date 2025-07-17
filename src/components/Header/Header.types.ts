// 匯入 ReactNode 型別，並且使用 `import type` 確保這僅在編譯階段使用，不會被實際引入到運行時
import type { ReactNode } from 'react';

// 定義 NavItem 介面，描述導航項目的結構
export interface NavItem {
    label: string; // 導航項目的顯示文字
    path: string;  // 導航項目的目標路徑（URL）
    id?: string;   // 可選的 id，用來唯一標識該導航項目
}

// 定義 ImageLogo 介面，描述圖片標誌的結構
export interface ImageLogo {
    src: string;  // 圖片的 URL 路徑
    alt: string;  // 圖片的替代文字（對於可訪問性和SEO很重要）
}

// 定義 HeaderProps 介面，描述 Header 元件所需的所有屬性
export interface HeaderProps {
    logo: string | ImageLogo | ReactNode; // logo 可以是字串、ImageLogo 物件或任何可渲染的 React 元素
    navItems: NavItem[];  // 一組導航項目，每個項目都是 NavItem 類型
    ctaText: string;      // 行動呼籲文字（如：立即註冊、了解更多等）
    ctaPath: string;      // 行動呼籲的目標路徑（即用戶點擊後會導航到的 URL）
    className?: string;   // 可選的 CSS 類別，用來自訂樣式
    'data-testid'?: string; // 可選的測試 ID，通常用於測試過程中的 DOM 選擇器
}

// 定義 LogoType 類型，該類型代表 HeaderProps 中的 logo 屬性型別
export type LogoType = HeaderProps['logo']; // LogoType 會是 string | ImageLogo | ReactNode 三者之一
