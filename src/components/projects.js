// Projects Section Component
export function createProjectsSection() {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'py-5 bg-light';

  const projects = [
    {
      title: 'Mercado Publico',
      description: 'A React-based web application with dynamic features. Government project for public market management.',
      image: './src/images/logo_mp.png'
    },
    {
      title: 'Cuidado Amigo',
      description: 'Flutter app that helps elderly people have acess to caratakers and other types services.',
      image: './src/images/logo_CA.png'
    },
    {
      title: 'Project 3',
      description: 'Mobile app created with React Native.',
      image: 'https://via.placeholder.com/120'
    }
  ];

  let projectsHTML = `
    <div class="container">
      <h2>Projects</h2>
      <div class="row">
  `;

  projects.forEach(project => {
    projectsHTML += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body d-flex">
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-content">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  projectsHTML += `
      </div>
    </div>
  `;

  section.innerHTML = projectsHTML;
  return section;
}
