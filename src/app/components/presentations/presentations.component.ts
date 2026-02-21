import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css'],
})
export class PresentationsComponent implements OnInit {
  presentations = [
    {
      title: 'Tech Ed',
      type: 'Technology Education',
      icon: '',
      description:
        'Delivered technology education sessions, sharing technical knowledge and best practices with teams and stakeholders.',
      tags: ['Tech Ed', 'Training', 'Knowledge Sharing'],
      videoPlaceholder: true,
    },
    {
      title: 'HomerCon — Innovation & Observability',
      type: 'Conference Keynote',
      icon: '',
      description:
        'Delivered enterprise technology presentations at The Home Depot\'s internal HomerCon conference, focusing on innovation, observability strategy, and technology transformation.',
      tags: ['Observability', 'Innovation', 'Enterprise Tech'],
      videoPlaceholder: true,
    },
    {
      title: 'Toastmasters Leadership Sessions',
      type: 'Area Director Workshops',
      icon: '',
      description:
        'As Area Director, delivered keynote speeches, communication training, and executive presence coaching across multiple clubs. Mentored speakers at all levels of their communication journey.',
      tags: ['Leadership', 'Communication', 'Coaching'],
      videoPlaceholder: true,
    },
  ];

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
