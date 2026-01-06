import React, { useEffect, useRef } from 'react';

const products = [
  { id: 1, price: '25k', img: '/brownie-1.png' },
  { id: 2, price: '20k', img: '/brownie-2.png' },
  { id: 3, price: '15k', img: '/brownie-3.png' },
  { id: 4, price: '30k', img: '/brownie-4.png' },
];

const ProductSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-10 px-6 reveal-up">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16 space-y-1 reveal-item" style={{ '--reveal-delay': '0ms' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Ada banyak pilihan
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-bold">
            Untuk temani harimu :)
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 reveal-item" style={{ '--reveal-delay': '140ms' }}>
          {products.map((item) => (
            <div key={item.id} className="relative group flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 transform group-hover:scale-110 bg-gray-200">
                <img src={item.img} alt="Brownie" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-2 -right-1 md:right-4 bg-yellow-400 text-gray-900 font-black text-sm px-3 py-2 rounded-full shadow-md border-2 border-white transform rotate-12 z-10">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 reveal-item" style={{ '--reveal-delay': '280ms' }}>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-800 font-semibold leading-loose">
              Rasa coklat yang manis dan tekstur yang lembut, sangat cocok untuk kamu yang sedang 
              bersantai maupun bersantai dengan teman favoritmu
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/chibi-jump.png" 
              alt="Rafaya Jumping" 
              className="w-64 md:w-80 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
