import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

const navBar = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container style={navBar}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            Space Traverlers Hub
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navLink" to="/">Rockets</Link>
            <Link className="navLink" to="/missions">Missions</Link>
            <Link className="navLink" to="/myprofile">My Profile</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
