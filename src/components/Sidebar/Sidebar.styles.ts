export const STYLES = {
    sidebar: {
        buttonContainer: 'flex items-center',
        button: 'p-2 rounded-md text-gray-900 hover:bg-gray-100',
        container: 'fixed inset-y-0 right-0 w-full sm:w-64 bg-gradient-to-b from-white to-blue-100 shadow-lg duration-300 ease-in-out',
        open: 'translate-x-0 opacity-100',
        closed: 'translate-x-full opacity-0',
        header: 'p-4 flex justify-end',
        inner: 'flex flex-col p-4 space-y-4',
        link: {
            base: 'sidebar-link', // 引用 CSS 中的類名
            active: 'sidebar-link active', // 選取狀態添加 active 類
            inactive: '',
        },
        ctaButton: 'block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700',
    },
};