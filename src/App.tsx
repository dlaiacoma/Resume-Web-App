import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OffTheClock } from './components/OffTheClock';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import './styles/global.css';

/**
 * Page composition. To add a section: create a component in ./components,
 * give its <section> an id, add it here, and add a nav link in content/navigation.ts.
 */
export function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <OffTheClock />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
