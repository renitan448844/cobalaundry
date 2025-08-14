import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../assets/laundry2.jpg'; // Gambar dari folder assets

function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-content">
        <h1>Express Laundry Delivery Service di Solo Baru</h1>
        <p>
          Kami jemput, cuci, dan antar kembali cucian kamu dengan bersih, cepat, 
          dan tanpa ribet. <br /> #LaundryMudahDariRumah
        </p>
        <a href="#order" className="btn-primary">Yuk, Pesan Sekarang!</a>
      </div>
    </section>
  );
}

export default Banner;
