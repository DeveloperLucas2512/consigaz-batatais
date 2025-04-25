import React from "react";
import "./header.css";
import { FaWhatsappSquare, FaPhoneAlt } from "react-icons/fa";

import logo from "../../assets/logo-1.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <img src={logo} alt="Logo Consigaz Batatais" className="logo" />

          <div className="header-right">
            <a
              href="https://wa.me/5516991772772?text=Ol%C3%A1%2C+gostaria+de+fazer+um+pedido+de+g%C3%A1s+%F0%9F%9A%9B"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link whatsapp"
            >
              <FaWhatsappSquare /> Fale pelo WhatsApp
            </a>

            <a href="tel:+551636620519" className="header-link phone">
              <FaPhoneAlt /> Fale conosco
            </a>
          </div>
        </div>
        <hr className="header-line" />
      </header>
    </>
  );
};

export default Header;
