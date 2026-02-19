import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      number: '01',
      title: 'Enterprise Observability Modernization',
      description:
        'Modernized monitoring across 20+ micro frontends replacing legacy telemetry implementations. Built environment-aware runtime controls and real-time dashboards used by engineering and product teams.',
      impact: ['75% faster issue resolution', '77% system downtime reduction', '$2.7M projected annual value'],
      tags: ['New Relic', 'JavaScript', 'Micro Frontends', 'NRQL'],
      featured: true,
    },
    {
      number: '02',
      title: 'Warehouse Visibility Platform',
      description:
        'Developed dashboards visualizing associate workflows, fulfillment activity, and logistics operations within distribution centers, improving operational awareness and supervisor decision-making.',
      impact: ['Improved operational awareness', 'Enhanced supervisor decision making', 'Real-time data visualization'],
      tags: ['React', 'Supply Chain APIs', 'Data Visualization'],
      featured: false,
    },
    {
      number: '03',
      title: 'Mobile Telemetry Integration',
      description:
        'Implemented monitoring instrumentation within Flutter warehouse device applications, expanding mobile performance visibility and enabling session diagnostics and error tracking.',
      impact: ['Mobile performance visibility', 'Session diagnostics enabled', 'Error tracking at scale'],
      tags: ['Flutter', 'Dart', 'New Relic Mobile'],
      featured: false,
    },
  ];

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
