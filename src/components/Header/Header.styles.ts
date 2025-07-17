// 定義一個名為 STYLES 的物件，包含 Header 元件中各區域和元素的樣式類別
export const STYLES = {
    // header 區域的背景漸變樣式，從白色過渡到透明
    header: 'bg-gradient-to-b from-white to-transparent',

    // nav 區域的最大寬度、左右邊距，並設置在不同螢幕尺寸下的內邊距
    nav: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',

    // container 區域的佈局樣式，設置為彈性盒模型，並將元素置中
    container: 'flex justify-between h-16',

    // logo 區域的樣式
    logo: {
        // logo 容器的樣式，防止它縮小並使其保持在 flex 容器內
        container: 'flex-shrink-0 flex items-center',
        
        // logo 文字的樣式，設置字體大小、字重和顏色
        text: 'text-2xl font-bold text-gray-800',
        
        // 當 logo 是圖像時，設置高度和寬度自動調整
        image: 'h-10 w-auto',
        
        // 圖像外層包裹的樣式
        wrapper: 'h-10 w-auto',
    },

    // navigation 區域的樣式，分為桌面和手機端的樣式
    navigation: {
        // 桌面端導航項目的樣式，隱藏於手機端，設置 margin 和間距
        desktop: 'hidden sm:ml-6 sm:flex sm:items-center space-x-8',
        
        // 手機端導航項目的樣式，顯示為 flex 佈局並居中
        mobile: 'sm:hidden flex items-center',
    },

    // navLink 區域的樣式，控制每個導航鏈接的基本樣式、激活狀態和非激活狀態
    navLink: {
        // 基本的鏈接樣式，設置內邊距、圓角和字體大小
        base: 'px-3 py-2 rounded-md text-sm font-medium',

        // 當鏈接被激活時的樣式，背景變灰色並且文字顏色變深
        active: 'text-gray-900 bg-gray-100',

        // 非激活狀態下的鏈接樣式，文字顏色較暗並在懸停時變顏色
        inactive: 'text-gray-600 hover:text-gray-900',
    },

    // cta（行動呼籲）區域的樣式
    cta: {
        // 桌面端的 cta 容器樣式，隱藏於手機端，設置 margin 和居中
        container: 'hidden sm:ml-6 sm:flex sm:items-center',

        // cta 按鈕的樣式，背景為藍色，文字為白色，並設有懸停效果
        button: 'bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300',
    },

    // mobileMenu（手機菜單）區域的樣式
    mobileMenu: {
        // 手機菜單按鈕的樣式，圓角並設置顏色變化
        button: 'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none',

        // 手機菜單的容器樣式，設置上下內邊距和項目間隔
        container: 'pt-2 pb-3 space-y-1',

        // 手機菜單鏈接的基本樣式，設置內邊距、圓角和字體大小
        link: {
            // 基本鏈接樣式
            base: 'block px-3 py-2 rounded-md text-base font-medium',

            // 當鏈接被激活時的樣式，背景變灰色並且文字顏色變深
            active: 'text-gray-900 bg-gray-50',

            // 非激活狀態下的鏈接樣式，文字顏色較暗並在懸停時變顏色
            inactive: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
        },

        // 手機菜單的 cta 按鈕樣式，背景為藍色，文字為白色，並設有懸停效果
        ctaButton: 'block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700',
    },
} as const; // 使用 `as const` 來將物件設為只讀，確保每個值都不會被修改
