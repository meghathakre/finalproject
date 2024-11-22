import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const TopMenu=()=>{
    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Beautify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="men">offer</Nav.Link>
            <Nav.Link as={Link} to="women">New</Nav.Link>
            <Nav.Link as={Link} to="kids">Trend</Nav.Link>
            <Nav.Link as={Link} to="cart">My Cart</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Foundation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Lipstick
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Highlighter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    
        </>
    )
}

export default TopMenu;