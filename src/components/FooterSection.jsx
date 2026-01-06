import React from 'react';
import { Instagram, Twitter, Facebook, Github } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-50 pt-10 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              Setiap kelembutan dibuat dengan penuh kasih sayang dan rasa manis 
              yang menjadikan waktumu menjadi lebih berwarna
            </h2>
            <div className="flex justify-center md:justify-start space-x-6 text-gray-900">
              <a href="#"><Instagram className="hover:text-pink-600 transition" /></a>
              <a href="#"><Twitter className="hover:text-blue-400 transition" /></a>
              <a href="#"><Facebook className="hover:text-blue-600 transition" /></a>
              <a href="#"><Github className="hover:text-gray-600 transition" /></a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/chibi-peace.png" 
              alt="Rafaya Footer" 
              className="w-64 md:w-80 object-contain drop-shadow-xl hover:rotate-6 transition-transform"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm gap-4">
          <div>Ac 2025 Rafaya Brownies</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900">Privacy policy</a>
            <a href="#" className="hover:text-gray-900">Terms of use</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">TikTok</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
