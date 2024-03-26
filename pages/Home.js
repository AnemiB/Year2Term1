import React from 'react';
import Features from '../components/Features';
import HeaderImage from '../components/Header'; // Import the header image component

function Home() {
  return (
    <div className='page' style={{ backgroundColor: '#192536', color: 'white' }}>
      <HeaderImage /> {/* Include the header image component */}
      <Features />
    </div>
  );
}

export default Home;
