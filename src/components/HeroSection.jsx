import React, { useState, useEffect } from 'react';
import bg1 from '../assets/bg2.jpg';
import bg2 from '../assets/bg3.png';
import bg3 from '../assets/bg4.webp';
import bg4 from '../assets/laundry2.jpg';
import '../styles/HeroSection.css';

export default function HeroSection() {
  const images = [bg1, bg2, bg3, bg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // ganti gambar tiap 4 detik
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Express Laundry Delivery Service di Solo Baru</h1>
          <p>
            Kami jemput, cuci, dan antar kembali cucian kamu dengan bersih, cepat, 
            dan tanpa ribet.
          </p>
          <a href="#order" className="hero-btn">Yuk, Pesan Sekarang!</a>
        </div>
      </div>
    </section>
  );
}
