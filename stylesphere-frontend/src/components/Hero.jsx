import React, { useState, useEffect } from 'react';
import './hero.css';

// ✅ Import your slide images
import slide1 from '../Images/women.png';
import slide2 from '../Images/mennn.png';
import slide3 from '../Images/kids.png';
import slide4 from '../Images/bag.png';

// ✅ Slides array with image, caption, subtitle, and CTA button text
const slides = [
   {
    image: slide1,
    caption: 'Women’s Collection',
    sub: 'Fresh Outfits for Every Mood & Moment',
    button: 'Shop Women'
  },
  {
    image: slide2,
    caption: 'Men’s Collection',
    sub: 'Classic & Modern Looks for Him',
    button: 'Shop Men'
  },
  {
    image: slide3,
    caption: 'Kids Fashion',
    sub: 'Adorable Styles for Little Trendsetters',
    button: 'Shop Kids'
  },
  {
    image: slide4,
    caption: 'Accessorize Your Look',
    sub: 'Statement Pieces to Elevate Any Outfit',
    button: 'Shop Accessories'
  }
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.caption}
            className={`hero-slide ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="hero-right">
        <h1 className="hero-text">{slides[index].caption}</h1>
        <p className="hero-text">{slides[index].sub}</p>
        <button className="hero-button">{slides[index].button}</button>
      </div>
    </section>
  );
}

export default Hero;
