import { profile } from '../content/profile';
import { Icon } from './Icon';
import { ImpactCard } from './ImpactCard';
import { TopoBackground } from './TopoBackground';
import './Hero.css';

export function Hero() {
  const { linkedin, github } = profile.links;
  return (
    <section id="top" className="hero">
      <TopoBackground />
      <div className="wrap hero-grid">
        <div className="stack hero-copy">
          <div className="status">
            <span className="dot" aria-hidden="true" />
            {profile.availability} · {profile.location}
          </div>
          <h1>{profile.name}</h1>
          <p className="lede">{profile.tagline}</p>
          <p className="intro">{profile.intro}</p>
          <div className="cta-row">
            <a href={profile.resumeHref} className="btn btn-dark" download>
              <Icon name="file" />
              Download resume
            </a>
            {[linkedin, github].map((link) => (
              <a key={link.href} href={link.href} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                <Icon name={link.icon} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <ImpactCard {...profile.impact} />
      </div>
    </section>
  );
}
