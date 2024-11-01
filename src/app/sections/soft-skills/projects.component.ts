import { Component } from '@angular/core';
import { SoftSkill, softSkills } from '../../../datas/soft-skills.data';
import { allProjects, Project } from '../../../datas/projects.data';
import { of, Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public allProjects: Observable<Project[]> = of(allProjects);
}
