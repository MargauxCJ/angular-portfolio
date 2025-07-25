import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then( m => m.HomeComponent)
      },
      {
        path: 'hardSkills',
        loadComponent: () => import('./hard-skills/hard-skills.component').then( m => m.HardSkillsComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./soft-skills/projects.component').then( m => m.ProjectsComponent)
      },
      {
        path: 'contacts',
        loadComponent: () => import('./contacts/contacts.component').then( m => m.ContactsComponent)
      },
];
