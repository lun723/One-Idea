import { React , ViteJS , MaterialUI , Bootstrap5 , Sass , Git , GitHubLight , GitLab , AWS , NodeJs , Canva } from 'developer-icons';
import type { ReactNode } from 'react';

export interface SkillConfig {
    icon: string | ReactNode;
    text: string;
}

export const skillsConfig: Record<string, SkillConfig> = {
    'React.js': { 
        icon: <React />, 
        text: 'React.js Framework' 
    },
    'Vite': { 
        icon: <ViteJS />, 
        text: 'Vite Build Tool' 
    },
    'MUI': { 
        icon: <MaterialUI />, 
        text: 'Material-UI Library' 
    },
    'Bootstrap': { 
        icon: <Bootstrap5 />, 
        text: 'Bootstrap CSS Framework' 
    },
    'Ant Design': { 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="80" height="80">
                <defs>
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1=".621" y1="0" x2="1.082" y2=".379" gradientTransform="matrix(94.54297 0 0 127.17188 .418 .406)">
                        <stop offset="0" stopColor="#4285eb" stopOpacity="1" />
                        <stop offset="1" stopColor="#2ec7ff" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1=".696" y1="0" x2=".54" y2="1.085" gradientTransform="matrix(94.54297 0 0 127.17188 .418 .406)">
                        <stop offset="0" stopColor="#29cdff" stopOpacity="1" />
                        <stop offset=".379" stopColor="#148eff" stopOpacity="1" />
                        <stop offset="1" stopColor="#0a60ff" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1=".697" y1="-.13" x2=".167" y2="1.174" gradientTransform="matrix(31.49219 0 0 49.5586 96.176 39.402)">
                        <stop offset="0" stopColor="#fa816e" stopOpacity="1" />
                        <stop offset=".415" stopColor="#f74a5c" stopOpacity="1" />
                        <stop offset="1" stopColor="#f51d2c" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="d" gradientUnits="userSpaceOnUse" x1=".681" y1="-.357" x2=".304" y2="1.149" gradientTransform="matrix(30.21094 0 0 30.1836 49.227 49.188)">
                        <stop offset="0" stopColor="#fa8e7d" stopOpacity="1" />
                        <stop offset=".513" stopColor="#f74a5c" stopOpacity="1" />
                        <stop offset="1" stopColor="#f51d2c" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <path fill="url(#a)" d="M58.617 2.672 2.676 58.566a7.672 7.672 0 0 0 0 10.868l55.941 55.894a7.684 7.684 0 0 0 10.871 0l23.457-23.437a6.891 6.891 0 0 0 0-9.746 6.9 6.9 0 0 0-9.754 0l-17.78 17.765c-.75.75-1.888.75-2.634 0L18.102 65.277c-.747-.75-.747-1.886 0-2.632l44.675-44.637c.746-.746 1.883-.746 2.633 0l17.781 17.765a6.9 6.9 0 0 0 9.754 0 6.891 6.891 0 0 0 0-9.746L69.492 2.594c-3.02-2.938-7.879-2.914-10.875.078Z" />
                <path fill="url(#b)" d="M58.617 2.672 2.676 58.566a7.672 7.672 0 0 0 0 10.868l55.941 55.894a7.684 7.684 0 0 0 10.871 0l23.457-23.437a6.891 6.891 0 0 0 0-9.746 6.9 6.9 0 0 0-9.754 0l-17.78 17.765c-.75.75-1.888.75-2.634 0L18.102 65.277c-.747-.75-.747-1.886 0-2.632l44.675-44.637c1.864-1.606 4.903-4.86 9.371-5.621 3.317-.567 6.946.68 10.883 3.734-2.633-2.633-7.144-7.14-13.539-13.527-3.02-2.938-7.879-2.914-10.875.078Z" />
                <path fill="url(#c)" d="M98.36 86.945a6.9 6.9 0 0 0 9.753 0l17.301-17.285a7.667 7.667 0 0 0 0-10.863l-17.453-17.379a6.91 6.91 0 0 0-9.762.012 6.884 6.884 0 0 0 0 9.746l11.79 11.777a1.826 1.826 0 0 1 0 2.629l-11.63 11.621a6.88 6.88 0 0 0 0 9.742Z" />
                <path fill="url(#d)" d="M79.438 64.281c0-8.336-6.762-15.094-15.106-15.094-8.34 0-15.105 6.758-15.105 15.094 0 8.332 6.765 15.09 15.105 15.09 8.344 0 15.106-6.758 15.106-15.09Z" />
            </svg>
        ),
        text: 'Ant Design UI'
    },
    'RWD響應式網頁設計': { 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
        ),
        text: 'Responsive Web Design' 
    },
    'SCSS/SASS': { 
        icon: <Sass />, 
        text: 'SCSS/SASS Styling' 
    },
    'Git': { 
        icon: <Git />, 
        text: 'Git Version Control' 
    },
    'Github': { 
        icon: <GitHubLight />, 
        text: 'GitHub Repository' 
    },
    'GitLab': { 
        icon: <GitLab />, 
        text: 'GitLab CI/CD' 
    },
    'API 串接': { 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        ),
        text: 'API Integration' 
    },
    'AWS': { 
        icon: <AWS />, 
        text: 'Amazon Web Services' 
    },
    'Node.js': { 
        icon: <NodeJs />, 
        text: 'Node.js Runtime' 
    },
    'Canva': { 
        icon: <Canva />, 
        text: 'Canva Design Tool' 
    },
};

export const skills = Object.keys(skillsConfig);