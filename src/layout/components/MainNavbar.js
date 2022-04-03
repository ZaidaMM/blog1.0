import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  NavbarBrand,
  Nav,
  NavbarText,
  Button,
} from 'reactstrap';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState();

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar className='MainNavbar justify-content-between ' expand='md'>
      <NavbarBrand>
        <h1 className='navbar-logo '>
          <a href='/' className='text-white self-align-center'>
            Z<span className='vibrant'>M</span>
          </a>
        </h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='text-white ' />
      <Collapse
        navbar
        isOpen={isOpen}
        className='align-items-center d-flex justify-content-end my-1'
      >
        <Nav navbar className='d-flex align-items-center'>
          <NavItem>
            <NavLink href='/' className='text-white link btn btn-dark'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/' className='text-white link btn btn-dark'>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/' className='text-white link btn btn-dark'>
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/' className='text-white btn btn-dark'>
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MainNavbar;
