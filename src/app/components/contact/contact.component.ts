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
  copied = false;
  links = [
    { label: 'Website', value: 'bryanhubbard.dev', href: 'https://bryanhubbard.dev', icon: '🌐' },
    { label: 'Email', value: 'bryan.hubbard.dev@gmail.com', href: 'mailto:bryan.hubbard.dev@gmail.com', icon: '✉️' },
    { label: 'LinkedIn', value: 'linkedin.com/in/bryan-b-hubbard-ll-ms-ed', href: 'https://www.linkedin.com/in/bryan-b-hubbard-ll-ms-ed', icon: '💼' },
    { label: 'GitHub', value: 'github.com/bryanhubbarddev', href: 'https://github.com/bryanhubbarddev', icon: '🐙' },
  ];

  copyEmail(event: Event): void {
    event.preventDefault();
    const emailLink = this.links.find((l) => l.label === 'Email');
    const email = emailLink?.value ?? (emailLink?.href || '').replace('mailto:', '');
    if (!email) return;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.copied = true;
        setTimeout(() => (this.copied = false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy email to clipboard:', err);
        alert('Failed to copy. Please copy manually: ' + email);
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
