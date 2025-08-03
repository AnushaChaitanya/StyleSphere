import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import './CategorySection.jsx'; // ❌ This line is NOT correct!
import './home.css'; // ✅ This is fine

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default Home;
