import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import './CategorySection'; // ❌ This line is NOT correct!
import './home.css'; // ✅ This is fine
import CategorySection from './CategorySection';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection/>
        <footer style={{
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px'
      }}>
        &copy; 2025 StyleSphere. All rights reserved.
      </footer> 
    </>
  );
}

export default Home;
