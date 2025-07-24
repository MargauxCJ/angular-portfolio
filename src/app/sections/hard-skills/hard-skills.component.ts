import { Component } from '@angular/core';
import { allHardSkills, HardSkill } from '../../../datas/hard-skills.data';
import { of, Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hard-skills',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.scss',
})
export class HardSkillsComponent {
  public hardskills: Observable<HardSkill[]> = of(allHardSkills);
  public toolSkills: Observable<HardSkill[]>;
  public langageSkills: Observable<HardSkill[]>;
  public frameworkSkills: Observable<HardSkill[]>;
  public testingSkills: Observable<HardSkill[]>;
  public UXSkills: Observable<HardSkill[]>;
  constructor() {
    this.langageSkills = this.hardskills.pipe(map((hardskills) => hardskills.filter((hard) => hard.type === "langages")));
    this.toolSkills = this.hardskills.pipe(map((hardskills) => hardskills.filter((hard) => hard.type === "autres")))
    this.frameworkSkills = this.hardskills.pipe(map((hardskills) => hardskills.filter((hard) => hard.type === "framework")))
    this.testingSkills = this.hardskills.pipe(map((hardskills) => hardskills.filter((hard) => hard.type === "testing")))
    this.UXSkills = this.hardskills.pipe(map((hardskills) => hardskills.filter((hard) => hard.type === "UX")))
  }
}
