import React from 'react';

function ProjectsSection() {
  const projects = [
    {
      title: 'Mercado Publico',
      description: 'A React-based web application with dynamic features. Government project for public market management.',
      image: './src/images/logo_mp.png',
      page: './src/pages/mercado_publico.jsx'
    },
    {
      title: 'Cuidado Amigo',
      description: 'Flutter app that helps elderly people have acess to caratakers and other types services.',
      image: './src/images/logo_CA.png',
      page: './src/pages/CuidadoAmigo/index.jsx'
    },
    {
      title: 'Project 3',
      description: 'Mobile app created with React Native.',
      image: 'https://via.placeholder.com/120',
      page: '#'
    }
  ];

  const handleClick = (project) => {
    if (project.title === 'Mercado Publico') {
      window.loadProjectPage('mercado');
    } else if (project.title === 'Cuidado Amigo') {
      window.loadProjectPage('cuidado');
    }
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.title} onClick={() => handleClick(project)} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-content">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
