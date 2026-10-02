import type { Route } from "./+types/mercado-publico";
import { ProjectDetailLayout } from "../components/project-detail-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mercado Público | Giovana Veloso" },
    {
      name: "description",
      content: "A public market management application built for a Serpro hackathon.",
    },
  ];
}

export default function MercadoPublico() {
  return (
    <ProjectDetailLayout
      title="Mercado Público"
      summary={'Projeto para o "Hackathon Compras Governamentais" do Serpro, que durou 5 dias. Uma aplicação web baseada em React para gestão de mercados públicos governamentais.'}
      technologies={[
        "React",
        "TypeScript",
        "SQL Server",
        "JavaScript",
        "CSS",
        "HTML",
      ]}
      technologyHeading="Tecnologias Utilizadas"
    >
      <section className="py-4">
        <h2>Descrição</h2>
        <p>
          Este projeto foi desenvolvido durante o Hackathon Compras
          Governamentais organizado pelo Serpro. Trata-se de uma aplicação web
          completa para gerenciamento de compras governamentais em mercados
          públicos, utilizando tecnologias modernas como React, TypeScript e SQL
          Server.
        </p>
        <p>
          O sistema permite a gestão eficiente de fornecedores, produtos e
          processos de compra, facilitando a transparência e eficiência nas
          aquisições públicas.
        </p>
      </section>

      <section className="py-4 project-gallery">
        <h2 className="mb-4">Imagem do Projeto</h2>
        <img
          src="/images/logo_mp.png"
          alt="Mercado Público logo"
          className="img-fluid"
        />
      </section>

      <p className="text-center py-4">
        <a
          href="https://github.com/Mitsune-e/mercadopublico"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-lg"
        >
          Ver no GitHub
        </a>
      </p>

    </ProjectDetailLayout>
  );
}