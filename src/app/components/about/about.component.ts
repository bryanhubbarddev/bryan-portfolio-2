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
    { year: '2011', label: 'Retail Associate', place: 'Store #6564, Corpus Christi' },
    { year: '2018', label: 'Specialty Supervisor', place: 'The Home Depot' },
    { year: '2019', label: 'Security Operations Analyst', place: 'GSOC, THD' },
    { year: '2021', label: 'Product Support Technician', place: 'The Home Depot' },
    { year: '2024', label: 'OrangeMethod Apprenticeship', place: 'Software Engineering' },
    { year: '2025', label: 'Software Engineer', place: 'The Home Depot' },
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
