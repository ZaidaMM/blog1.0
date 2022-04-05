import React from 'react';
import Homepage from '../views/homepage/Homepage';
import BlogPage from '../views/blogpage/BlogPage';
import PageNotFound from '../views/pageNotFound/PageNotFound';
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <div className='AppRouter'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blogPage' element={<BlogPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
