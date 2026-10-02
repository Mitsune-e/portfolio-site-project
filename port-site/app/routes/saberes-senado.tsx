import type { Route } from "./+types/saberes-senado";
import { ProjectDetailLayout } from "../components/project-detail-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Saberes Senado | Giovana Veloso" },
    {
      name: "description",
      content:
        "Ongoing work updating Saberes Senado, the Brazilian Senate's online course platform built with Moodle and PHP.",
    },
  ];
}

export default function SaberesSenado() {
  return (
    <ProjectDetailLayout
      title="Saberes Senado"
      summary="Updating the Brazilian Senate's online course platform, built with Moodle and PHP."
      category="Ongoing work"
      technologies={["Moodle", "PHP"]}
    >
      <section className="py-4">
        <h2>About the project</h2>
        <p>
          Saberes is the Brazilian Senate&apos;s online course platform. I&apos;m
          currently working on updates to the site and its learning experience,
          helping keep the platform useful and accessible for people taking
          courses online.
        </p>
        <p>
          The platform is built with Moodle and PHP, bringing together course
          content, learning tools, and resources from the Senate.
        </p>
      </section>

      <section className="py-4 project-gallery">
        <h2 className="mb-4">Platform</h2>
        <a
          href="https://saberes.senado.leg.br/"
          target="_blank"
          rel="noreferrer"
          className="saberes-preview"
          aria-label="Open Saberes Senado course platform in a new tab"
        >
          <span className="saberes-preview-mark" aria-hidden="true">SB</span>
          <span className="saberes-preview-copy">
            <span className="eyebrow">Senado Federal</span>
            <strong>Saberes</strong>
            <span>Open the online course platform <span aria-hidden="true">↗</span></span>
          </span>
        </a>
      </section>
    </ProjectDetailLayout>
  );
}