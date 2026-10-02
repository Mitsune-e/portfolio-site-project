import type { ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

type ProjectDetailLayoutProps = {
  title: string;
  summary: string;
  technologies: string[];
  category?: string;
  technologyHeading?: string;
  children: ReactNode;
};

export function ProjectDetailLayout({
  title,
  summary,
  technologies,
  category,
  technologyHeading = "Technologies",
  children,
}: ProjectDetailLayoutProps) {
  return (
    <main className="container py-5 project-detail">
      <div className="project-detail-toolbar">
        <a href="/#projects" className="btn btn-outline-secondary">
          &larr; Back to portfolio
        </a>
        <ThemeToggle />
      </div>

      <header className="text-center py-4">
        {category && (
          <span className="badge text-bg-primary mb-3">{category}</span>
        )}
        <h1 className="display-4 mb-4">{title}</h1>
        <p className="lead mb-0">{summary}</p>
      </header>

      {children}

      <section className="py-4">
        <h2 className="mb-4">{technologyHeading}</h2>
        <ul className="technology-list list-unstyled d-flex flex-wrap gap-2 p-0">
          {technologies.map((technology) => (
            <li className="badge text-bg-primary" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}