import { profile } from '../content/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <span>
          © {year} {profile.name} · {profile.location}
        </span>
        <span className="mono">Built with care, tested before it shipped.</span>
      </div>
    </footer>
  );
}
