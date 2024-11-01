export interface HardSkill {
    title: string;
    type: string;
    description: string;
    icon?: string;
}

export const allHardSkills: HardSkill[] = [
    {
        title: 'HTML',
        type: 'langages',
        description: 'Balisage web',
        icon: 'html',
    },
    {
        title: 'CSS/SASS',
        type: 'langages',
        description: 'Styles',
        icon: 'css',
    },
    {
        title: 'Javascript',
        type: 'langages',
        description: 'Intéraction',
        icon: 'javascript',
    },
    {
        title: 'Typescript',
        type: 'langages',
        description: 'Intération et typage',
        icon: 'typescript',
    },
    {
        title: 'PHP',
        type: 'langages',
        description: 'Server-side',
        icon: 'php',
    },
    {
        title: 'NodeJS',
        type: 'langages',
        description: 'Server-Side',
        icon: 'nodejs',
    },
    {
        title: 'Angular',
        type: 'framework',
        description: 'Typescript',
        icon: 'angular',
    },
    {
        title: 'NestJS',
        type: 'framework',
        description: 'NodeJS',
        icon: 'nestjs',
    },
    {
        title: 'Symfony',
        type: 'framework',
        description: 'PHP',
        icon: 'symfony',
    },
    {
        title: 'React',
        type: 'framework',
        description: 'Javascript',
        icon: 'react',
    },
    {
        title: 'AdobeXD',
        type: 'UX',
        description: 'Wireframe & Maquette',
        icon: 'adobexd',
    },
    {
        title: 'Figma',
        type: 'UX',
        description: 'Wireframe & Maquette',
        icon: 'figma',
    },
    {
        title: 'Photohop',
        type: 'UX',
        description: 'Edition image',
        icon: 'photoshop',
    },
    {
        title: 'TailwindCSS',
        type: 'framework',
        description: 'librairie CSS',
        icon: 'tailwind',
    },
    {
        title: 'After Effect',
        type: 'UX',
        description: 'Edition vidéo',
        icon: 'ae',
    },
    {
        title: 'Blender',
        type: 'UX',
        description: 'Modélisation 3D',
        icon: 'blender',
    },
    {
        title: 'Linux',
        type: 'autres',
        description: 'Environment',
        icon: 'linux',
    },
    {
        title: 'GIT',
        type: 'autres',
        description: 'Versioning',
        icon: 'git',
    },
    {
        title: 'Docker',
        type: 'autres',
        description: 'Conteneurisation',
        icon: 'docker',
    },
    {
        title: 'PostgreSQL',
        type: 'autres',
        description: 'Gestion de base de données',
        icon: 'postgresql',
    },
]