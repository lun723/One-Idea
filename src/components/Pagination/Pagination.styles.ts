export const STYLES = {
    pagination: {
        container: 'flex justify-between gap-4 m-6',
        linkWrapper: 'relative group w-fit block',
        linkContent: 'flex items-center gap-2',
        linkText: 'px-2 py-2 block transition-colors duration-300',
        icon: 'h-6 w-6',
        underline: 'absolute bottom-0 w-0 h-[2px] bg-blue-900/30 transition-all duration-300 group-hover:w-full',
        previousUnderline: 'right-0',
        nextUnderline: 'left-0',
        enabledLink: 'cursor-pointer text-blue-900 group-hover:text-blue-900',
        disabledLink: 'text-gray-400 cursor-not-allowed',
    },
};