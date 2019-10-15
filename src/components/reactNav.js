import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

const ReactNav = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Today's NASA APOD: Astronomy Photo of the Day</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Photo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Description</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://api.nasa.gov/#apod" target ="_blank">NASA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/adamwinzdesign/nasa-photo-of-the-day" target ="_blank">GitHub</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default ReactNav;