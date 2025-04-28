import React, { useState } from "react";
import "./heroSection.css";
import { FaPhoneAlt, FaWhatsapp, FaChevronDown } from "react-icons/fa"; // 👈 adicionamos o ícone da seta
import botijao from "../../assets/botijao-consigaz-original.png";
import galaoAgua from "../../assets/galao-agua.png";
import imagemLocal from "../../assets/localizacao-deposito.png";

const HeroSection = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const toggleProduto = (produto) => {
    setProdutoSelecionado((prev) => (prev === produto ? null : produto));
  };

  return (
    <main className="main-content">
      <div className="hero-wrapper">
        {/* Seções de fundo e botões de topo */}
        <section className="hero-background"></section>

        {/* Produtos */}
        <section className="container-produtos">
          <div className="title-produtos">
            <h1>Nossos Produtos</h1>
            <p>
              A Consigaz é uma das líderes em distribuição de gás em Batatais.
            </p>
          </div>

          <div className="produtos-grid">
            {/* Produto 1 */}
            <div className="produto-card">
              <div className="produto-info">
                <h2>Gás 13Kg (residencial)</h2>
                <p>
                  O P13 é o formato mais conhecido, aquele que usamos em casa.
                </p>

                <button
                  className="btn comprar"
                  onClick={() => toggleProduto("gas")}
                >
                  Comprar agora <FaChevronDown />
                </button>

                {produtoSelecionado === "gas" && (
                  <div className="opcoes-compra">
                    <a
                      href="https://wa.me/5516991772772?text=Ol%C3%A1,%20gostaria%20de%20comprar%20Gás%2013Kg!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn option-whatsapp"
                    >
                      <FaWhatsapp /> Compre pelo WhatsApp
                    </a>
                    <a href="tel:+551636620519" className="btn option-phone">
                      <FaPhoneAlt /> Compre pelo Telefone
                    </a>
                  </div>
                )}
              </div>
              <img
                src={botijao}
                alt="Botijão de gás Consigaz"
                className="produto-img-gas"
              />
            </div>

            {/* Produto 2 */}
            <div className="produto-card">
              <div className="produto-info">
                <h2>Galão de Água 20L</h2>
                <p>
                  Água potável das marcas Daflora e Minalice direto na sua casa.
                </p>

                <button
                  className="btn comprar"
                  onClick={() => toggleProduto("agua")}
                >
                  Comprar agora <FaChevronDown />
                </button>

                {produtoSelecionado === "agua" && (
                  <div className="opcoes-compra">
                    <a
                      href="https://wa.me/5516991772772?text=Ol%C3%A1,%20gostaria%20de%20comprar%20Gal%C3%A3o%20de%20%C3%81gua%2020L!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn option-whatsapp"
                    >
                      <FaWhatsapp /> Compre pelo WhatsApp
                    </a>
                    <a href="tel:+551636620519" className="btn option-phone">
                      <FaPhoneAlt /> Compre pelo Telefone
                    </a>
                  </div>
                )}
              </div>
              <img
                src={galaoAgua}
                alt="Galão de Água 20L"
                className="produto-img-agua"
              />
            </div>
          </div>

          {/* Botão geral de WhatsApp */}
          <a
            href="https://wa.me/5516991772772"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp fale-conosco"
          >
            <FaWhatsapp /> Fale Conosco
          </a>
        </section>
      </div>
    </main>
  );
};

export default HeroSection;
