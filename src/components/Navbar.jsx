import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
    >
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Evewash Logo"
          className={`logo-img ${scrolled ? "logo-colored" : "logo-white"}`}
        />
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>✖</span>

        <ul className="navbar-menu">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Beranda</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Tentang Kami</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Layanan</a></li>
          <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
        </ul>
        <a href="#order" className="navbar-btn" onClick={() => setMenuOpen(false)}>
          Pesan Sekarang
        </a>
      </div>
    </nav>
  );
}
