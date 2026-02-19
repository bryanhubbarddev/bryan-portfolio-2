import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend Engineering',
      icon: '⚡',
      skills: ['Angular 19', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'RxJS', 'Signals', 'Component Architecture', 'Responsive Design'],
    },
    {
      category: 'Backend & Integration',
      icon: '🔧',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'MySQL', 'JSON'],
    },
    {
      category: 'Observability & Monitoring',
      icon: '📊',
      skills: ['New Relic Browser', 'New Relic Mobile', 'NRQL Dashboards', 'Telemetry Instrumentation', 'Session Replay', 'Synthetic Monitoring', 'Alert Configuration'],
    },
    {
      category: 'Mobile & Cross-Platform',
      icon: '📱',
      skills: ['Flutter', 'Dart', 'Mobile Telemetry'],
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Jenkins', 'CI/CD Pipelines', 'Postman', 'Chrome DevTools', 'SonarQube', 'Jira', 'Confluence'],
    },
    {
      category: 'Professional Skills',
      icon: '🎤',
      skills: ['Public Speaking', 'Technical Presentations', 'Leadership Coaching', 'Stakeholder Communication', 'Agile Collaboration'],
    },
  ];

  ngOnInit() {
    setTimeout(() => this.setupObserver(), 100);
  }

  private setupObserver() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
}
