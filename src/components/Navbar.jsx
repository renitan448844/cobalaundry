import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Evewash Logo"
          className={`logo-img ${scrolled ? "logo-colored" : "logo-white"}`}
        />
      </div>

      <div className="navbar-right">
        <ul className="navbar-menu">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang Kami</a></li>
          <li><a href="#services">Layanan</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <a href="#order" className="navbar-btn">Pesan Sekarang</a>
      </div>
    </nav>
  );
}
