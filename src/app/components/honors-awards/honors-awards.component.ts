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
      title: 'Best in Technology (BiT) & Orange Heart',
      issuer: 'The Home Depot',
      year: '2024',
      description: 'Outstanding technology contributions, innovation, and embodying company values.',
      images: [
        'assets/images/BitAll.png',
        'assets/images/BitHand.png',
        'assets/images/BitBryanHubbard.png',
      ],
    },
    {
      title: 'The Home Depot Diamond Award, 60 Homer Awards',
      issuer: 'The Home Depot',
      year: '2022',
      description: 'Diamond recognition and 60 Homer Awards.',
      images: [
        'assets/images/DiamondGroup.png',
        'assets/images/Diamond.png',
        'assets/images/DiamondDinnner.png',
      ],
    },
    {
      title: 'HomerCon Leadership Committee',
      issuer: 'The Home Depot',
      year: '2024',
      description: 'Served on the Leadership Committee of HomerCon.',
      images: [
        'assets/images/HomerCon2024.png',
        'assets/images/HomerCon2025.png',
        'assets/images/HomerHomerCon2025.png',
      ],
    },
    {
      title: 'Executive Homer Award — Taking Care of Our People',
      issuer: 'The Home Depot',
      year: '2020, 2023, 2024',
      description: 'Three-time recipient for taking care of our people.',
    },
    {
      title: 'Area D43 Director — Dedicated Service & Leadership',
      issuer: 'Toastmasters International',
      year: '2023–2024',
      description: 'Leadership and service as Area Director across Georgia and New York.',
      image: 'assets/images/AreaLeadership.png',
    },
    {
      title: 'Area Director Club Reporting Best Practices Training Award',
      issuer: 'Toastmasters — Division E Team',
      year: '2024',
      description: 'Certificate of appreciation for training excellence in club reporting.',
      image: 'assets/images/CertAreaDirector.png',
    },
    {
      title: 'Carnegie Hall',
      issuer: 'Performance',
      year: '—',
      description: 'Performed at Carnegie Hall — a milestone in artistic and professional excellence.',
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
