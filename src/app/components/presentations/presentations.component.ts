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
      link: 'https://1drv.ms/p/c/578C06DAEDDB1D9C/IQDFIFJHJb_3ToCB6jCvCFiKASGdTLIj5bdDhC1343hfdho?e=lei8mR',
      linkLabel: 'View Full Tech Ed Presentation',
    },
    {
      title: 'HomerCon — Innovation & Observability',
      type: 'Conference Keynote',
      icon: '',
      description:
        'Delivered enterprise technology presentations at The Home Depot\'s internal HomerCon conference, focusing on innovation, observability strategy, and technology transformation.',
      tags: ['Observability', 'Innovation', 'Enterprise Tech'],
      videoPlaceholder: false,
      video: 'assets/videos/Demo-Final.mp4',
    },
    {
      title: 'Toastmasters Leadership Sessions',
      type: 'Area Director Workshops',
      icon: '',
      description:
        'As Area Director, I support multiple clubs through keynote speeches, communication training, and executive presence coaching. Area direction is about guiding clubs, mentoring leaders, and helping members grow—from first speeches to advanced leadership.',
      tags: ['Leadership', 'Communication', 'Coaching'],
      videoPlaceholder: false,
      link: 'https://www.toastmasters.org/',
      linkLabel: 'Learn what Toastmasters offers',
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
