import React from 'react';

// Import komponen
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

// Import CSS utama
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <Banner />

      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <div className="features-container">
        <FeatureCard
          title="Jadwalkan Pengambilan"
          description="Pilih kapan dan di mana pakaian kamu diambil."
        />
        <FeatureCard
          title="Kualitas Pencucian"
          description="Proses cuci dilakukan dengan cermat untuk menjaga kualitas."
        />
        <FeatureCard
          title="Antar Kembali"
          description="Pakaian akan diantar langsung ke depan pintu rumah kamu."
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
