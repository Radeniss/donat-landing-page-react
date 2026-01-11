import React, { useEffect, useRef } from 'react';
import { Instagram, Twitter, Facebook, Github } from 'lucide-react';

const SosmedSection = () => {
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
            { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
     <section ref={sectionRef} className='px-52 reveal-up'>
       <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 pt-40">
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left reveal-item" style={{ '--reveal-delay': '420ms' }}>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                    Setiap kelembutan dibuat dengan penuh kasih sayang dan rasa manis 
                    yang menjadikan waktumu menjadi lebih berwarna
                </h2>
                <div className="flex justify-center md:justify-start space-x-6 text-gray-900">
                    <a href="#" className="sosmed-pop" style={{ '--sosmed-delay': '0ms' }}>
                        <Instagram className="hover:text-pink-600 transition" />
                    </a>
                    <a href="#" className="sosmed-pop" style={{ '--sosmed-delay': '80ms' }}>
                        <Twitter className="hover:text-blue-400 transition" />
                    </a>
                    <a href="#" className="sosmed-pop" style={{ '--sosmed-delay': '160ms' }}>
                        <Facebook className="hover:text-blue-600 transition" />
                    </a>
                    <a href="#" className="sosmed-pop" style={{ '--sosmed-delay': '240ms' }}>
                        <Github className="hover:text-gray-600 transition" />
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end reveal-item" style={{ '--reveal-delay': '560ms' }}>
                    <img 
                    src="/chibi-peace.png" 
                    alt="Rafaya Footer" 
                    className="w-64 md:w-80 object-contain drop-shadow-xl hover:rotate-6 transition-transform sosmed-float"
                    />
            </div>
        </div>
        </section>
    );
};

export default SosmedSection;
