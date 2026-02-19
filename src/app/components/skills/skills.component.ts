import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  tooltip: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
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
      skills: [
        { name: 'Angular', tooltip: 'Web application framework' },
        { name: 'React', tooltip: 'UI library' },
        { name: 'TypeScript', tooltip: 'Typed JavaScript' },
        { name: 'JavaScript', tooltip: 'Programming language' },
        { name: 'HTML', tooltip: 'Markup language for web pages' },
        { name: 'CSS / SCSS', tooltip: 'Styling and preprocessor' },
        { name: 'RxJS', tooltip: 'Reactive programming library' },
        { name: 'Signals', tooltip: 'Angular reactive primitive' },
        { name: 'Component Architecture', tooltip: 'Modular UI design pattern' },
        { name: 'Responsive Design', tooltip: 'Adaptive layouts for all screens' },
        { name: 'WAVE', tooltip: 'Web accessibility evaluation tool' },
      ],
    },
    {
      category: 'Backend & Integration',
      icon: '🔧',
      skills: [
        { name: 'Java', tooltip: 'Programming language' },
        { name: 'Spring Boot', tooltip: 'Backend framework' },
        { name: 'REST APIs', tooltip: 'Web service architecture' },
        { name: 'SQL', tooltip: 'Structured Query Language' },
        { name: 'MySQL', tooltip: 'Relational database' },
        { name: 'JSON', tooltip: 'Data interchange format' },
        { name: 'Unix', tooltip: 'Operating system / platform' },
      ],
    },
    {
      category: 'Observability & Monitoring',
      icon: '📊',
      skills: [
        { name: 'New Relic Browser', tooltip: 'Browser performance monitoring' },
        { name: 'New Relic Mobile', tooltip: 'Mobile app telemetry' },
        { name: 'NRQL Dashboards', tooltip: 'New Relic query dashboards' },
        { name: 'Telemetry Instrumentation', tooltip: 'Application observability' },
        { name: 'Session Replay', tooltip: 'User session recording' },
        { name: 'Synthetic Monitoring', tooltip: 'Proactive uptime checks' },
        { name: 'Alert Configuration', tooltip: 'Incident alerting setup' },
        { name: 'PagerDuty', tooltip: 'Incident management & on-call' },
        { name: 'Grafana', tooltip: 'Observability & dashboards' },
        { name: 'PostHog', tooltip: 'Product analytics' },
        { name: 'Looker', tooltip: 'Business intelligence' },
        { name: 'Tableau', tooltip: 'Data visualization' },
      ],
    },
    {
      category: 'Mobile & Cross-Platform',
      icon: '📱',
      skills: [
        { name: 'Flutter', tooltip: 'Cross-platform UI toolkit' },
        { name: 'Dart', tooltip: 'Programming language (Flutter)' },
        { name: 'Mobile Telemetry', tooltip: 'Mobile app monitoring' },
      ],
    },
    {
      category: 'THD Systems',
      icon: '🏠',
      skills: [
        { name: 'HOME', tooltip: 'THD internal system' },
        { name: 'OrderUp', tooltip: 'THD internal system' },
        { name: 'Compost', tooltip: 'THD internal system' },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', tooltip: 'Version control' },
        { name: 'GitHub', tooltip: 'Code hosting & collaboration' },
        { name: 'Jenkins', tooltip: 'CI/CD automation' },
        { name: 'CI/CD Pipelines', tooltip: 'Automated build & deploy' },
        { name: 'Postman', tooltip: 'API development & testing' },
        { name: 'Chrome DevTools', tooltip: 'Browser debugging' },
        { name: 'SonarQube', tooltip: 'Code quality & security' },
        { name: 'Jira', tooltip: 'Project & issue tracking' },
        { name: 'ServiceNow', tooltip: 'IT service management platform' },
        { name: 'Confluence', tooltip: 'Documentation & collaboration' },
        { name: 'CyberArk', tooltip: 'Privileged access management' },
        { name: 'Google AI', tooltip: 'AI assistance tool' },
        { name: 'Copilot', tooltip: 'AI pair programming' },
        { name: 'Slack', tooltip: 'Team messaging' },
        { name: 'Zoom', tooltip: 'Video conferencing' },
        { name: 'Azure', tooltip: 'Cloud platform' },
        { name: 'Firebase', tooltip: 'Backend & app platform' },
      ],
    },
    {
      category: 'Professional Skills',
      icon: '🎤',
      skills: [
        { name: 'Public Speaking', tooltip: 'Presenting to audiences' },
        { name: 'Technical Presentations', tooltip: 'Tech-focused talks' },
        { name: 'Leadership Coaching', tooltip: 'Team development' },
        { name: 'Stakeholder Communication', tooltip: 'Cross-functional alignment' },
        { name: 'Agile Collaboration', tooltip: 'Iterative team workflows' },
        { name: 'PowerPoint', tooltip: 'Presentation software' },
        { name: 'Word', tooltip: 'Word processing' },
      ],
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
