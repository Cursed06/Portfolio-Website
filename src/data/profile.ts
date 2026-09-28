import { ProfileData } from '@/types';

export const profileData: ProfileData = {
  name: 'Rama Prodjowijono',
  roleTitle: 'CS Student & Visual Designer',
  tagline: 'Building robust systems with tactile, high-fidelity digital craft.',
  availability: 'Available for Software Engineering & Tech Internships',
  isAvailable: true,
  avatarUrl: '/images/profile.jpg',
  bio: [
    'Computer Science undergraduate at BINUS University with a dual focus on full-stack software development and high-discipline visual communications.',
    'Bridging technical rigor (algorithms, backend architectures, mobile apps) with expressive visual craft (editorial design, motion graphics, and brand systems).'
  ],
  location: 'Jakarta Barat & Malang, Indonesia',
  education: {
    degree: "Bachelor's Degree, Computer Science",
    university: 'BINUS University',
    period: '2024 — Present',
    gpa: '3.71 / 4.00',
    honors: 'Relevant: Software Engineering, Database Technology, Software Architecture, Mobile Tech'
  },
  secondaryEducation: {
    school: 'SMK Widiatmika',
    major: 'Multimedia (Graphic Design, Animation, Videography)',
    period: '2021 — 2024',
    location: 'Badung, Bali'
  },
  socials: {
    github: 'https://github.com/Cursed06',
    linkedin: 'https://www.linkedin.com/in/rama-prodjowijono/',
    email: 'darien.prodjowijono@binus.ac.id',
    instagram: 'https://instagram.com/visualsbyr_',
  },
  resumeUrl: '/resume.pdf'
};

