import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Bump ?v= when replacing the file or if browsers serve a stale cached response. */
const HOMERCON_VIDEO_SRC = '/assets/videos/Demo-Final.mp4?v=2';

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
      videoPlaceholder: false,
      slides: [
        {
          src: 'assets/images/Purpose.AI.png',
          alt: 'How We Actually Use AI — Purpose, Positioning, and Pipeline slide',
        },
        {
          src: 'assets/images/BryanAI.png',
          alt: 'From AI to Strategy — Bryan B. Hubbard II slide',
        },
        {
          src: 'assets/images/TechEd.png',
          alt: 'Tech Ed virtual session with Nadia Bilchik and Bryan Hubbard',
        },
      ],
      link: 'assets/documents/From-AI-to-Strategy.pdf',
      linkLabel: 'View Full Tech Ed Presentation (PDF)',
    },
    {
      title: 'HomerCon — Innovation & Observability',
      type: 'Conference Keynote',
      icon: '',
      description:
        'Delivered enterprise technology presentations at The Home Depot\'s internal HomerCon conference, focusing on innovation, observability strategy, and technology transformation.',
      tags: ['Observability', 'Innovation', 'Enterprise Tech'],
      videoPlaceholder: false,
      video: HOMERCON_VIDEO_SRC,
    },
    {
      title: 'Toastmasters International',
      type: 'Toastmasters Leadership',
      icon: '',
      description:
        'As Area Director, I support multiple clubs through keynote speeches, communication training, and executive presence coaching. Area direction is about guiding clubs, mentoring leaders, and helping members grow—from first speeches to advanced leadership.',
      tags: ['Leadership', 'Communication', 'Coaching'],
      videoPlaceholder: false,
      links: [
        { href: 'https://www.toastmasters.org/', label: 'Learn what Toastmasters offers' },
        { href: 'https://www.toastmasters.org/magazine', label: 'Toastmaster magazine' },
      ],
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
