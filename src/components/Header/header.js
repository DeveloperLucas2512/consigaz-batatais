import React from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo-1.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <img src={logo} alt="Logo Consigaz Batatais" className="logo" />

          <div className="header-right">
            <span>FALE PELO WHATSAPP</span>
            <span>0800 0100 041</span>
            <FaSearch className="search-icon" />
          </div>
        </div>
        <hr className="header-line" />
      </header>
    </>
  );
};

export default Header;
