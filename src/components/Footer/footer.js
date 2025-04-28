import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import "./footer.css";
import informacaoImage from "../../assets/image-information.jpeg"; // Importa a imagem

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quem Somos */}
        <div className="footer-about">
          <h3>Quem Somos</h3>
          <h4 className="footer-subtitle">REVENDA AUTORIZADA CONSIGAZ</h4>
          <p className="footer-description">
            O CNPJ da empresa DANILO ARANTES COMERCIO DE GAS LTDA - ME (CONSIGAZ
            CANADA - BATATAIS) é 54.426.828/0001-35. Com sede em BATATAIS, SP,
            possui 3 anos, 1 mês e 5 dias e foi fundada em 21/03/2022.
          </p>
        </div>

        {/* Horário de funcionamento */}
        <div className="footer-hours">
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>
              Segunda-feira: <span>08:00 às 21:00</span>
            </li>
            <li>
              Terça-feira: <span>08:00 às 21:00</span>
            </li>
            <li>
              Quarta-feira: <span>08:00 às 21:00</span>
            </li>
            <li>
              Quinta-feira: <span>08:00 às 21:00</span>
            </li>
            <li>
              Sexta-feira: <span>08:00 às 21:00</span>
            </li>
            <li>
              Sábado: <span>08:00 às 20:00</span>
            </li>
            <li>
              Domingo: <span>08:00 às 20:00</span>
            </li>
          </ul>
        </div>

        {/* Imagem de Informação */}
        <div className="footer-info-image">
          <img src={informacaoImage} alt="Informações sobre Consigaz" />
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="content-social">
        <div className="footer-social">
          <h3>Fale Conosco:</h3>
          <div className="social-icons">
            <a
              href="https://wa.me/5516991772772"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ fontSize: "35px", color: "#25D366" }} />
            </a>
            <a
              href="https://www.facebook.com/share/1RNMPNQqtm/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF style={{ fontSize: "35px", color: "#1877F2" }} />
            </a>
            <a
              href="https://www.instagram.com/batataisconsigaz?igsh=MWllb21neWVxY2M5Yw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ fontSize: "35px", color: "#C13584" }} />
            </a>
            <a href="tel:+551636620519" className="header-link phone">
              <FaPhone style={{ fontSize: "35px", color: "#000" }} />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé Final */}
      <div className="footer-bottom">
        <p className="footer-copy">
          <strong>
            © 2025 Consigaz Batatais - Todos os direitos reservados.
          </strong>
        </p>
        <div className="footer-dev">
          <a
            href="https://wa.me/5516993102055?text=Ol%C3%A1%20seja%20bem-vindo%20a%20WebSites,%20Usando%20a%20Tecnologia%20a%20seu%20favor!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o,%20hor%C3%A1rio%20dispon%C3%ADvel?"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev-link"
          >
            <FaWhatsapp style={{ fontSize: "22px", color: "#25D366" }} />
            Desenvolvido por: <strong>LD WebSites</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
