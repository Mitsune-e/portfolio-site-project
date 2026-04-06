import React from 'react';

function MercadoPublicoPage() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-4">Mercado Público</h1>
          <p className="lead text-center mb-5">
            Projeto para o "Hackathon Compras Governamentais" do Serpro, que durou 5 dias.
            Uma aplicação web baseada em React para gestão de mercados públicos governamentais.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h2>Descrição</h2>
          <p>
            Este projeto foi desenvolvido durante o Hackathon Compras Governamentais organizado pelo Serpro.
            Trata-se de uma aplicação web completa para gerenciamento de compras governamentais em mercados públicos,
            utilizando tecnologias modernas como React, TypeScript e SQL Server.
          </p>
          <p>
            O sistema permite a gestão eficiente de fornecedores, produtos e processos de compra,
            facilitando a transparência e eficiência nas aquisições públicas.
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
          <a href="https://github.com/Mitsune-e/mercadopublico" target="_blank" className="btn btn-primary btn-lg">
            <i className="bi bi-github"></i> Ver no GitHub
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Tecnologias Utilizadas</h2>
          <div className="d-flex flex-wrap justify-content-center">
            <span className="badge bg-primary me-2 mb-2">React</span>
            <span className="badge bg-info me-2 mb-2">TypeScript</span>
            <span className="badge bg-success me-2 mb-2">SQL Server</span>
            <span className="badge bg-warning me-2 mb-2">JavaScript</span>
            <span className="badge bg-secondary me-2 mb-2">CSS</span>
            <span className="badge bg-light text-dark me-2 mb-2">HTML</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MercadoPublicoPage;
