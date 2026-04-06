import React, { useEffect } from 'react';
import NavBar from './components/Navbar/index.jsx';
import HeroSection from './components/Hero/index.jsx';
import AboutSection from './components/About/index.jsx';
import ProjectsSection from './components/Projects/index.jsx';
import ContactSection from './components/Contact/index.jsx';
import { injectStyles } from './styles.js';

injectStyles();

function App() {
  useEffect(() => {
    const setupSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    };
    setupSmoothScrolling();
  }, []);

  return (
    <div id="app">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;

// Global function to load project pages
window.loadProjectPage = async (type) => {
  let Component;
  if (type === 'mercado') {
    const { default: MercadoPublicoPage } = await import('./pages/MercadoPublico/index.jsx');
    Component = MercadoPublicoPage;
  } else if (type === 'cuidado') {
    const { default: CuidadoAmigoPage } = await import('./pages/CuidadoAmigo/index.jsx');
    Component = CuidadoAmigoPage;
  }
  // Clear body and inject styles
  document.body.innerHTML = '<div id="page-root"></div>';
  injectStyles();
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(document.getElementById('page-root'));
  root.render(<Component />);
  // Add back button
  const backButton = document.createElement('button');
  backButton.textContent = 'Voltar';
  backButton.className = 'btn btn-secondary position-fixed top-0 start-0 m-3';
  backButton.onclick = () => {
    window.location.reload();
  };
  document.body.appendChild(backButton);
};
