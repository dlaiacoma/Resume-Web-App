import { featuredProject, repos } from '../content/projects';
import { profile } from '../content/profile';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';
import { Tags } from './Tags';
import './Projects.css';

export function Projects() {
  const p = featuredProject;
  return (
    <section id="projects" className="band">
      <div className="wrap section stack section-body">
        <div className="proj-head">
          <SectionHeading index="02" label="Projects" title="Things I've built" />
          <a href={profile.links.github.href} className="arrow-link" target="_blank" rel="noopener noreferrer">
            All repos on GitHub
            <Icon name="arrow" />
          </a>
        </div>
        <div className="proj-grid">
          <article className="stack feature">
            <div className="meta">
              <span>{p.meta[0]}</span>
              <span>{p.meta[1]}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <Tags items={p.tags} className="on-dark" />
          </article>
          <div className="stack repo-col">
            {repos.map((r) => (
              <a key={r.href} href={r.href} className="stack repo" target="_blank" rel="noopener noreferrer">
                <span className="kicker">
                  <span>{r.kicker}</span>
                  {r.language && <span aria-hidden={r.language === '→'}>{r.language}</span>}
                </span>
                <strong>{r.title}</strong>
                <span className="desc">{r.description}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
