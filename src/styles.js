// All Styles in JavaScript - CSS-in-JS Approach
export function injectStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Bootstrap and Bootstrap Icons */
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
    @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');

    /* Custom styles */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
    }

    .hero {
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    section {
      scroll-margin-top: 60px;
    }

    .card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .project-img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .project-content {
      flex-grow: 1;
    }
  `;

  document.head.appendChild(styleElement);

  // Also load Bootstrap JS for functionality
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
  document.head.appendChild(bootstrapScript);
}
