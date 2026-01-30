// Contact Section Component
export function createContactSection() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'py-5';

  section.innerHTML = `
    <div class="container text-center">
      <h2>Get In Touch</h2>
      <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
      <div class="mt-4">
        <a href="mailto:gvelosodev@gmail.com" class="btn btn-primary me-2">Email</a>
        <a href="https://github.com/Mitsune-e" class="btn btn-outline-primary me-2">GitHub</a>
        <a href="https://www.linkedin.com/in/giovanaveloso/" class="btn btn-outline-primary">LinkedIn</a>
      </div>
    </div>
  `;

  return section;
}
