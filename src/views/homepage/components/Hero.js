import React from 'react';

function Hero() {
  return (
    <div
      className='Hero d-flex align-items-end justify-content-md-left'
      style={{
        backgroundImage: 'url(../../images/mainBg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div className=' heroContent ml-md-5 mb-5'>
        <h1 className='heroTitle display-1 fw-md-bolder'>
          <span className='vibrant'>My</span>
          Blog
        </h1>
        <p className='heroText lead fw-lighter'>How I got here...</p>
      </div>
    </div>
  );
}

export default Hero;
