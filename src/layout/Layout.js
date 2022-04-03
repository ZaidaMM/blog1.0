import React from 'react';
import MainNavbar from './components/MainNavbar';
import AppRouter from '../router/AppRouter';
import Footer from './components/Footer';

function Layout() {
  return (
    <div>
      <MainNavbar />
      <main className='main'>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
