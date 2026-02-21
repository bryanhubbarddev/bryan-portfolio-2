import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { OrangeInspirationComponent } from './components/orange-inspiration/orange-inspiration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    OrangeInspirationComponent,
    PresentationsComponent,
    ContactComponent,
  ],
  template: `
    <app-nav></app-nav>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-education></app-education>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-orange-inspiration></app-orange-inspiration>
      <app-presentations></app-presentations>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
  `]
})
export class AppComponent {}
