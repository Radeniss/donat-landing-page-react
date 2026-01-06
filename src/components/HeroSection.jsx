import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Herosection = () => {
  return (
    <div className="bg-gray-50 pb-10">
      <nav className="sticky top-0 z-50 bg-gray-50/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wide text-gray-900">
            RAFAYA
            </div>
            
            <div className="hidden md:flex space-x-10 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-gray-900 transition">Company</a>
            <a href="#" className="hover:text-gray-900 transition">Support</a>
            <a href="#" className="hover:text-gray-900 transition">Resources</a>
            </div>

            <a href="#" className="hidden md:flex items-center text-sm font-semibold text-gray-900 hover:opacity-70 transition">
            Download for Free <ChevronRight size={16} className="ml-1" />
            </a>
            </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-8 md:mt-16">
        
        <div className="md:w-1/2 space-y-6 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-gray-900">RAFAYA</span>
            <span className="block text-[#5D4037]">BROWNISE</span>
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
            Awali hari mu dengan yang manis-manis seperti aku yang manis ini xixi :)
          </p>

          <div className="pt-4 flex justify-center md:justify-start">
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-20 md:mt-0 relative flex justify-center items-center h-[500px]">
          <img 
                src="/brownie-bg-1.png" 
                alt="Brownie Layer 1" 
                className="absolute w-40 md:w-56 -top-10 -right-5 md:right-[420px] z-0 rotate-[-15deg] opacity-90 drop-shadow-lg"
            />
            <img 
                src="/brownie-bg-2.png" 
                alt="Brownie Layer 1" 
                className="absolute w-40 md:w-56 -bottom-[100px] -right-5 md:right-10 z-0 rotate-[10deg] opacity-90 drop-shadow-lg"
            />

            <img 
                src="/iphone-frame.png" 
                alt="Handphone Layer 2" 
                className="absolute w-56 md:w-[500px] z-10 drop-shadow-2xl"
            />

            <img 
                src="/chibi-hero.png" 
                alt="Chibi Layer 3" 
                className="absolute w-64 md:w-[300px] z-20 bottom-[29px] right-0 md:left-[115px] transform hover:scale-110  hover:-translate-y-5 hover:-translate-x-2 transition-transform duration-300"
            />
        </div>
      </main>
    </div>
  );
};

export default Herosection;
