import React from 'react';
import bg from '../assets/laundry2.jpg';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Express Laundry Delivery Service di Solo Baru</h1>
          <p>Kami jemput, cuci, dan antar kembali cucian kamu dengan bersih, cepat, dan tanpa ribet.</p>
          <button>Yuk, Pesan Sekarang!</button>
        </div>
      </div>

    </section>
  );
}
