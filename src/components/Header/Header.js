import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import './style.css';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md" className="Nav-bar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="logo d-inline-block align-top"
            />
            {' '}
            Space Traverlers Hub
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#fff' : '#545e6f', background: isActive ? '#00d7c6' : '#f0f0f0' })} to="/">Rockets</NavLink>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#fff' : '#545e6f', background: isActive ? '#00d7c6' : '#f0f0f0' })} to="/missions">Missions</NavLink>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#fff' : '#545e6f', background: isActive ? '#00d7c6' : '#f0f0f0' })} to="/myprofile">My Profile</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
