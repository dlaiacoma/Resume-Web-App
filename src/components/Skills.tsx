import { skillGroups } from '../content/skills';
import { SectionHeading } from './SectionHeading';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap stack skills-body">
        <SectionHeading index="03" label="Skills" title="The toolbox" />
        <div className="skill-grid">
          {skillGroups.map((g) => (
            <div key={g.name} className="stack skill">
              <strong>{g.name}</strong>
              <span>{g.items.join(' · ')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
