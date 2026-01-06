import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-50 pt-5 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

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
