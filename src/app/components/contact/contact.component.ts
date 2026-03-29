import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  copiedLabel: string | null = null;
  copyErrorLabel: string | null = null;
  links = [
    { label: 'Website', value: 'bryanhubbard.dev', href: 'https://bryanhubbard.dev', icon: '🌐' },
    { label: 'Email', value: 'bryan.hubbard.dev@gmail.com', href: 'mailto:bryan.hubbard.dev@gmail.com', icon: '✉️' },
    { label: 'Résumé', value: 'PDF', href: '/assets/documents/bryan-hubbard-resume.pdf', icon: '📄' },
    { label: 'LinkedIn', value: 'linkedin.com/in/bryan-b-hubbard-ll-ms-ed', href: 'https://www.linkedin.com/in/bryan-b-hubbard-ll-ms-ed', icon: '💼' },
    { label: 'GitHub', value: 'github.com/bryanhubbarddev', href: 'https://github.com/bryanhubbarddev', icon: '🐙' },
    {
      label: 'Credentials',
      value: 'Skillsoft digital badges',
      href: 'https://skillsoft.digitalbadges.skillsoft.com/profile/bryanhubbard681737/wallet',
      icon: '🎓',
    },
  ];

  copyEmail(link: { label: string; value?: string; href?: string }, event: Event): void {
    event.preventDefault();
    const email = link?.value ?? (link?.href || '').replace('mailto:', '');
    if (!email) return;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.copiedLabel = link.label;
        setTimeout(() => (this.copiedLabel = null), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy email to clipboard:', err);
        this.copyErrorLabel = link.label;
        setTimeout(() => (this.copyErrorLabel = null), 4000);
      });
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
