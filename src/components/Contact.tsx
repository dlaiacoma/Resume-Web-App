import { profile } from '../content/profile';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';
import './Contact.css';

export function Contact() {
  const { email, linkedin, github } = profile.links;
  return (
    <section id="contact" className="section">
      <div className="wrap contact-grid">
        <div className="stack contact-copy">
          <SectionHeading index="05" label="Contact" title="Let's build something reliable." />
          <p>
            I'm interested in senior and lead backend roles where Java, distributed systems and thoughtful technical
            leadership matter.
          </p>
          <div className="contact-cta">
            <a href={profile.resumeHref} className="btn btn-accent" download>
              <Icon name="download" />
              Download resume (PDF)
            </a>
          </div>
        </div>
        <div className="links-card">
          {[email, linkedin, github].map((link) => {
            const external = link.href.startsWith('http');
            return (
              <a
                key={link.href}
                href={link.href}
                className="link-row"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon name={link.icon} size={22} />
                <span>
                  <small>{link.label}</small>
                  <b>{link.display ?? link.href}</b>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
