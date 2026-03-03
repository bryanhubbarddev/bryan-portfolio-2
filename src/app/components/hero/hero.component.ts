import { Component, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  phraseComplete = signal(false);
  activeTag = signal<string | null>(null);

  bookTitleDisplay = signal('');
  bookTitleComplete = signal(false);
  private readonly bookTitle = 'The Future is Faster Than You Think';
  private bookTitleIndex = 0;
  private bookTitleTimeoutId: ReturnType<typeof setTimeout> | null = null;

  techTags = [
    { name: 'Angular', tooltip: 'Web application framework' },
    { name: 'TypeScript', tooltip: 'Typed JavaScript' },
    { name: 'React', tooltip: 'UI library' },
    { name: 'JavaScript', tooltip: 'Programming language' },
    { name: 'Next.js', tooltip: 'React framework' },
    { name: 'Spring Boot', tooltip: 'Backend framework' },
    { name: 'Java', tooltip: 'Programming language' },
    { name: 'Python', tooltip: 'Programming language' },
    { name: 'SQL', tooltip: 'Structured Query Language' },
    { name: 'NRQL', tooltip: 'New Relic Query Language' },
    { name: 'Flutter', tooltip: 'Cross-platform UI toolkit' },
    { name: 'Dart', tooltip: 'Programming language (Flutter)' },
  ];

  private titles = [
    'Software Engineer',
    'Technology Presenter',
    'Project Manager',
    'Corporate Trainer',
    'Project Analyst',
    'Full-Stack Developer',
    'Observability Builder',
    'AI/ML Practitioner',
    'Problem Solver',
    'Software Consultant',
    'Leadership Mentor and Coach',
  ];

  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.typeWriter();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.bookTitleDisplay.set(this.bookTitle);
      this.bookTitleComplete.set(true);
    } else {
      this.typeBookTitle();
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    if (this.bookTitleTimeoutId) clearTimeout(this.bookTitleTimeoutId);
  }

  private typeBookTitle() {
    if (this.bookTitleIndex < this.bookTitle.length) {
      this.bookTitleDisplay.set(this.bookTitle.slice(0, ++this.bookTitleIndex));
      this.bookTitleTimeoutId = setTimeout(() => this.typeBookTitle(), 80);
    } else {
      this.bookTitleComplete.set(true);
      this.bookTitleTimeoutId = setTimeout(() => {
        this.bookTitleIndex = 0;
        this.bookTitleDisplay.set('');
        this.bookTitleComplete.set(false);
        this.typeBookTitle();
      }, 4000);
    }
  }

  private typeWriter() {
    const current = this.titles[this.titleIndex];
    const speed = this.isDeleting ? 60 : 110;

    if (!this.isDeleting) {
      this.displayText.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.phraseComplete.set(true);
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typeWriter(), 2200);
        return;
      }
    } else {
      this.phraseComplete.set(false);
      this.displayText.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }
    }

    this.timeoutId = setTimeout(() => this.typeWriter(), speed);
  }

  scrollToAbout(event: Event) {
    event.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }

  setActiveTag(name: string) {
    this.activeTag.update((current: string | null) => (current === name ? null : name));
  }

  handleTagKeydown(name: string, event: Event) {
    event.preventDefault();
    this.setActiveTag(name);
  }

  @HostListener('document:click', ['$event']) onDocClick(e: Event) {
    if (!(e.target as HTMLElement).closest('.tech-float')) this.activeTag.set(null);
  }
}
