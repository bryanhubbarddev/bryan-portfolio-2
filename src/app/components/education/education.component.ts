import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  type: string;
  skillsValidated: string[];
  verificationUrl?: string;
  description?: string;
}

export interface CertificationGroup {
  category: string;
  certs: Certification[];
}

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
      type: 'M.S.',
      image: 'assets/images/Master.Degree.png'
    },
    {
      icon: '🎓',
      degree: 'Bachelor of Science',
      field: 'Kinesiology, Sports Medicine & Exercise Science',
      school: 'Texas A&M University Corpus Christi',
      year: '2004',
      type: 'B.S.',
      image: 'assets/images/Bachelor.Degree.png'
    }
  ];

  apprenticeships = [
    {
      icon: '🔶',
      title: 'Software Engineering Apprenticeship',
      issuer: 'OrangeMethod OrangeWorks — The Home Depot',
      year: '2025',
      type: 'Certificate of Completion',
      image: 'assets/images/Software.Engineering.png'
    },
    {
      icon: '🔶',
      title: 'Product Support Apprenticeship',
      issuer: 'OrangeMethod — The Home Depot',
      year: '2021',
      type: 'Certificate of Completion',
      image: 'assets/images/Product.Support.png'
    }
  ];

  internships: { icon: string; title: string; issuer: string; year: string; type: string; image?: string }[] = [];

  get apprenticeshipsAndInternships() {
    return [...this.apprenticeships, ...this.internships];
  }

  toastmasters = [
    {
      icon: '🏆',
      title: 'Level 5 — Dynamic Leadership',
      issuer: 'Toastmasters International Pathways',
      year: '2024',
      type: 'Certificate of Completion',
      image: 'assets/images/DynamicLeadership.jpeg'
    },
    {
      icon: '🏆',
      title: 'Level 5 — Engaging Humor',
      issuer: 'Toastmasters International Pathways',
      year: '2024',
      type: 'Certificate of Completion',
      image: 'assets/images/Humor.png'
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

  skillTooltips: Record<string, string> = {
    'Angular': 'Web application framework',
    'TypeScript': 'Typed JavaScript',
    'JavaScript': 'Programming language',
    'Java': 'Programming language',
    'OOP': 'Object-Oriented Programming',
    'SQL': 'Structured Query Language',
    'Google Cloud': 'Google Cloud Platform',
    'AI Ethics': 'Ethical AI development practices',
    'Prompt Engineering': 'Crafting effective AI prompts',
    'Critical Thinking': 'Analytical problem-solving',
    'Problem Solving': 'Structured approach to challenges',
    'Training': 'Corporate training & facilitation',
    'Communication': 'Professional communication skills',
    'Project Management': 'Managing technical projects',
    'Leadership': 'Leading teams and initiatives',
    'Cloud': 'Cloud computing & databases',
    'AI': 'Artificial intelligence',
    'Agile': 'Agile methodology',
    'React': 'React UI library',
  };

  skillsoftWalletUrl = 'https://skillsoft.digitalbadges.skillsoft.com/profile/bryanhubbard681737/wallet';
  linkedInUrl = 'https://www.linkedin.com/in/bryan-b-hubbard-ll-ms-ed';

  certificationGroups: CertificationGroup[] = [
    {
      category: 'AI & Machine Learning',
      certs: [
        { title: 'Azure AI Fundamentals: Azure Machine Learning Fundamentals', issuer: 'Skillsoft', year: 'Jan 4, 2026', type: 'Course Completion', skillsValidated: ['AI', 'Machine Learning'], verificationUrl: this.linkedInUrl },
        { title: 'Introduction to GitHub Copilot at The Home Depot', issuer: 'Orange Method', year: 'Feb 18, 2025', type: 'Track Completion', skillsValidated: ['AI', 'Developer Tools'], verificationUrl: this.linkedInUrl },
        { title: 'Generative AI Guardrails & Responsible Application', issuer: 'Skillsoft', year: '2025', type: 'Track Completion', skillsValidated: ['AI Ethics', 'Prompt Engineering'], verificationUrl: this.linkedInUrl },
      ],
    },
    {
      category: 'Code & Frameworks',
      certs: [
        { title: 'Angular Complete Guide', issuer: "O'Reilly / Packt Publishing", year: '2026', type: 'Certificate of Completion', skillsValidated: ['Angular', 'TypeScript'], verificationUrl: this.linkedInUrl },
        { title: 'TypeScript Essentials: Getting Started', issuer: 'Skillsoft', year: '2025', type: 'Certificate', skillsValidated: ['TypeScript', 'JavaScript'], verificationUrl: this.linkedInUrl },
        { title: 'Java Certified Foundations Associate', issuer: 'Skillsoft', year: '2025', type: 'Certificate', skillsValidated: ['Java', 'OOP'], verificationUrl: this.linkedInUrl },
      ],
    },
    {
      category: 'Cloud & Data',
      certs: [
        { title: 'Working with Google Cloud SQL: An Introduction to Cloud SQL', issuer: 'Skillsoft', year: 'Mar 2025', type: 'Certificate', skillsValidated: ['SQL', 'Google Cloud'], verificationUrl: this.linkedInUrl },
        { title: 'Track 1: Cloud Databases', issuer: 'Skillsoft', year: 'Mar 8, 2025', type: 'Track Completion', skillsValidated: ['SQL', 'Cloud'], verificationUrl: this.linkedInUrl },
        { title: 'An Overview of Cloud Databases', issuer: 'Skillsoft', year: 'Mar 8, 2025', type: 'Certificate', skillsValidated: ['Cloud', 'Databases'], verificationUrl: this.linkedInUrl },
        { title: 'Objects & Retrieving Data', issuer: 'Skillsoft', year: 'Mar 8, 2025', type: 'Certificate', skillsValidated: ['SQL', 'Data'], verificationUrl: this.linkedInUrl },
        { title: 'Google Associate Cloud Engineer: Google Cloud Platform Ecosystem', issuer: 'Skillsoft', year: 'May 2022', type: 'Certificate', skillsValidated: ['Google Cloud', 'Cloud'], verificationUrl: this.linkedInUrl },
      ],
    },
    {
      category: 'Professional & Project Management',
      certs: [
        { title: 'Senior Software Project Manager', issuer: 'OrangeMethod — The Home Depot', year: '2024', type: 'Certificate of Completion', skillsValidated: ['Project Management', 'Leadership'], verificationUrl: this.linkedInUrl },
        { title: 'Senior Software Project Manager', issuer: 'Skillsoft Digital Badge', year: '2024', type: 'Track Completion', skillsValidated: ['Project Management', 'Leadership'], verificationUrl: this.linkedInUrl },
        { title: 'Software Project Manager', issuer: 'Skillsoft', year: 'Feb 2024', type: 'Track Completion', skillsValidated: ['Agile', 'Project Management'], verificationUrl: this.linkedInUrl },
        { title: 'Software Project Lead', issuer: 'Skillsoft', year: 'Feb 2024', type: 'Track Completion', skillsValidated: ['Project Management', 'Leadership'], verificationUrl: this.linkedInUrl },
        { title: 'Software Project Analyst', issuer: 'Skillsoft', year: 'Jan 2024', type: 'Track Completion', skillsValidated: ['Agile', 'Project Management'], verificationUrl: this.linkedInUrl },
        { title: 'Corporate Trainer Journey', issuer: 'Skillsoft', year: 'May 2024', type: 'Journey Completion', skillsValidated: ['Training', 'Communication'], verificationUrl: this.linkedInUrl },
        { title: 'Critical Thinking: Challenging Assumptions', issuer: 'Skillsoft', year: '2025', type: 'Certificate', skillsValidated: ['Critical Thinking', 'Problem Solving'], verificationUrl: this.linkedInUrl },
      ],
    },
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
