import React, { useState } from "react";
import "./heroSection.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaChevronDown,
  FaMobileAlt,
  FaThumbsUp,
  FaRocket,
  FaCheckSquare,
} from "react-icons/fa"; // 👈 Agora importando todos os ícones necessários!

import botijao from "../../assets/botijao-consigaz-original.png";
import galaoAgua from "../../assets/galao-agua.png";
import imagemLocal from "../../assets/deposito-consigaz.png";
import cilindroP20 from "../../assets/cilindroP20.png";
import cilindroP45 from "../../assets/cilindroP45.png";

const HeroSection = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const toggleProduto = (produto) => {
    setProdutoSelecionado((prev) => (prev === produto ? null : produto));
  };

  return (
    <main className="main-content">
      <div className="hero-wrapper">
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
                      href="https://wa.me/5516991772772?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"
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
                      href="https://wa.me/5516991772772?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"
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

          <div className="produtos-grid">
            {/* Produto 1 */}
            <div className="produto-card">
              <div className="produto-info">
                <h2>Cilindro P20</h2>
                <p>
                  O cilindro de 20 quilos é utilizado em empilhadeiras com motor
                  à combustão ciclo Otto ou quatro tempos, única aplicação do
                  gás GLP como combustível para veículos automotores autorizada
                  pela ANP. Nas empilhadeiras, o gás GLP é conduzido na fase
                  líquida até o motor, onde é pulverizado e misturado ao ar para
                  explosão na câmara de combustão. Por conta disso, o cilindro é
                  instalado e utilizado na posição horizontal.
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
                      href="https://wa.me/5516991772772?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"
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
                src={cilindroP20}
                alt="Cilindro P20"
                className="produto-img-gas"
              />
            </div>

            {/* Produto 2 */}
            <div className="produto-card">
              <div className="produto-info">
                <h2>Cilindro P45</h2>
                <p>
                  O cilindro de 45 quilos é a opção ideal para residências que,
                  além da preparação de alimentos, utilizam o gás GLP para
                  aquecimento de água. Também é utilizado em bares,
                  restaurantes, lavanderias, hospitais, farmácias, pequenos
                  comércios e indústrias, em uma grande variedade de aplicações,
                  como aquecimento de fornos, secadoras e lavadoras de roupas,
                  estufas, corte de chapas metálicas, esterilização de objetos,
                  cocção dos alimentos e muito mais. A instalação é realizada em
                  locais pré-determinados pelo consumidor as centrais de
                  abastecimento que devem seguir normas e orientações técnicas
                  legais.
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
                      href="https://wa.me/5516991772772?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"
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
                src={cilindroP45}
                alt="Cilindro P45"
                className="produto-img-agua"
              />
            </div>
          </div>

          {/* Botão geral de WhatsApp */}
          <a
            href="https://wa.me/5516991772772?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp fale-conosco"
          >
            <FaWhatsapp /> Fale Conosco
          </a>
        </section>

        {/* Bloco de informações */}
        <div className="container-information">
          <div className="info-item">
            <FaMobileAlt className="info-icon" />
            <h3>Peça Online</h3>
            <p>Tenha um atendimento rápido e seguro pelo WhatsApp!</p>
          </div>
          <div className="info-item">
            <FaThumbsUp className="info-icon" />
            <h3>Atendimento</h3>
            <p>Prezamos a excelência em nosso atendimento.</p>
          </div>
          <div className="info-item">
            <FaRocket className="info-icon" />
            <h3>Entrega Rápida</h3>
            <p>Com a Consigaz chegará até você bem rapidinho.</p>
          </div>
          <div className="info-item">
            <FaCheckSquare className="info-icon" />
            <h3>Distribuidor Autorizado</h3>
            <p>O gás mais seguro e confiável está aqui.</p>
          </div>
        </div>

        <section className="container-localizacao">
          <div className="bloco-localizacao-e-video">
            <div className="bloco-localizacao">
              <h2 className="title-localizacao">Onde estamos?</h2>

              <div className="imagem-com-botao">
                <a
                  href="https://www.google.com/maps/dir//Av.+Jos%C3%A9+Basilio+Zanetti,+310+-+Jardim+Canad%C3%A1,+Batatais+-+SP/@-20.8712214,-47.5812346,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="imagem-com-botao"
                >
                  <img
                    src={imagemLocal}
                    alt="Depósito Consigaz Batatais"
                    className="imagem-local"
                  />
                  <div className="btn-rota-sobre-imagem">
                    📍 Ver rota no Google Maps
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HeroSection;
