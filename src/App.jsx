import React from 'react';
import HeroSection from './components/Herosection';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#5D4037] selection:text-white">
      <HeaderSection/>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <FooterSection />
    </div>
  );
}

export default App;