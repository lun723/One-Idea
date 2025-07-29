// 匯出 Sidebar 元件的預設匯出
export { default } from './Tickers'; 
// 這行會將 `Sidebar` 元件作為預設匯出。
// 用戶可以像這樣使用：
// import Sidebar from './Sidebar';

// 匯出 Sidebar 元件的命名匯出
export { default as Sidebar } from './Tickers'; 
// 這行程式碼將 `Sidebar` 元件作為命名匯出來導出。
// 用戶可以像這樣使用：
// import { Sidebar } from './Sidebar';

// 匯出所有 `Sidebar.types` 檔案中的型別定義
export * from './Tickers.types'; 
// 這行程式碼會將 `Sidebar.types` 檔案中所有的匯出項目（型別和介面）匯出。
// 用戶可以像這樣使用：
// import { SidebarProps } from './Sidebar';

// 匯出 `Sidebar.styles` 檔案中的 STYLES 常數
export { STYLES } from './Tickers.styles'; 
// 這行程式碼將 `Sidebar.styles` 檔案中的 `STYLES` 物件匯出。
// 用戶可以像這樣使用：
// import { STYLES } from './Sidebar';

// 匯出 `Sidebar.utils` 檔案中的所有內容
export * from './Tickers.utils'; 
// 這行程式碼會將 `Sidebar.utils` 檔案中所有的匯出項目（如工具函數）重新匯出。
// 用戶可以像這樣使用：
// import { generateTestId } from './Sidebar';

// 匯出 `Sidebar.animations` 檔案中的所有動畫配置
export * from './Tickers.animations';
// 這行程式碼會將 `Sidebar.animations` 檔案中所有的動畫變數和配置匯出。
// 用戶可以像這樣使用：
// import { sidebarVariants, ANIMATION_CONFIG } from './Sidebar';