import type { Route } from "./+types/cuidado-amigo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cuidado Amigo | Giovana Veloso" },
    {
      name: "description",
      content: "A platform helping older adults access care and other services.",
    },
  ];
}

export default function CuidadoAmigo() {
  return (
    <main className="container py-5 project-detail">
      <p>
        <a href="/#projects" className="btn btn-outline-secondary">
          &larr; Back to portfolio
        </a>
      </p>
      <header className="text-center py-4">
        <h1 className="display-4 mb-4">Cuidado Amigo</h1>
        <p className="lead mb-0">
          Projeto de tese que oferece uma plataforma para ajudar idosos a
          acessarem cuidadores e outros tipos de serviços.
        </p>
      </header>

      <section className="py-4">
        <h2>Descrição</h2>
        <p>
          Este é um projeto de tese desenvolvido para criar uma solução que
          auxilia idosos no acesso a cuidadores e diversos serviços. A plataforma
          visa facilitar a conexão entre pessoas idosas e profissionais
          qualificados, promovendo independência e bem-estar.
        </p>
        <p>
          O aplicativo permite a busca e contratação de serviços personalizados,
          com foco na segurança e facilidade de uso para os usuários.
        </p>
      </section>

      <section className="py-4 project-gallery">
        <h2 className="mb-4">Imagem do Projeto</h2>
        <img
          src="/images/logo_CA.png"
          alt="Cuidado Amigo logo"
          className="img-fluid"
        />
      </section>

      <p className="text-center py-4">
        <a
          href="https://github.com/Mitsune-e/cuidago-amigo"
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
          {["Dart", "Firebase", "Flutter", "C++", "CMake", "HTML"].map(
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