import type { Job } from './types';

export const jobs: Job[] = [
  {
    company: 'Evernorth Health Services',
    role: 'Software Engineer – Team Lead',
    period: '2017 – Present',
    note: 'Cigna / Express Scripts',
    highlights: [
      {
        kicker: 'Address Platform',
        title: 'A 200+ calls/sec service behind home-delivery prescriptions',
        body: 'Architected the REST service for member address create, update, delete and validation. Orchestrates member, benefit and USPS Code 1 validation calls before handing off to IBM MQ for async processing.',
        tags: ['Spring Boot', 'IBM MQ', 'Test-first'],
      },
      {
        kicker: 'User Administration API',
        title: 'Centralized access control across 16+ services',
        body: 'Built with the principal architect: a Spring Boot API for users, roles, permissions and client access, wired to Okta tokens and MongoDB.',
        tags: ['Okta', 'RBAC', 'MongoDB'],
      },
      {
        kicker: 'Gateway Re-Architecture',
        title: 'Cut central gateway traffic by 60%',
        body: 'Moved React static assets to external AWS DMZ deployments while keeping backend API routing intact, opening a path to client-facing access.',
        tags: ['AWS', 'React', 'Networking'],
      },
      {
        kicker: 'Customer Contact Platform',
        title: 'From first commit to 15,000+ daily users',
        body: 'Helped build the ground-up replacement for a legacy tool, then kept shipping: cart and payment, profiles, prescription views and order status across 50+ microservices.',
        tags: ['Microservices', 'Payments'],
      },
    ],
    leadership: [
      { title: 'Leading the team', body: 'Technical design and delivery for 8 engineers and 2 QA for over a year.' },
      { title: 'Partnering with product', body: 'Sizing, cost and impact trade-offs, breaking requirements into shippable work.' },
      { title: 'Raising the bar', body: 'Mentoring, onboarding, code reviews and production troubleshooting.' },
    ],
  },
];
