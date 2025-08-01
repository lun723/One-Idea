export const baseButtonClass =
    "group relative min-w-[8rem] h-12 bg-transparent text-lg text-blue-900 flex items-center justify-center hover:active:scale-95 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:text-gray-500";

export const swapCornerLines = [
    // 左上角 L：初始顯示 → hover 時縮回
    "absolute top-[-6px] left-[-6px] w-[75%] border-t-2 border-blue-900/30 origin-left transform transition-transform duration-300 group-hover:scale-x-0 group-disabled:border-gray-300/30",
    "absolute top-[-6px] left-[-6px] h-[50%] border-l-2 border-blue-900/30 origin-top transform transition-transform duration-300 group-hover:scale-y-0 group-disabled:border-gray-300/30",

    // 右下角 L：初始顯示 → hover 時縮回
    "absolute bottom-[-6px] right-[-6px] w-[75%] border-b-2 border-blue-900/30 origin-right transform transition-transform duration-300 group-hover:scale-x-0 group-disabled:border-gray-300/30",
    "absolute bottom-[-6px] right-[-6px] h-[50%] border-r-2 border-blue-900/30 origin-bottom transform transition-transform duration-300 group-hover:scale-y-0 group-disabled:border-gray-300/30",

    // 右上角 L：初始隱藏 → hover 展開
    "absolute top-[-6px] right-[-6px] w-[75%] border-t-2 border-blue-900/30 origin-right transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-disabled:border-gray-300/30",
    "absolute top-[-6px] right-[-6px] h-[50%] border-r-2 border-blue-900/30 origin-top transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100 group-disabled:border-gray-300/30",

    // 左下角 L：初始隱藏 → hover 展開
    "absolute bottom-[-6px] left-[-6px] w-[75%] border-b-2 border-blue-900/30 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-disabled:border-gray-300/30",
    "absolute bottom-[-6px] left-[-6px] h-[50%] border-l-2 border-blue-900/30 origin-bottom transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100 group-disabled:border-gray-300/30",
];