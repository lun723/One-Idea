export const generateTestId = (path: string, id?: string): string => {
    return `nav-link-${id || path.replace('/', '')}`;
};

export const getMenuIconPath = (isOpen: boolean): string => {
    return isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7';
};
