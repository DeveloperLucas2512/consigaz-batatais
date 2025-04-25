import React from "react";
import "./heroSection.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import botijao from "../../assets/botijao-consigaz-original.png";
import galaoAgua from "../../assets/galao-agua.png";
import imagemLocal from "../../assets/vista-localizacao.png";
import imagemVideo from "../../assets/image-instalacao-gas.png";
import {
  FaMobileAlt,
  FaThumbsUp,
  FaRocket,
  FaCheckSquare,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="main-content">
      <div className="hero-wrapper">
        <section className="hero-background"></section>

        <div className="hero-buttons-wrapper">
          <button className="btn phone">
            <FaPhoneAlt /> Compre agora pelo telefone
          </button>
          <button className="btn whatsapp">
            <FaWhatsapp /> Compre pelo WhatsApp
          </button>
        </div>

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

        {/* conteiner rota */}
        <section className="container-localizacao">
          <div className="bloco-localizacao-e-video">
            <div className="bloco-localizacao">
              <h2 className="title-localizacao">Onde estamos?</h2>
              <div className="imagem-com-botao">
                <img
                  src={imagemLocal}
                  alt="Depósito Consigaz Batatais"
                  className="imagem-local"
                />
                <a
                  href="https://www.google.com/maps/dir//Av.+Jos%C3%A9+Basilio+Zanetti,+310+-+Jardim+canad%C3%A1,+Batatais+-+SP,+14302-548/@-20.8712214,-47.5812346,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rota-sobre-imagem"
                >
                  📍 Ver rota no Google Maps
                </a>
              </div>
            </div>

            <div className="bloco-video">
              <h2 className="title-video">Você Sabia?</h2>
              <div className="imagem-com-botao">
                <img
                  src={imagemVideo}
                  alt="Como instalar o botijão de gás"
                  className="imagem-video"
                />
                <a
                  href="https://www.youtube.com/watch?v=z-zuqzzRrQo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-video-sobre-imagem"
                >
                  ▶ Assistir: Como instalar corretamente o botijão de gás em
                  casa
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
