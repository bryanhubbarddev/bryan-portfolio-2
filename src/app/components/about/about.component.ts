import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  milestones = [
    { year: '2013 - 2017', label: 'Cashier to Specialist roles', place: 'Store #6564, Corpus Christi' },
    { year: '2018', label: 'Specialty Supervisor', place: 'Store #6564, Corpus Christi' },
    { year: '2019', label: 'Security Operations Analyst', place: 'Security Officer · Global Operations · Worldwide · Austin & Georgia' },
    { year: '2020', label: 'OrangeMethod Apprenticeship', place: 'Product Support · Texas and Georgia · Virtual and Remote' },
    { year: '2021', label: 'Product Support Technician', place: 'The Home Depot · Remote, Virtual Texas' },
    { year: '2024', label: 'OrangeMethod Apprenticeship and OrangeWorks Internship', place: 'Software Engineering · Texas and Georgia · Virtual and Remote' },
    { year: '2025 - Present', label: 'Software Engineer', place: 'The Home Depot · Texas, Florida & Georgia · Virtual and Remote' },
  ];

  ngOnInit() {
    setTimeout(() => this.setupObserver(), 100);
  }

  private setupObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
}
