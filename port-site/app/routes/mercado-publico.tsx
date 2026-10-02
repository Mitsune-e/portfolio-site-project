import type { Route } from "./+types/mercado-publico";

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
    <main className="container py-5 project-detail">
      <p>
        <a href="/#projects" className="btn btn-outline-secondary">
          &larr; Back to portfolio
        </a>
      </p>
      <header className="text-center py-4">
        <h1 className="display-4 mb-4">Mercado Público</h1>
        <p className="lead mb-0">
          Projeto para o &quot;Hackathon Compras Governamentais&quot; do Serpro,
          que durou 5 dias. Uma aplicação web baseada em React para gestão de
          mercados públicos governamentais.
        </p>
      </header>

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

      <section className="py-4">
        <h2 className="mb-4">Tecnologias Utilizadas</h2>
        <div className="d-flex flex-wrap gap-2">
          {["React", "TypeScript", "SQL Server", "JavaScript", "CSS", "HTML"].map(
            (technology) => (
              <span className="badge text-bg-primary" key={technology}>
                {technology}
              </span>
            ),
          )}
        </div>
      </section>
    </main>
  );
}