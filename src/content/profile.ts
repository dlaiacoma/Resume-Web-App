import type { Profile } from './types';

export const profile: Profile = {
  name: 'Davin LaIacoma',
  initials: 'DL',
  title: 'Senior Software Engineer',
  location: 'Stanhope, NJ',
  availability: 'Open to senior & lead roles',
  tagline: 'Senior Software Engineer & Team Lead building backend systems that healthcare runs on.',
  intro:
    "Nine years of Java and Spring Boot at Evernorth (Cigna / Express Scripts): high-volume REST services, distributed integrations, and centralized security, plus an AI-enabled engineering tool I built solo. Off the keyboard you'll find me on a trail, on a ski slope, or with my kids.",
  email: 'd.laiacoma@gmail.com',
  resumeHref: '/Davin-LaIacoma-Resume.pdf',
  links: {
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/davin-laiacoma',
      display: 'in/davin-laiacoma',
      icon: 'linkedin',
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/dlaiacoma',
      display: 'github.com/dlaiacoma',
      icon: 'github',
    },
    email: {
      label: 'Email',
      href: 'mailto:d.laiacoma@gmail.com',
      display: 'd.laiacoma@gmail.com',
      icon: 'mail',
    },
  },
  impact: {
    request: 'GET /davin/impact',
    stats: [
      { value: '200+', label: 'calls / sec on an address service I architected' },
      { value: '60%', label: 'less traffic through the central gateway' },
      { value: '16+', label: 'Java services on centralized RBAC' },
      { value: '15k+', label: 'daily users on platforms I lead' },
    ],
    footer: 'team: 8 engineers + 2 QA · stack: java, spring boot, mongodb, kafka',
  },
};
