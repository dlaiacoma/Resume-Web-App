import { hobbies, hobbiesIntro } from '../content/hobbies';
import type { CharacterSheetRow, Hobby, Photo } from '../content/types';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';
import './OffTheClock.css';

function HobbyPhoto({ photo }: { photo: Photo }) {
  return (
    <div className="hobby-art">
      <picture>
        <source srcSet={`${photo.src}.webp`} type="image/webp" />
        <img
          src={`${photo.src}.jpg`}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
        />
      </picture>
    </div>
  );
}

function CharacterSheet({ rows }: { rows: CharacterSheetRow[] }) {
  return (
    <div className="sheet" role="img" aria-label="A playful character sheet with every stat at level 99">
      <div className="prompt">&gt; character sheet</div>
      {rows.map((r) => (
        <div key={r.label} className="sheet-row">
          <div className="row">
            <span>{r.label}</span>
            <b>{r.level}</b>
          </div>
          <div className="bar">
            <i style={{ width: `${Math.max(0, Math.min(100, r.progress))}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function HobbyCard({ hobby }: { hobby: Hobby }) {
  return (
    <article className="hobby">
      {hobby.kind === 'photo' ? <HobbyPhoto photo={hobby.photo} /> : <CharacterSheet rows={hobby.rows} />}
      <div className="stack hobby-body">
        <div className="hobby-title">
          <Icon name={hobby.icon} size={22} className="hobby-icon" />
          <h3>{hobby.title}</h3>
        </div>
        <p>{hobby.body}</p>
      </div>
    </article>
  );
}

export function OffTheClock() {
  return (
    <section id="offline" className="forest">
      <div className="wrap section stack section-body">
        <SectionHeading index="04" label="Off the clock" title={hobbiesIntro.title} subtitle={hobbiesIntro.subtitle} />
        <div className="hobby-grid">
          {hobbies.map((h) => (
            <HobbyCard key={h.title} hobby={h} />
          ))}
        </div>
      </div>
    </section>
  );
}
