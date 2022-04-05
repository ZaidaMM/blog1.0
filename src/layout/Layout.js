import React from 'react';
import MainNavbar from './components/MainNavbar';
import AppRouter from '../router/AppRouter';
import Footer from './components/Footer';
import { Container } from 'reactstrap';

function Layout() {
  return (
    <div>
      <MainNavbar />
      <main className='main'>
        <Container fluid className='p-0'>
          <AppRouter />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
