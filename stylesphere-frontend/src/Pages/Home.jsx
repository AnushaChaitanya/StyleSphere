import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import './home.css'; // Optional: if you want page-level styling

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default Home;
