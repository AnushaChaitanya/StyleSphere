import React, { useState, useEffect } from 'react';
import './hero.css';
import slide1 from '../Images/kids.png';
import slide2 from '../Images/women.png';

const slides = [
  { image: slide1, caption: 'New Arrivals', sub: 'Explore latest trends' },
  { image: slide2, caption: 'Western Style', sub: 'Shop now' },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-left">
        <img src={slides[index].image} alt="Hero" />
      </div>
      <div className="hero-right">
        <h1>{slides[index].caption}</h1>
        <p>{slides[index].sub}</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;
