// 從 './Header.types' 檔案匯入 LogoType 和 ImageLogo 型別
import type { LogoType, ImageLogo } from './Header.types';

// 類型守衛函數：檢查 `logo` 是否是字串類型
// 這個函數的目的是幫助我們在使用 `logo` 時，確保它的型別是字串
export const isStringLogo = (logo: LogoType): logo is string => {
    return typeof logo === 'string'; // 如果 logo 是字串，則返回 true
};

// 類型守衛函數：檢查 `logo` 是否是 ImageLogo 類型
// 這個函數檢查 logo 是否是物件並且具有 `src` 屬性
export const isImageLogo = (logo: LogoType): logo is ImageLogo => {
    return logo !== null && typeof logo === 'object' && 'src' in logo; 
    // 確保 logo 不是 null，並且是物件，且該物件擁有 `src` 屬性
};

// 生成測試 ID 的工具函數
// 此函數會根據路徑和可選的 id 生成一個測試 ID，常用於測試環境中的 DOM 標識
export const generateTestId = (path: string, id?: string): string => {
    // 返回格式化後的測試 ID，若 id 存在則使用 id，否則從 path 生成 ID
    return `nav-link-${id || path.replace('/', '')}`;
};

// 漢堡選單圖示路徑
// 此函數根據是否開啟菜單來選擇對應的漢堡選單圖示路徑
export const getMenuIconPath = (isOpen: boolean): string => {
    // 如果 isOpen 為 true，則返回一個斜交叉圖示的路徑；若是 false，則返回正常的漢堡菜單路徑
    return isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7';
};
