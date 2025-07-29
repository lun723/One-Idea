export const STYLES = {
    sidebar: {
        buttonContainer: 'flex items-center',
        button: 'p-2 rounded-md text-gray-900 hover:bg-gray-100',
        container: 'fixed inset-y-0 right-0 w-full sm:w-64 bg-gradient-to-b from-white to-blue-100 shadow-lg',
        header: 'p-4 flex justify-end',
        inner: 'flex flex-col p-4 space-y-4',
        link: {
            base: 'sidebar-link',
            active: 'sidebar-link active',
            inactive: '',
        },
        subItemContainer: 'ml-6 flex flex-col space-y-2',
        subItemLink: 'text-sm text-gray-700 hover:text-blue-600 pl-4',
        ctaButton: 'block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700',
        overlay: 'fixed inset-0 bg-black/30',
    },
};

export const sidebarLinkWrapper = "relative group w-full block";
export const sidebarLinkText = "text-blue-900 px-2 py-2 block transition-colors duration-300 group-hover:text-blue-900";
export const sidebarLinkUnderline = "absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-900/30 transform -translate-x-1/2 origin-center transition-all duration-300 group-hover:w-full";


