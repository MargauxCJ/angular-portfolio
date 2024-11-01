export interface Project {
    title: string;
    type: string;
    supports: string[];
    description: string;
    tags: string[]
    img?: string;
    link: string;
};

export const allProjects: Project[] = [
    {
        title: 'Hipo Training',
        type: 'Entraînement Equin',
        supports: [
            'Web&Mobile',
            'Backoffice',
            'Conception',
        ],
        description: 'Programme d\'entraînement sur-mesure pour chevaux, suivis des exercices',
        tags: [
            'Symfony',
            'Angular',
            'API REST',
            'Ionic',
            'Nx',
        ],
        img: 'Hipo',
        link: 'https://forlabs.fr/realisations/un-programme-equestre',
    },
    {
        title: 'Mimo',
        type: 'E-santé',
        supports: [
            'Web&Mobile',
            'Backoffice',
            'Conception',
        ],
        description: 'Suivis des patients atteints de schizophrénie, questionnaire quotidien ou hebdomadaire et suivis de l\'évolution des réponses dans un backoffice prévu pour les médecins',
        tags: [
            'Symfony',
            'Angular',
            'Ionic',
        ],
        img: 'Mimo',
        link: 'https://forlabs.fr/realisations/mimo-une-app-compagnon-pour-les-personnes-souffrant-de-schizophrenie',
    },
    {
        title: 'Klodios',
        type: 'E-santé',
        supports: [
            'Web&Mobile',
            'Backoffice',
            'Conception',
        ],
        description: 'Plateforme de partage d\'informations médicale entre le corps médical et les laboratoires, implémentation de pro-santé connect pour l\'authentification.',
        tags: [
            'Symfony',
            'Angular',
            'Ionic',
            'API REST',
        ],
        img: 'Klodios',
        link: 'https://klodios.com/',
    },
    {
        title: 'Sibel',
        type: 'Transition énergétique',
        supports: [
            'Web&Mobile',
            'Backoffice',
            'Conception',
        ],
        description: 'Améliorer l\'efficacité des conseillers techniques, faciliter la gestion des dossiers',
        tags: [
            'Symfony',
            'API REST',
            'Angular',
            'Ionic',
        ],
        img: 'Sibel',
        link: 'https://forlabs.fr/realisations/sibel-energie-simulateur-energetique',
    },
    {
        title: 'FollowMe',
        type: 'E-santé',
        supports: [
            'Web&Mobile',
            'Backoffice',
            'Conception',
        ],
        description: 'Suivis du parcours patient aux urgences en temps réel étape par étape, traçabilité des différents examens',
        tags: [
            'Symfony',
            'API REST',
            'Angular',
            'Ionic',
        ],
        img: 'FollowMe',
        link: 'https://forlabs.fr/realisations/followme-lapplication-pour-faire-reculer-lattente-aux-urgences',
    },
    {
        title: 'Sort\'Easy',
        type: 'Famille',
        supports: [
            'Web&Mobile',
            'Backoffice',
            'Conception',
        ],
        description: 'Regroupement des différents évènements et sorties prévus en normandie, facilitant l\'organisation des sorties en famille.',
        tags: [
            'FlutterFlow',
            'Firebase',
        ],
        img: 'SortEasy',
        link: 'https://sorteasy.fr/',
    },
];