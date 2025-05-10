'use client';

import React, { useEffect, useState } from 'react';

const images = [
  '/images/image1.webp',
  '/images/image2.webp',
  '/images/image3.jpeg',
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slideshow-${i}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-rose-900/40 backdrop-brightness-75" />

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">💌 Timelove</h1>
        <p className="max-w-xl text-xl mb-6 drop-shadow-sm">
          Send your heart across time — surprise your beloved when it matters most.
        </p>
        <a
          href="#packages"
          className="bg-white text-rose-700 px-6 py-3 rounded-lg hover:bg-rose-100 font-medium transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
