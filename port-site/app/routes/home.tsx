import type { Route } from "./+types/home";
import { ThemeToggle } from "../components/theme-toggle";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Giovana Veloso | Portfolio" },
    { name: "description", content: "Full-stack developer and designer." },
  ];
}

const projects = [
  {
    title: "Mercado Público",
    category: "Web application",
    description:
      "A React-based web application with dynamic features for public market management.",
    image: "/images/logo_mp.png",
    href: "/mercado-publico",
  },
  {
    title: "Cuidado Amigo",
    category: "Thesis project · Mobile app",
    description:
      "A Flutter app that helps older adults access caregivers and other services.",
    image: "/images/logo_CA.png",
    href: "/cuidado-amigo",
  },
  {
    title: "Saberes Senado",
    category: "Ongoing work · Moodle / PHP",
    description:
      "Updating the Brazilian Senate's online course platform, built with Moodle and PHP.",
    image: null,
    href: "/saberes-senado",
  },
];

export default function Home() {
  return (
    <>
      <header className="folio-header">
        <nav className="container folio-nav" aria-label="Main navigation">
          <a className="folio-brand" href="#home" aria-label="Giovana Veloso, home">
            <span>GV</span>
            <span className="brand-caption">Giovana Veloso</span>
          </a>
          <div className="folio-nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <ThemeToggle />
          <a className="nav-contact" href="mailto:gvelosodev@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section id="home" className="editorial-hero">
          <div className="container hero-container">
            <div className="hero-kicker">
              <span>Portfolio / 2026</span>
              <span>Brasília, Brazil</span>
              <span className="availability"><i /> Available for opportunities</span>
            </div>
            <h1 className="hero-title">
              Giovana
              <span>Veloso<em>.</em></span>
            </h1>
            <div className="hero-lower">
              <p className="hero-statement">
                Full-stack developer<br />
                <span>making digital work feel human.</span>
              </p>
              <div className="hero-summary">
                <p>
                  I&apos;m a Computer Science graduate who enjoys turning complex
                  ideas into clear, useful web experiences. Thoughtful code,
                  good collaboration, and room to keep learning.
                </p>
                <a className="hero-link" href="#projects">
                  Explore selected work <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="hero-baseline">
              <span>Web / Mobile / Useful by design</span>
              <span>01 — 03 selected projects</span>
            </div>
          </div>
        </section>

        <section id="about" className="folio-section about-section">
          <div className="container section-grid">
            <p className="section-index">01 / About</p>
            <div className="section-content">
              <h2>Building thoughtful things, with people in mind.</h2>
              <p>
                I&apos;m Giovana, a developer from Brasília with a degree in
                Computer Science. I care about making digital products that are
                useful, easy to understand, and a pleasure to use.
              </p>
              <p>
                I&apos;m currently looking for new opportunities and collaborative
                projects. I value open communication, learning from others, and
                bringing care to every stage of the work.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="folio-section skills-section">
          <div className="container">
            <p className="section-index">02 / Skills</p>
            <div className="section-heading-row">
              <h2>Tools I work with</h2>
              <p>Curious by nature, always learning.</p>
            </div>
            <div className="skill-list">
              {["React", "JavaScript", "TypeScript", "Node.js", "SQL Server", "Flutter", "Dart", "Firebase", "HTML & CSS"].map((skill, index) => (
                <span className="skill-item" key={skill}>
                  <span className="skill-number">0{index + 1}</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="folio-section experience-section">
          <div className="container section-grid">
            <p className="section-index">03 / Experience</p>
            <div className="section-content">
              <h2>Selected experience</h2>
              <div className="experience-list">
                <article className="experience-item">
                  <span className="experience-marker" />
                  <div>
                    <p className="eyebrow">Thesis project · Mobile</p>
                    <h3>Cuidado Amigo</h3>
                    <p>
                      A service platform concept helping older adults connect
                      with caregivers and other qualified professionals.
                    </p>
                  </div>
                </article>
                <article className="experience-item">
                  <span className="experience-marker" />
                  <div>
                    <p className="eyebrow">Serpro · 5-day hackathon</p>
                    <h3>Mercado Público</h3>
                    <p>
                      A web application concept for managing public market
                      purchasing, suppliers, products, and procurement processes.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="folio-section projects-section">
          <div className="container">
            <p className="section-index">04 / Projects</p>
            <div className="section-heading-row">
              <h2>A few things I&apos;ve worked on</h2>
              <a className="text-link" href="mailto:gvelosodev@gmail.com">Have a project? <span aria-hidden="true">↗</span></a>
            </div>
            <div className="work-list">
              {projects.map((project, index) => {
                const content = (
                  <article className="work-item">
                    <span className="work-number">0{index + 1}</span>
                    {project.image ? (
                      <img src={project.image} alt="" className="work-image" />
                    ) : (
                      <span className="work-image work-image-text" aria-hidden="true">
                        SB
                      </span>
                    )}
                    <div className="work-copy">
                      <p className="eyebrow">{project.category}</p>
                      <h3>{project.title}</h3>
                      <p className="work-description">{project.description}</p>
                    </div>
                    {project.href && (
                      <span className="work-arrow" aria-hidden="true">↗</span>
                    )}
                  </article>
                );

                return project.href ? (
                  <a
                    className="work-link"
                    href={project.href}
                    key={project.title}
                  >
                    {content}
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="folio-contact">
          <div className="container contact-layout">
            <div>
              <p className="section-index">05 / Contact</p>
              <h2>Let&apos;s make something useful.</h2>
              <p>Open to thoughtful projects, good conversations, and new opportunities.</p>
            </div>
            <a className="button-primary contact-button" href="mailto:gvelosodev@gmail.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>Giovana Veloso</span>
          <span>Brasília, Brazil</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
