import type { FeaturedProject, RepoCard } from './types';

export const featuredProject: FeaturedProject = {
  name: 'AI Engineering Health Platform',
  meta: ['Featured · Sole developer', 'Internal tool'],
  description:
    'Centralizes technical-debt campaigns, like a Splunk-to-Dynatrace migration, into one place to track rollouts. An AI chatbot answers from a knowledge store of past actions, Git release data feeds planning, and predefined changes open pull requests automatically. It can also apply SKILLS.md instruction files straight to repositories.',
  tags: ['FastAPI', 'React', 'PostgreSQL', 'OpenAI SDK'],
};

/** Add a repo here to show it on the site. */
export const repos: RepoCard[] = [
  {
    kicker: 'dlaiacoma / Resume-Web-App',
    language: 'React · TS',
    title: 'This site',
    description: 'React and TypeScript, prerendered at build time and deployed to GitHub Pages with Actions.',
    href: 'https://github.com/dlaiacoma/Resume-Web-App',
  },
  {
    kicker: 'github.com/dlaiacoma',
    language: '→',
    title: 'More on GitHub',
    description: 'Side projects, experiments and the code behind them.',
    href: 'https://github.com/dlaiacoma?tab=repositories',
  },
];
