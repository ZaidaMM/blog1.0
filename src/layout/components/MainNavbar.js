import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  NavbarBrand,
  Nav,
} from 'reactstrap';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className='MainNavbar  ' expand='md'>
      <NavbarBrand>
        <h1 className='navbar-logo '>
          <a href='/' className='text-white  align-items-center'>
            Z<span className='vibrant'>M</span>
          </a>
        </h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className='navbar-toggler' />
      <Collapse navbar isOpen={isOpen} className='justify-content-end my-1'>
        <Nav navbar className='  d-flex  '>
          <NavItem>
            <NavLink href='/' target='_blank' className='link btn btn-dark'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://www.zaidamontano.tech/#about-section'
              className='link btn btn-dark'
              target='_blank'
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://www.zaidamontano.tech/'
              className='link btn btn-dark'
            >
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/' className=' link btn btn-dark'>
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/' className=' link btn btn-dark'>
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MainNavbar;
