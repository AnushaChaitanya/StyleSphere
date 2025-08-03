import React from 'react';
import './CategorySection.css';

const categories = [
  // Row 1
  {
    image: require('../Images/ethnic.png'),
    title: 'Ethnic Wear',
    offer: '50–80% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/casual.png'),
    title: 'Casual Wear',
    offer: '40–80% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/mens_active.png'),
    title: "Men's Activewear",
    offer: '30–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/womens_active.png'),
    title: "Women's Activewear",
    offer: '30–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/western.png'),
    title: 'Western Wear',
    offer: '40–80% OFF',
    button: 'Shop Now',
  },
  // Row 2
  {
    image: require('../Images/sportswear.png'),
    title: 'Sportswear',
    offer: '30–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/formal.png'),
    title: 'Formal Wear',
    offer: '30–50% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/footwear.png'),
    title: 'Footwear',
    offer: '40–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/accessories.png'),
    title: 'Accessories',
    offer: '20–60% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/bags.png'),
    title: 'Bags & Purses',
    offer: '30–50% OFF',
    button: 'Shop Now',
  },
];

function CategorySection() {
  return (
    <section className="category-section">
      <h2 className="category-title">SHOP BY CATEGORY</h2>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div className="category-card" key={idx}>
            <img src={cat.image} alt={cat.title} />
            <h3>{cat.title}</h3>
            <p>{cat.offer}</p>
            <button>{cat.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
