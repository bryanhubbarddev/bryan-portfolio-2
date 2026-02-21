import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Job {
  title: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  activeJob = signal(0);

  jobs: Job[] = [
    {
      title: 'Software Engineer',
      company: 'The Home Depot',
      period: 'Nov 2025 - Present',
      type: 'Full-Time · Remote',
      highlights: [
        'Platform & Observability Engineering',
        'Enterprise Modernization: Architected and maintained 20+ React micro frontends (MFEs) for web platforms and integrated comprehensive mobile telemetry within Flutter and Dart warehouse applications',
        'Data-Driven Performance: Spearheaded a New Relic modernization initiative through custom NRQL dashboards and automated alerting for web and mobile environments',
        'Environment-Aware Logic: Engineered runtime telemetry controls to optimize performance and error tracking across distributed enterprise warehouse devices',
        'Full-Stack Engineering & Delivery',
        'Collaborates with product teams (UX, engineering, product management) to create secure, reliable, and scalable software solutions aligned to business needs',
        'Documents and ensures quality and change control standards are met; works with Product Team to deliver developer-ready, testable user stories',
        'Writes custom code and scripts to automate infrastructure, monitoring services, and test cases; performs destructive testing to ensure production resiliency',
        'Configures commercial off-the-shelf solutions and creates meaningful dashboards, logging, and alerting to proactively capture and address issues',
        'Angular 19 Execution: Delivering high-performance features using Standalone Components and Signals for optimized, fine-grained reactivity',
        'Polyglot Engineering: Delivers features across 10+ coding languages and frameworks including Angular, React, TypeScript, Java, Python, SQL, Flutter, and Dart across web, mobile, and backend systems',
        'System Integration: Engineered robust data pipelines between frontend interfaces and Java/Spring Boot APIs across six core pillars: COM, DNA, POS, Finance, RECON, and Salesforce',
        'Collaborates within agile processes and assists in creating better team workflows; builds partnerships and works collaboratively with diverse cross-functional groups',
        'Agile Documentation: Enhanced developer experience (DevEx) by authoring architectural decision records in Confluence and managing cross-functional epics in Jira to align technical delivery with platform goals',
      ],
    },
    {
      title: 'Software Engineer (Apprenticeship)',
      company: 'The Home Depot',
      period: 'Jan 2025 - Oct 2025',
      type: 'OrangeMethod Program',
      highlights: [
        'Completed OrangeMethod Software Engineering Apprenticeship focused on full-stack engineering',
        'Developed, tested, deployed, and maintained software with guidance from senior engineers across real enterprise environments',
        'Built projects using Java, Spring Boot, JavaScript, SQL, HTML, and CSS',
        'Applied microservice-based architecture patterns, CI/CD pipeline practices, and source code version control (Git/GitHub)',
        'Leveraged cloud computing techniques and relational database technologies in production-grade systems',
        'Collaborated in Agile sprint teams delivering enterprise features',
        'Applied design thinking, prototyping, and solution presentations to address real business challenges',
        'Integrated telemetry across HDW warehouse platforms supporting observability initiatives',
        'Contributed to logistics visibility tooling across Direct Fulfillment Center platforms',
        'Worked on React, JavaScript, and Flutter development tasks',
        'Demonstrated nimble learning and adaptability by navigating ambiguous enterprise challenges across multiple codebases and teams',
      ],
    },
    {
      title: 'Product Support Technician',
      company: 'The Home Depot',
      period: 'Dec 2021 - Dec 2024',
      type: 'Full-Time',
      highlights: [
        'Resolved 230+ enterprise incidents monthly across store systems and supply chain platforms',
        'Reduced recurring incidents through root cause analysis and documentation',
        'Served as subject matter expert supporting engineering on-call rotations',
        'Validated fixes, monitored releases, and improved system reliability',
        'Cross-Functional System Support: Collaborated across six major enterprise pillars—COM (Customer Order Management), DNA (Data and Analytics), POS (Point of Sale), Finance, RECON (Financial Reconciliation), and Salesforce (CRM)—to ensure seamless data flow and system integrity',
        'Enterprise Reliability: Managed technical support and incident resolution for high-availability systems, bridging the gap between frontend retail operations and backend financial services',
        'Application Operations: Monitored and maintained application operations for store systems including OrderUp, driving incident resolution and system reliability for retail-facing platforms',
      ],
    },
    {
      title: 'Product Support Apprentice (OrangeMethod)',
      company: 'The Home Depot',
      period: '2021 · 12 weeks',
      type: 'OrangeMethod Program',
      highlights: [
        'Technical Immersion: Completed a competitive 12-week intensive technical curriculum focused on enterprise application support, server-side logic, and modern software design practices',
        'Agile Framework: Collaborated in a high-velocity, Agile environment to master full-stack development fundamentals (Java/JavaScript) and industry-standard version control',
        'Systems Engineering: Applied root-cause analysis and diagnostic logic to resolve complex enterprise software issues, ensuring 24/7 availability for critical store-facing platforms',
      ],
    },
    {
      title: 'Global Operations Officer',
      company: 'The Home Depot',
      period: 'Sep 2019 - Sep 2021',
      type: 'GSOC · ATC · ATN · SSC · Full-Time',
      highlights: [
        'Monitored and analyzed 100,000+ security events in enterprise GSOC (Global Security Operations Center) environment across ATC (Austin Technology Center), ATN (Austin Technology North), and SSC (Store Service Center)',
        'Oversaw network health and system uptime across all facilities in the United States, Mexico, and Canada — with primary focus on U.S. operations',
        'Managed day-to-day access control and alarm monitoring for corporate, residential, and enterprise facilities on a global basis',
        'Operated and managed CCTV systems, processed video footage requests, and conducted security inspection tours to identify and document vulnerabilities',
        'Served as first point of contact for emergency response — coordinating 911 dispatch, associate and executive evacuations, and contingency plan execution',
        'Investigated incidents and escalated critical risks to appropriate teams',
        'Authored incident reports, interviewed witnesses, and supported investigative teams with data analysis, logistics, and vehicle tracking',
        'Strengthened enterprise monitoring workflows and security reporting processes',
      ],
    },
    {
      title: 'Specialty Supervisor',
      company: 'The Home Depot',
      period: 'Jan 2018 - Aug 2019',
      type: 'Leadership',
      highlights: [
        'Led and coached a team of 13 associates across specialty departments',
        'Trained, motivated, and developed associates through daily feedback, performance coaching, and recognition — building a high-performing team culture',
        'Provided input into merchandising and operational decisions, partnering with store management to drive execution and department strategy',
        'Monitored planogram compliance, bay integrity, and merchandise presentation standards to ensure a consistent and appealing customer experience',
        'Conducted store walks, assessed department health, and created daily game plans communicated across the team',
        'Managed POP signage, markdowns, and inventory accuracy across multiple specialty department areas',
        'Improved operational performance metrics and customer experience delivery',
        'Developed leadership and communication skills that now drive my engineering approach',
      ],
    },
    {
      title: 'Clinical Counselor',
      company: 'Texas A&M University Corpus Christi',
      period: '2011 - 2012',
      type: 'Clinical',
      highlights: [
        'Provided psychological treatment, crisis intervention, and brief individual counseling services to Texas A&M University-Corpus Christi students at the University Counseling Center',
        'Conducted intake assessments, clinical evaluations, and developed individualized treatment plans for students presenting with a range of concerns including trauma, anxiety, and life-threatening crises',
        'Utilized the SOAP (Subjective, Objective, Assessment, Plan) framework for systematic problem-solving and diagnostic logic',
        'Collaborated with licensed practitioners to develop data-driven treatment roadmaps for over 100 high-stakes cases',
        'Provided triage and counselor-on-duty services, participating in weekly case conferences and informal consultation to coordinate client care across the counseling team',
        'Maintained accurate and timely documentation within an electronic medical records (EMR) system in compliance with clinical and institutional standards',
        'Delivered consultation and outreach services to students, campus departments, and community members on mental health awareness and student well-being',
      ],
    },
    {
      title: 'Special Education Teacher',
      company: 'Gregory-Portland High School',
      period: '2010 - 2011',
      type: 'Education',
      highlights: [
        'Served across four special education program areas: Inclusion, Content Mastery, Life Skills, and Behavioral Unit (BAU) — providing differentiated instruction and support tailored to each setting',
        'Engineered and implemented Individualized Education Programs (IEP) and facilitated ARD (Admission, Review, and Dismissal) committee meetings including annual reviews and dismissals — with a focus on accessibility in tech ed and a user-centric, solution-focused approach across multi-axis domains, in technology as well as in the classroom',
        'Collaborated with general education teachers to modify curricula, co-teach content area classes, and support students with disabilities in inclusive classroom environments',
        'Designed and delivered individualized instructional, therapeutic, and skill-development programs based on student learning styles, ability levels, and IEP goals using varied techniques and technology',
        'Conducted formal and informal assessments of student achievement to monitor progress, identify interventions, and inform instructional adjustments',
        'Served as case manager for assigned special education students — monitoring grades, providing academic intervention for at-risk students, and ensuring IEPs were appropriately implemented',
        'Managed student behavior including de-escalation, crisis intervention, and physical restraint protocols in accordance with IEP requirements and district policy',
        'Engineered individualized behavior modification plans — defining triggers, interventions, and measurable outcome targets using a systems-thinking approach aligned to each student\'s IEP',
        'Implemented and configured assistive technology devices and adaptive tools for students with disabilities — applying a user-centric, accessibility-first engineering mindset to ensure each solution matched the student\'s functional needs and learning environment',
        'Directed the work of instructional aides and volunteers, coordinating daily support activities across program settings',
        'Consulted with district and community resources regarding students\' educational, social, medical, and personal needs',
        'Maintained compliance with federal, state, and district special education regulations; compiled and filed all required reports and documentation',
        'Provided guidelines, structure, and oversight for the Content Mastery Center (CMC) — monitoring record-keeping of student services and ensuring IEPs were appropriately implemented within the CMC setting',
        'Coordinated Intervention Assistance Team (IAT) processes to identify early interventions and connect students with appropriate support services before formal evaluation',
        'Facilitated parent, student, administrator, and teacher conferences on academic progress, behavioral concerns, and school-related issues — maintaining open and consistent communication across all stakeholders',
        'Developed and implemented transition plans for high school students with disabilities — setting post-secondary goals aligned to each student\'s strengths, functional abilities, and future pathway',
        'Applied Specially Designed Instruction (SDI) principles using Universal Design for Learning (UDL) frameworks to deliver research-based, accessible instruction across all program settings',
        'Participated in staff development activities, faculty meetings, and served on school committees to continuously improve instructional practice and stay current with special education standards',
        'Partnered with a cross-functional team of 32 stakeholders to iterate on instructional delivery, resulting in a 70% increase in positive outcomes',
      ],
    },
    {
      title: 'Health & Safety Manager',
      company: 'American Red Cross',
      period: '2008 - 2009',
      type: 'Operations',
      highlights: [
        'Managed a distributed network of 48+ providers across 19 counties',
        'Scaled regional operations through standardized training protocols and directed large-scale resource allocation campaigns to ensure service reliability',
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

  setActive(index: number) {
    this.activeJob.set(index);
  }
}
