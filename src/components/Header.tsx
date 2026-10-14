import { profile } from '../content/profile';
import { navItems } from '../content/navigation';
import { Icon } from './Icon';
import './Header.css';

export function Header() {
  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main">
        <a href="#top" className="brand">
          <span className="monogram" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a href={profile.resumeHref} className="btn btn-accent btn-sm" download>
          <Icon name="download" />
          Resume
        </a>
      </nav>
    </header>
  );
}
