export interface HardSkill {
  title: string;
  type: string;
  description: string;
  icon?: string;
}

export const allHardSkills: HardSkill[] = [
  {
    title: 'Angular',
    type: 'framework',
    description: 'Typescript',
    icon: 'angular',
  },
  {
    title: 'Material',
    type: 'framework',
    description: 'Librairie Angular',
    icon: 'material',
  },
  {
    title: 'Ionic',
    type: 'framework',
    description: 'PWA',
    icon: 'ionic',
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
    title: 'SpringBoot',
    type: 'framework',
    description: 'Java',
    icon: 'springboot',
  },
  {
    title: 'ESLint',
    type: 'testing',
    description: 'Standardisation',
    icon: 'eslint',
  },
  {
    title: 'Jest',
    type: 'testing',
    description: 'Unitaires & Fonct.',
    icon: 'jest',
  },
  {
    title: 'Playwight',
    type: 'testing',
    description: 'E2E',
    icon: 'playwright',
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
    title: 'A.Effect',
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
