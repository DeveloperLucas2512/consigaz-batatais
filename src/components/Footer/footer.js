import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <h3>Nos acompanhe:</h3>
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
                  color: "#25D366", // WhatsApp verde oficial
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
                  color: "#1877F2", // Facebook azul oficial
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
                  color: "#C13584", // Instagram rosa principal
                }}
              />
            </a>
          </div>
        </div>

        <div className="footer-hours">
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>Segunda-feira: 08:00 às 20:30</li>
            <li>Terça-feira: 08:00 às 20:30</li>
            <li>Quarta-feira: 08:00 às 20:30</li>
            <li>Quinta-feira: 08:00 às 20:30</li>
            <li>Sexta-feira: 08:00 às 20:30</li>
            <li>Sábado: 08:00 às 20:30</li>
            <li>Domingo: 08:00 às 12:30</li>
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
              style={{ marginRight: "2px", fontSize: "25px", color: "#25D366" }}
            />
            Desenvolvido por: <strong>LD WebSites</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
