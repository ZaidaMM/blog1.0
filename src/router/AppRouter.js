import React from 'react';
import Homepage from '../views/homepage/Homepage';
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <div className='AppRouter'>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
