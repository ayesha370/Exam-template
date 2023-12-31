import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand className='fw-bold fs-5' as={Link} to='/'>
          Website
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto me-4'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/services'>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
