// Main App Module
import { createNavBar } from './components/navbar.js';
import { createHeroSection } from './components/hero.js';
import { createAboutSection } from './components/about.js';
import { createProjectsSection } from './components/projects.js';
import { createContactSection } from './components/contact.js';
import { injectStyles } from './styles.js';

export function createApp() {
  // Inject all styles first
  injectStyles();

  // Create the main container
  const app = document.createElement('div');
  app.id = 'app';

  // Create and append all sections
  app.appendChild(createNavBar());
  app.appendChild(createHeroSection());
  app.appendChild(createAboutSection());
  app.appendChild(createProjectsSection());
  app.appendChild(createContactSection());

  // Append to body
  document.body.innerHTML = '';
  document.body.appendChild(app);

  // Set up smooth scrolling
  setupSmoothScrolling();
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
