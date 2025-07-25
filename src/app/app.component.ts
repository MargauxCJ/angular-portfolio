import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild, inject, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import AOS from "aos";
import { HomeComponent } from "./sections/home/home.component";
import { ContactsComponent } from "./sections/contacts/contacts.component";
import { HardSkillsComponent } from "./sections/hard-skills/hard-skills.component";
import { ProjectsComponent } from "./sections/soft-skills/projects.component";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ContactsComponent, HardSkillsComponent, ProjectsComponent, RouterLink, MatIcon, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('navBar', { static: false}) public navBar!: ElementRef;
  public isMobile = false;
  public indexSection = 0;
  public linkSections = ['home','hardSkills','projects','contacts'];

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.checkScreenSize();
  }
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    AOS.init();
    this.checkScreenSize();
  }
  public checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  public changeSection(direction: 'back'|'forward') {
    switch (direction){
      case 'back':
        this.indexSection++;
        break;
      case 'forward':
        this.indexSection--;
        break;
    }
    if(this.indexSection > this.linkSections.length-1) {
      this.indexSection = 0;
    }
    if(this.indexSection < 0) {
      this.indexSection = this.linkSections.length-1
    }
    this.router.navigate([this.linkSections[this.indexSection]])
  }
}
