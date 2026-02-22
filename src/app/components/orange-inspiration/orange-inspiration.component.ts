import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orange-inspiration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orange-inspiration.component.html',
  styleUrls: ['./orange-inspiration.component.css'],
})
export class OrangeInspirationComponent implements OnInit {
  techStack = ['Angular', 'TypeScript', 'Firebase', 'Google Cloud Platform'];
  appUrl = 'https://ng-orange-inspiration.web.app/';

  scrollToProjects(event: Event) {
    event.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
