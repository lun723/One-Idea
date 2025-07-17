// 匯出 Header 元件的預設匯出
export { default } from './Header'; 
// 這行會將 `Header` 這個元件作為預設匯出。
// 用戶可以像這樣使用：
// import Header from './path/to/Header';

// 匯出 Header 元件的命名匯出
export { default as Header } from './Header'; 
// 這行程式碼將 `Header` 元件作為命名匯出來導出。
// 用戶可以像這樣使用：
// import { Header } from './path/to/Header';

// 匯出所有 `Header.types` 檔案中的型別定義
export * from './Header.types'; 
// 這行程式碼會將 `Header.types` 檔案中所有的匯出項目（型別和介面）匯出。
// 用戶可以像這樣使用：
// import { HeaderProps, NavItem } from './path/to/Header';

// 匯出 `Header.styles` 檔案中的 STYLES 常數
export { STYLES } from './Header.styles'; 
// 這行程式碼將 `Header.styles` 檔案中的 `STYLES` 物件匯出。
// 用戶可以像這樣使用：
// import { STYLES } from './path/to/Header';

// 匯出 `Header.utils` 檔案中的所有內容
export * from './Header.utils'; 
// 這行程式碼會將 `Header.utils` 檔案中所有的匯出項目（如工具函數）重新匯出。
// 用戶可以像這樣使用：
// import { isStringLogo, isImageLogo } from './path/to/Header';