import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Giovana Veloso | Portfolio" },
    { name: "description", content: "Full-stack developer and designer." },
  ];
}

const projects = [
  {
    title: "Mercado Público",
    description:
      "A React-based web application with dynamic features for public market management.",
    image: "/images/logo_mp.png",
    href: "/mercado-publico",
  },
  {
    title: "Cuidado Amigo",
    description:
      "A Flutter app that helps older adults access caregivers and other services.",
    image: "/images/logo_CA.png",
    href: "/cuidado-amigo",
  },
  {
    title: "Project 3",
    description: "Mobile app created with React Native.",
    image: "/images/placeholder-126x126.png",
    href: null,
  },
];

export default function Home() {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <nav className="container" aria-label="Main navigation">
          <a className="navbar-brand" href="#home">
            Portfolio
          </a>
          <div className="navbar-nav ms-auto flex-row flex-wrap gap-3">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero bg-primary text-white text-center">
          <div className="container">
            <h1 className="display-4">Welcome to My Portfolio</h1>
            <p className="lead mb-0">Full-stack developer &amp; designer</p>
          </div>
        </section>

        <section id="about" className="py-5">
          <div className="container content-narrow">
            <h2 className="mb-4">About Me</h2>
            <p>
              My name is Giovana Veloso, I&apos;m 26 years old and from Brasília,
              Federal District. I have a degree in Computer Science and I&apos;m
              currently looking for new job opportunities or projects to
              contribute to. My goal is to find a stable and comfortable place
              to work where I can put my skills and studies into practice.
            </p>
            <p>
              I enjoy talking and exchanging ideas, so feel free to reach out
              without commitment. I&apos;m a Full-Stack Developer passionate about
              creating beautiful and functional web applications.
            </p>
            <p className="mb-0">
              I&apos;m focused on my projects and always eager to learn and grow in
              the tech industry.
            </p>
          </div>
        </section>

        <section id="projects" className="py-5 bg-light">
          <div className="container">
            <h2 className="mb-4">Projects</h2>
            <div className="row g-4">
              {projects.map((project) => {
                const content = (
                  <div className="card h-100 project-card">
                    <div className="card-body d-flex align-items-center">
                      <img
                        src={project.image}
                        alt=""
                        className="project-img"
                      />
                      <div className="project-content">
                        <h3 className="h5 card-title">{project.title}</h3>
                        <p className="card-text mb-0">{project.description}</p>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <div key={project.title} className="col-md-6 col-lg-4">
                    {project.href ? (
                      <a className="project-link" href={project.href}>
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-5">
          <div className="container text-center">
            <h2>Get In Touch</h2>
            <p>
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>
            <div className="mt-4 d-flex flex-wrap justify-content-center gap-2">
              <a href="mailto:gvelosodev@gmail.com" className="btn btn-primary">
                Email
              </a>
              <a
                href="https://github.com/Mitsune-e"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/giovanaveloso/"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
