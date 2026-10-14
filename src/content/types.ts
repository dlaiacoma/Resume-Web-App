import type { IconName } from '../components/Icon';

export interface Link {
  label: string;
  href: string;
  /** Short display text, e.g. "in/davin-laiacoma". */
  display?: string;
  icon: IconName;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  location: string;
  availability: string;
  tagline: string;
  intro: string;
  email: string;
  resumeHref: string;
  links: { linkedin: Link; github: Link; email: Link };
  impact: { request: string; stats: Stat[]; footer: string };
}

export interface ExperienceHighlight {
  kicker: string;
  title: string;
  body: string;
  tags: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  note?: string;
  highlights: ExperienceHighlight[];
  leadership: { title: string; body: string }[];
}

export interface FeaturedProject {
  name: string;
  meta: [string, string];
  description: string;
  tags: string[];
  href?: string;
}

export interface RepoCard {
  kicker: string;
  language?: string;
  title: string;
  description: string;
  href: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Photo {
  /** Path under /public, without extension. A .webp and .jpg of each must exist. */
  src: string;
  alt: string;
  /** CSS object-position, to keep the subject in frame when cropped. */
  focus?: string;
}

export interface CharacterSheetRow {
  label: string;
  level: string;
  /** 0–100, bar fill. */
  progress: number;
}

export interface HobbyLink {
  label: string;
  href: string;
}

interface HobbyBase {
  title: string;
  icon: IconName;
  body: string;
  /** Optional outbound link shown under the card text. */
  link?: HobbyLink;
}

export type Hobby =
  | (HobbyBase & { kind: 'photo'; photo: Photo })
  | (HobbyBase & { kind: 'sheet'; rows: CharacterSheetRow[]; handle?: string });
