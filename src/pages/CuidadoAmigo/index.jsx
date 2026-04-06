import React from 'react';

function CuidadoAmigoPage() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-4">Cuidado Amigo</h1>
          <p className="lead text-center mb-5">
            Projeto de tese que oferece uma plataforma para ajudar idosos a acessarem cuidadores e outros tipos de serviços.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h2>Descrição</h2>
          <p>
            Este é um projeto de tese desenvolvido para criar uma solução que auxilia idosos no acesso a cuidadores e diversos serviços.
            A plataforma visa facilitar a conexão entre pessoas idosas e profissionais qualificados, promovendo independência e bem-estar.
          </p>
          <p>
            O aplicativo permite a busca e contratação de serviços personalizados, com foco na segurança e facilidade de uso para os usuários.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h2>Fotos do Projeto</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="https://via.placeholder.com/400x300?text=Screenshot+1" alt="Screenshot 1" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="https://via.placeholder.com/400x300?text=Screenshot+2" alt="Screenshot 2" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="https://via.placeholder.com/400x300?text=Screenshot+3" alt="Screenshot 3" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12 text-center">
          <a href="https://github.com/Mitsune-e/cuidago-amigo" target="_blank" className="btn btn-primary btn-lg">
            <i className="bi bi-github"></i> Ver no GitHub
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Tecnologias Utilizadas</h2>
          <div className="d-flex flex-wrap justify-content-center">
            <span className="badge bg-primary me-2 mb-2">Dart</span>
            <span className="badge bg-info me-2 mb-2">Firebase</span>
            <span className="badge bg-success me-2 mb-2">Flutter</span>
            <span className="badge bg-warning me-2 mb-2">C++</span>
            <span className="badge bg-secondary me-2 mb-2">CMake</span>
            <span className="badge bg-light text-dark me-2 mb-2">HTML</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuidadoAmigoPage;