import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-honors-awards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './honors-awards.component.html',
  styleUrls: ['./honors-awards.component.css'],
})
export class HonorsAwardsComponent implements OnInit {
  awards = [
    {
      title: 'Best in Technology (BiT)',
      issuer: 'The Home Depot',
      year: '2024',
      description: 'Recognition for outstanding technology contributions and innovation.',
    },
    {
      title: 'Orange Heart',
      issuer: 'The Home Depot',
      year: '2024',
      description: 'Award for embodying company values and making a meaningful impact.',
    },
    {
      title: 'Area D43 Director — Dedicated Service & Leadership',
      issuer: 'Toastmasters International',
      year: '2023–2024',
      description: 'Award for leadership and service as Area Director across Georgia and New York.',
    },
    {
      title: 'Carnegie Hall',
      issuer: 'Performance',
      year: '—',
      description: 'Performed at Carnegie Hall — a milestone in artistic and professional excellence.',
    },
    {
      title: 'Area Director Club Reporting Best Practices Training Award',
      issuer: 'Toastmasters — Division E Team',
      year: '2024',
      description: 'Certificate of appreciation for training excellence in club reporting.',
    },
  ];

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
