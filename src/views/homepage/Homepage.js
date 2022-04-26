import React from 'react';
import Hero from './components/Hero';
import BlogList from './components/BlogList';

function Homepage() {
  return (
    <div className='Homepage'>
      <Hero />
      <BlogList />
    </div>
  );
}

export default Homepage;
