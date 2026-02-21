import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProjectTool {
  name: string;
  purpose: string;
  details?: string[];
}

export interface PlatformCoverage {
  desktop: string;
  mobile: string;
}

export interface Project {
  number: string;
  title: string;
  mainConcept?: string;
  section?: string;
  percent?: string;
  figures?: string[];
  team: string;
  description: string;
  keyContributions: string[];
  techStack: string[];
  featured?: boolean;
  platformCoverage?: PlatformCoverage;
  tools?: ProjectTool[];
  supportingSystems?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      number: '01',
      title: 'HomerCon Admin Application',
      mainConcept: 'Virtual conference logistics management',
      section: 'Enterprise & Observability',
      team: 'OrangeMethod Software Engineering (OMOW & OME) Apprenticeship Program',
      description:
        'Built a full-stack administrative application for managing virtual conference logistics including timeslots, tracks, and scheduling.',
      keyContributions: [
        'Developed React-based admin features with full CRUD operations',
        'Implemented Timeslot Management and Track Management components',
        'Integrated REST APIs for event, track, and scheduling data',
        'Built responsive UI components and validation logic',
        'Collaborated across frontend and backend services',
      ],
      techStack: [
        'React',
        'JavaScript',
        'Java',
        'Spring Boot',
        'SQL',
        'REST APIs',
        'Frontend & Backend Architecture',
      ],
      featured: false,
    },
    {
      number: '02',
      title: 'Enterprise Observability Modernization (New Relic Implementation)',
      mainConcept: 'Distributed monitoring & telemetry across 20+ applications',
      section: 'Enterprise & Observability',
      figures: ['20+ MFEs', 'Desktop + Mobile'],
      team: 'Team Oxygen and OrangeWorks The Home Depot',
      description:
        'Modernized observability across distributed desktop and mobile applications by replacing outdated New Relic telemetry and enabling real-time monitoring, performance tracking, and error visibility across frontend and backend with New Relic.',
      platformCoverage: {
        desktop: '20 micro frontend applications built with React',
        mobile: 'Warehouse device applications built with Flutter and Dart',
      },
      keyContributions: [
        'Implemented hostname-based conditional telemetry logic',
        'Updated and validated New Relic Browser agent instrumentation in React micro frontends',
        'Implemented New Relic Mobile telemetry instrumentation in Flutter applications',
        'Validated real-time performance and error reporting across desktop and mobile',
        'Supported dashboard and alert readiness across distributed systems',
      ],
      techStack: [
        'React',
        'TypeScript',
        'JavaScript',
        'Flutter',
        'Dart',
        'New Relic Browser Agent',
        'New Relic Mobile Agent',
        'Micro Frontend Architecture',
        'NRQL',
      ],
      featured: true,
    },
    {
      number: '03',
      title: 'Distribution Fulfillment Center (DFC) Visibility and Fulfillment Timing Tool',
      mainConcept: 'Real-time warehouse visibility & fulfillment timing of orders',
      section: 'Operations & Supply Chain',
      figures: ['2 integrated tools', 'Enterprise data integration'],
      team: 'Distribution Fulfillment Center (DFC) Team',
      description:
        'Developed warehouse visibility and fulfillment timing tools for Distribution Fulfillment Centers to support supervisor decision-making, associate tracking, and order cutoff monitoring.',
      tools: [
        {
          name: 'DFC Visibility Tool',
          purpose: 'Provides supervisors with real-time visibility into associate workflows and non-conveyable item processing within the fulfillment center.',
          details: [
            'Associate prints a fulfillment tag',
            'Tag placed on non-conveyable large items',
            'System tracks tag placement and workflow progression',
            'Supervisors view associate and item location across fulfillment zones',
          ],
        },
        {
          name: 'Priority Window Dashboard',
          purpose: 'Tracks fulfillment timing from customer order placement through cutoff windows to ensure orders are processed and loaded before truck departure.',
          details: [
            'Displays order cutoff times (OECT)',
            'Monitors fulfillment urgency and timing risk',
            'Helps supervisors prioritize workload by delivery windows',
            'Tracks order placement to truck loading cutoff time (CT)',
          ],
        },
      ],
      keyContributions: [
        'Designed and built two integrated warehouse tools',
        'Delivered real-time data visualization for fulfillment operations',
        'Integrated with supply chain APIs and enterprise data systems',
      ],
      techStack: [
        'TypeScript',
        'React',
        'Next.js',
        'Prometheus',
        'Data Visualization',
        'Supply Chain APIs',
      ],
      supportingSystems: ['Optimus', 'DNA', 'EDW'],
      featured: false,
    },
    {
      number: '04',
      title: 'Orange Inspiration Application and Store Data Documentation Initiative',
      mainConcept: 'Angular learning platform & store data validation',
      section: 'Learning & Portfolio',
      figures: ['2,034 store codes validated'],
      team: 'Pro Order Up Team',
      description:
        'Designed and developed the Orange Inspiration application as an Angular learning and portfolio platform while supporting enterprise store data validation and documentation initiatives.',
      keyContributions: [
        'Built and deployed Orange Inspiration app using Angular',
        'Designed UI to showcase leadership, growth, and technical work',
        'Hosted and deployed on Firebase and Google Cloud Platform',
        'Completed store data validation using Base Store List (2,034 unique store codes)',
        'Supported store comparison and reconciliation documentation updates',
      ],
      techStack: [
        'Angular',
        'TypeScript',
        'Firebase',
        'Google Cloud Platform',
        'Data Validation',
        'Documentation',
      ],
      featured: false,
    },
  ];

  /** Groups projects by section for display. Preserves section order. Unknown sections are appended. */
  get projectSections(): { name: string; projects: Project[] }[] {
    const sections = new Map<string, Project[]>();
    for (const p of this.projects) {
      const s = p.section ?? 'Other';
      if (!sections.has(s)) sections.set(s, []);
      sections.get(s)!.push(p);
    }
    const order = ['Enterprise & Observability', 'Operations & Supply Chain', 'Learning & Portfolio', 'Other'];
    const known = order
      .filter((name) => sections.has(name))
      .map((name) => ({ name, projects: sections.get(name)! }));
    const unknown = Array.from(sections.entries())
      .filter(([name]) => !order.includes(name))
      .map(([name, projects]) => ({ name, projects }));
    return [...known, ...unknown];
  }

  ngOnInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
        { threshold: 0.1 }
      );
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
