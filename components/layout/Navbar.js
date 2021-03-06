import {Navbar, Nav, Container} from 'react-bootstrap';
import classes from './main-header.module.css'


function NavBar() {
    return (
      <Navbar fixed='top' bg="light" variant="light" expand="lg">
        <Container >
          <Navbar.Brand href='/'>WeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="float-right">
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/product'>Product</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;