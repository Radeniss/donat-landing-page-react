import React from "react";
import { ChevronRight } from "lucide-react";

const HeaderSection = () => {
  return (
   
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
    );
};

export default HeaderSection;