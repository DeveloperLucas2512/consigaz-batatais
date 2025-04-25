import React from "react";
import "./heroSection.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
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
    </div>
  );
};

export default HeroSection;
