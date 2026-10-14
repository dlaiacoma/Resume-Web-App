import type { Profile } from '../content/types';

type ImpactCardProps = Profile['impact'];

export function ImpactCard({ request, stats, footer }: ImpactCardProps) {
  return (
    <aside className="stack impact" aria-label="Impact highlights">
      <div className="impact-head">
        <span>{request}</span>
        <span className="ok">200 OK</span>
      </div>
      <div className="impact-grid">
        {stats.map((stat) => (
          <div key={stat.value} className="stack stat">
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="impact-foot">{footer}</div>
    </aside>
  );
}
