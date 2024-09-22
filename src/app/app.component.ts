import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from "aos";
import { HomeComponent } from "./sections/home/home.component";
import { ParcoursComponent } from "./sections/parcours/parcours.component";
import { ContactsComponent } from "./sections/contacts/contacts.component";
import { HardSkillsComponent } from "./sections/hard-skills/hard-skills.component";
import { SoftSkillsComponent } from "./sections/soft-skills/soft-skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ParcoursComponent, ContactsComponent, HardSkillsComponent, SoftSkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  public ngOnInit(): void {
    AOS.init();
  }
}
