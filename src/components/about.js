// About Section Component
export function createAboutSection() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'py-5';

  section.innerHTML = `
    <div class="container">
      <h2>About Me</h2>
      <p>My name is Giovana Veloso, I'm 26 years old and from Brasília, Federal District. I have a degree in Computer Science and I'm currently looking for new job opportunities or projects to contribute to. My goal is to find a stable and comfortable place to work where I can put my skills and studies into practice.</p>
      <p>I enjoy talking and exchanging ideas, so feel free to reach out without commitment. I'm a Full-Stack Developer passionate about creating beautiful and functional web applications.</p>
      <p>I'm focused on my projects and always eager to learn and grow in the tech industry.</p>
    </div>
  `;

  return section;
}
