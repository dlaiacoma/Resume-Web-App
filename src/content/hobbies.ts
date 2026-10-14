import type { Hobby } from './types';

export const hobbiesIntro = {
  title: "When I'm not shipping code",
  subtitle: 'North Jersey is a good home base for all of it.',
};

export const hobbies: Hobby[] = [
  {
    kind: 'photo',
    title: 'Dad first',
    icon: 'heart',
    body: 'The most important job I have. My favorite riding buddy is already in training.',
    photo: {
      src: '/img/dad-ktm',
      alt: 'Davin and his daughter giving a thumbs up on his orange dirt bike',
      focus: '50% 35%',
    },
  },
  {
    kind: 'photo',
    title: 'On the trails',
    icon: 'gauge',
    body: 'Dirt bike days on a 2026 KTM 250 XC, mountain bike when I want to earn the climb. Roots and rocks are the best debugging break there is.',
    photo: {
      src: '/img/trail-ride',
      alt: 'Davin smiling with his mountain bike on a wooded trail',
      focus: '50% 18%',
    },
  },
  {
    kind: 'photo',
    title: 'Skiing & outdoors',
    icon: 'snowflake',
    body: 'Winters on the slopes, the rest of the year outside however I can get there.',
    photo: {
      src: '/img/ski-summit',
      alt: 'Ski selfie with mirrored goggles above snow-covered trees and mountains',
      focus: '50% 50%',
    },
  },
  {
    kind: 'sheet',
    title: 'Old School RuneScape',
    icon: 'pickaxe',
    body: 'A long-time grind I still love, and proof that patience and a good plan pay off.',
    rows: [
      { label: 'Java', level: '99', progress: 100 },
      { label: 'Fatherhood', level: '99', progress: 100 },
      { label: 'Patience', level: '99', progress: 100 },
    ],
  },
];
