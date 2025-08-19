import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

import './styles/App.css';
import './styles/Navbar.css';
import './styles/HeroSection.css';
import './styles/Services.css';
import './styles/Footer.css';
import './styles/Chatbot.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <Services />
      </main>
      <Footer />

      <Chatbot />
    </div>
  );
}
