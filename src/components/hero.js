// Hero Section Component
export function createHeroSection() {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'hero bg-primary text-white text-center py-5';

  section.innerHTML = `
    <div class="container">
      <h1 class="display-4">Welcome to My Portfolio</h1>
      <p class="lead">Full-stack developer & designer</p>
    </div>
  `;

  return section;
}
