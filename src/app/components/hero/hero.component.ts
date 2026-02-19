import { Component, OnInit, signal, OnDestroy } from '@angular/core';
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
  showCursor = signal(true);
  phraseComplete = signal(false);

  private titles = [
    'Software Engineer',
    'AI/ML Engineer',
    'Observability Builder',
    'Product Support Technician',
    'Security Operations Analyst',
    'Cyber Security Analyst',
    'Product Solution Engineer',
    'Keynote Speaker',
    'Problem Solver',
    'Software Consultant',
  ];

  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
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
}
