import React from "react";
import "./heroSection.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-background">
      <div className="hero-content">
        <div className="hero-buttons">
          <button className="btn phone">
            <FaPhoneAlt /> Compre agora pelo telefone
          </button>
          <button className="btn whatsapp">
            <FaWhatsapp /> Compre pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
