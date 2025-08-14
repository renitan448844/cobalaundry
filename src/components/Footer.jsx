import React from "react";
import { Mail, Bot, MapPin, Clock } from "lucide-react";
import logoEvewash from "../assets/logo.webp";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Logo dan headline */}
        <div className="footer-col">
          <img src={logoEvewash} alt="Evewash Logo" className="footer-logo" />
          <p className="footer-tagline">
            Laundry Delivery Service di Solo Baru
          </p>
        </div>

        {/* Kontak */}
        <div className="footer-col">
          <h4>Kontak</h4>
          <p>
            <Mail size={18} /> evewashsolo@gmail.com
          </p>
          <p>
            <Bot size={18} /> Chatbot Evewash
          </p>
          <p className="address">
            <MapPin size={18} /> Jl. Pesanggrahan No.39F, Langenharjo, Solo Baru,
            Jawa Tengah. 57552 (Ruko abu-abu sebelah Alfamart)
          </p>
        </div>

        {/* Jam Buka */}
        <div className="footer-col">
          <h4>Jam Buka</h4>
          <p>
            <Clock size={18} /> Senin – Sabtu
          </p>
          <p>Pukul 07:00 WIB – 19:00 WIB</p>
        </div>
      </div>

      {/* Tautan kebijakan */}
      <div className="footer-links">
        <a href="#syarat">Syarat dan Ketentuan</a>
        <span className="divider">|</span>
        <a href="#privasi">Privasi</a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">© 2025 Evewash Clone. All rights reserved.</p>
    </footer>
  );
}
