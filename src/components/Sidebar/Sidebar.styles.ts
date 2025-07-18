export const STYLES = {
    sidebar: {
        buttonContainer: 'flex items-center',
        button: 'p-2 rounded-md text-gray-900 hover:bg-gray-100',
        container: 'fixed inset-y-0 right-0 w-full sm:w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out',
        open: 'translate-x-0 opacity-100',
        closed: 'translate-x-full opacity-0',
        header: 'p-4 flex justify-end', // 新增 header 樣式，右側對齊 closeButton
        inner: 'flex flex-col p-4 space-y-4', // 移除 relative，因為 closeButton 現在獨立
        closeButton: 'p-2 rounded-md text-gray-900 hover:bg-gray-100', // 移除 absolute 定位
        link: {
            base: 'block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md',
            active: 'bg-gray-100 font-semibold',
            inactive: '',
        },
        ctaButton: 'block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700',
    },
};