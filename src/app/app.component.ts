import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import AOS from "aos";
import { HomeComponent } from "./sections/home/home.component";
import { ParcoursComponent } from "./sections/parcours/parcours.component";
import { ContactsComponent } from "./sections/contacts/contacts.component";
import { HardSkillsComponent } from "./sections/hard-skills/hard-skills.component";
import { ProjectsComponent } from "./sections/soft-skills/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ParcoursComponent, ContactsComponent, HardSkillsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('navBar', { static: false}) public navBar!: ElementRef;
  public activeNav: string = '';

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    AOS.init();
  }

  public toggleNavigation(linkClicked: string): void {
    this.navBar.nativeElement.childNodes.forEach((element) => {
      console.log(linkClicked);
      console.log(element.hash);
      console.log(linkClicked.toLowerCase() === (element.hash.toLowerCase()))
      if(linkClicked.toLowerCase() === (element.hash.toLowerCase())) {
        console.log(element.classList.add('active'));
      } else {
        element.classList.remove('active');
      }
    });

  }
}
