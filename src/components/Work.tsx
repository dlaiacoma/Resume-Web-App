import { jobs } from '../content/experience';
import type { Job } from '../content/types';
import { SectionHeading } from './SectionHeading';
import { Tags } from './Tags';
import './Work.css';

function JobBlock({ job }: { job: Job }) {
  const subtitle = [job.role, job.period, job.note].filter(Boolean).join(' · ');
  return (
    <div className="stack section-body">
      <SectionHeading index="01" label="Work" title={job.company} subtitle={subtitle} />
      <div className="card-grid">
        {job.highlights.map((h) => (
          <article key={h.kicker} className="stack card">
            <span className="kicker">{h.kicker}</span>
            <h3>{h.title}</h3>
            <p>{h.body}</p>
            <Tags items={h.tags} />
          </article>
        ))}
      </div>
      {job.leadership.length > 0 && (
        <div className="lead-strip">
          {job.leadership.map((item) => (
            <div key={item.title} className="stack">
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap stack work-jobs">
        {jobs.map((job) => (
          <JobBlock key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
}
