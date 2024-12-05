import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'
import './styles.css';
import { Navbar, Button, Container, Col } from 'react-bootstrap';

function App() {
  return (
    <header>
      <h1>SWAPI</h1>
      <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <div>
        <Navbar.Brand className='navbar-brand-1' href="#home">https://swapi.dev/api/</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand className='navbar-brand-2' href="#home">people/1/</Navbar.Brand>
        </div>
        <Col xs="auto">
            <Button type="submit" variant="outline-secondary">Get info</Button>
          </Col>
      </Container>
    </Navbar>
    </header>
  );
}

export default App;
