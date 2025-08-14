import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">Evewash</div>
        <ul className="nav-links">
          <li>Beranda</li>
          <li>Tentang Kami</li>
          <li>Layanan</li>
          <li>Blog</li>
        </ul>
        <button className="pesan-btn">Pesan Sekarang</button>
      </div>
    </nav>
  );
}
