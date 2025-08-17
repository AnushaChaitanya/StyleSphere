import React from 'react';
import './CategorySection.css';

const categories = [
  // Row 1
  {
    image: require('../Images/ethnic.jpg'),
    title: 'Ethnic Wear',
    offer: '50–80% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/casual.jpeg'),
    title: 'Casual Wear',
    offer: '40–80% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/mensactivewear.jpg'),
    title: "Men's Activewear",
    offer: '30–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/womenactivewear.jpg'),
    title: "Women's Activewear",
    offer: '30–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/western.jpg'),
    title: 'Western Wear',
    offer: '40–80% OFF',
    button: 'Shop Now',
  },
  // Row 2
  {
    image: require('../Images/bag.jpeg'),
    title: 'Bags',
    offer: '30–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/formal.jpeg'),
    title: 'Formal Wear',
    offer: '30–50% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/footwear.jpeg'),
    title: 'Footwear',
    offer: '40–70% OFF',
    button: 'Shop Now',
  },
  {
    image: require('../Images/accessories.jpeg'),
    title: 'Accessories',
    offer: '20–60% OFF',
    button: 'Shop Now',
  },
{
    image: require('../Images/kidswear.jpeg'),
    title: 'Kids Wear',
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
