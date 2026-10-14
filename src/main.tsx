import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element');

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production HTML is prerendered at build time, so hydrate it.
// In `npm run dev` the root is empty, so render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
