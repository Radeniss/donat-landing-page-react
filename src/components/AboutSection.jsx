import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <img 
              src="/chibi-chef.png" 
              alt="Rafaya Chef" 
              className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="w-full md:w-7/12 space-y-8 text-center md:text-left">
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
              Jangan lupa istirahat ya, kamu sudah bekerja keras hari ini.{' '}
              <span className="italic font-bold text-[#5D4037]">
                You deserve a sweet treat!
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Seperti brownies yang butuh waktu untuk matang sempurna, kamu juga sedang berproses menuju hal indah.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
