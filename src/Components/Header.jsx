import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Navbar.Brand >
     <Link to={'/'} className='fs-3' style={{textDecoration: 'none',color:'black'}} >
     <i className="fa-solid fa-cloud-arrow-up fa-beat-fade me-2" style={{color:'black'}}></i>{' '}
     Media Player
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header