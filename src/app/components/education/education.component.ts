import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  degrees = [
    {
      icon: '🎓',
      degree: 'Master of Science',
      field: 'College of Education',
      school: 'Texas A&M University Corpus Christi',
      year: '2010',
      type: 'M.S.'
    },
    {
      icon: '🎓',
      degree: 'Bachelor of Science',
      field: 'Clinical Kinesiology, Sports Medicine & Exercise Science',
      school: 'Texas A&M University Corpus Christi',
      year: '2004',
      type: 'B.S.'
    }
  ];

  apprenticeships = [
    {
      icon: '🔶',
      title: 'Software Engineering Apprenticeship',
      issuer: 'OrangeMethod OrangeWorks — The Home Depot',
      year: '2025',
      type: 'Certificate of Completion'
    },
    {
      icon: '🔶',
      title: 'Product Support Apprenticeship',
      issuer: 'OrangeMethod — The Home Depot',
      year: '2021',
      type: 'Certificate of Completion'
    }
  ];

  internships: { icon: string; title: string; issuer: string; year: string; type: string }[] = [];

  get apprenticeshipsAndInternships() {
    return [...this.apprenticeships, ...this.internships];
  }

  toastmasters = [
    {
      icon: '🏆',
      title: 'Level 5 — Dynamic Leadership',
      issuer: 'Toastmasters International Pathways',
      year: '2024',
      type: 'Certificate of Completion'
    },
    {
      icon: '🏆',
      title: 'Level 5 — Engaging Humor',
      issuer: 'Toastmasters International Pathways',
      year: '2024',
      type: 'Certificate of Completion'
    },
    {
      icon: '🏅',
      title: 'Area D43 Director — Dedicated Service & Leadership',
      issuer: 'Toastmasters International',
      year: '2023–2024',
      type: 'Award'
    },
    {
      icon: '🏅',
      title: 'Area Director Club Reporting Best Practices Training Award',
      issuer: 'Toastmasters — Division E Team',
      year: '2024',
      type: 'Certificate of Appreciation'
    }
  ];

  certifications = [
    {
      icon: '📘',
      title: 'Angular Complete Guide',
      issuer: "O'Reilly / Packt Publishing",
      year: '2026',
      type: 'Certificate of Completion'
    },
    {
      icon: '🤖',
      title: 'Responsible Application & Guardrails for Generative AI',
      issuer: 'Skillsoft Digital Badge',
      year: '2025',
      type: 'Track Completion'
    },
    {
      icon: '💬',
      title: 'Communication Skills',
      issuer: 'Skillsoft Digital Badge',
      year: '2024–2025',
      type: 'Track Completion'
    },
    {
      icon: '🔶',
      title: 'Senior Software Project Manager',
      issuer: 'OrangeMethod — The Home Depot',
      year: '2024',
      type: 'Certificate of Completion'
    },
    {
      icon: '💡',
      title: 'Senior Software Project Manager',
      issuer: 'Skillsoft Digital Badge',
      year: '2024',
      type: 'Track Completion'
    },
    {
      icon: '💡',
      title: 'Corporate Trainer Journey',
      issuer: 'Skillsoft Digital Badge',
      year: '2024',
      type: 'Journey Completion'
    }
  ];

  openSlots = [
    { label: 'Coming Soon' },
    { label: 'Coming Soon' },
    { label: 'Coming Soon' }
  ];

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
  }
}
