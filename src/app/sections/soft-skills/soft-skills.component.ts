import { Component } from '@angular/core';
import { SoftSkill, softSkills } from '../../../datas/soft-skills.data';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss'
})
export class SoftSkillsComponent {
  public softSkills: SoftSkill[] = softSkills;
}
