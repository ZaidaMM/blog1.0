import React, { useState } from 'react';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
// import { articles } from '../../shared/articles';

function Homepage() {
  return (
    <div className='Homepage'>
      <Hero />
      <BlogList />
    </div>
  );
}

export default Homepage;
