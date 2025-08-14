import React from 'react';

const items = [
  { icon: '📅', title: 'Jadwalkan Pengambilan', desc: 'Pilih hari dan lokasi cucian diambil.' },
  { icon: '🫧', title: 'Kualitas Pencucian', desc: 'Proses higienis dan terpercaya.' },
  { icon: '🚚', title: 'Antar Kembali', desc: 'Disampaikan ke depan pintu kamu.' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Layanan Kami</h2>
      <div className="services-grid">
        {items.map((it, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{it.icon}</div>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
