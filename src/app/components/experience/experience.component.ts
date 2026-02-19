import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Job {
  title: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  activeJob = signal(0);

  jobs: Job[] = [
    {
      title: 'Software Engineer',
      company: 'The Home Depot',
      period: 'Nov 2025 – Present',
      type: 'Full-Time · Remote',
      highlights: [
        'Build and maintain Angular and React features across enterprise micro frontend architectures',
        'Integrate frontend applications with backend REST APIs supporting supply chain and store systems',
        'Modernized New Relic telemetry across 20+ micro frontends improving monitoring visibility',
        'Build environment-aware runtime controls for performance and error tracking',
        'Design dashboards, alerts, and NRQL queries used by engineering and product teams',
        'Integrate mobile telemetry within Flutter warehouse applications',
        'Partner with Staff Engineers, Product Managers, and platform teams on enterprise delivery',
      ],
    },
    {
      title: 'Software Engineer (Apprenticeship)',
      company: 'The Home Depot',
      period: 'Jan 2025 – Oct 2025',
      type: 'OrangeMethod Program',
      highlights: [
        'Completed OrangeMethod Software Engineering Apprenticeship focused on full-stack engineering',
        'Built projects using Java, Spring Boot, JavaScript, SQL, HTML, and CSS',
        'Collaborated in Agile sprint teams delivering enterprise features',
        'Integrated telemetry across HDW warehouse platforms supporting observability initiatives',
        'Contributed to logistics visibility tooling across Direct Fulfillment Center platforms',
        'Worked on React, JavaScript, and Flutter development tasks',
      ],
    },
    {
      title: 'Product Support Technician',
      company: 'The Home Depot',
      period: 'Dec 2021 – Dec 2024',
      type: 'Full-Time',
      highlights: [
        'Resolved 230+ enterprise incidents monthly across store systems and supply chain platforms',
        'Reduced recurring incidents by 88% through root cause analysis and documentation',
        'Served as subject matter expert supporting engineering on-call rotations',
        'Validated fixes, monitored releases, and improved system reliability',
      ],
    },
    {
      title: 'Security Operations Analyst',
      company: 'The Home Depot',
      period: 'Sep 2019 – Sep 2021',
      type: 'GSOC · Full-Time',
      highlights: [
        'Monitored and analyzed 100,000+ security events in enterprise GSOC environment',
        'Investigated incidents and escalated critical risks to appropriate teams',
        'Strengthened enterprise monitoring workflows and security reporting processes',
      ],
    },
    {
      title: 'Specialty Supervisor',
      company: 'The Home Depot',
      period: 'Jan 2018 – Aug 2019',
      type: 'Leadership',
      highlights: [
        'Led and coached a team of 13 associates across specialty departments',
        'Improved operational performance metrics and customer experience delivery',
        'Developed leadership and communication skills that now drive my engineering approach',
      ],
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

  setActive(index: number) {
    this.activeJob.set(index);
  }
}
