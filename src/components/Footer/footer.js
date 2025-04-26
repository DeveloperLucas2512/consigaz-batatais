import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <h3>Fale Conosco:</h3> {/* Título mais amigável */}
          <div className="social-icons">
            <a
              href="https://wa.me/seunumero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                style={{
                  marginRight: "2px",
                  fontSize: "35px",
                  color: "#25D366", // Verde WhatsApp
                }}
              />
            </a>
            <a
              href="https://facebook.com/seupagina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                style={{
                  marginRight: "2px",
                  fontSize: "35px",
                  color: "#1877F2", // Azul Facebook
                }}
              />
            </a>
            <a
              href="https://instagram.com/seuinstagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                style={{
                  marginRight: "2px",
                  fontSize: "35px",
                  color: "#C13584", // Rosa Instagram
                }}
              />
            </a>
            <a
              href="tel:+551636620519" // Agora o telefone é direto aqui
              className="header-link phone"
            >
              <FaPhone
                style={{
                  marginRight: "2px",
                  fontSize: "35px",
                  color: "#000", // Preto telefone
                }}
              />
            </a>
          </div>
        </div>

        <div className="footer-hours">
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>
              Segunda-feira: <span>08:00 às 20:30</span>
            </li>
            <li>
              Terça-feira: <span>08:00 às 20:30</span>
            </li>
            <li>
              Quarta-feira: <span>08:00 às 20:30</span>
            </li>
            <li>
              Quinta-feira: <span>08:00 às 20:30</span>
            </li>
            <li>
              Sexta-feira: <span>08:00 às 20:30</span>
            </li>
            <li>
              Sábado: <span>08:00 às 20:30</span>
            </li>
            <li>
              Domingo: <span>08:00 às 12:30</span>
            </li>
          </ul>
        </div>
      </div>

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
            <FaWhatsapp
              style={{ marginRight: "8px", fontSize: "22px", color: "#25D366" }}
            />
            Desenvolvido por: <strong>LD WebSites</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
