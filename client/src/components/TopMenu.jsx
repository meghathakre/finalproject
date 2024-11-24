import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const TopMenu=()=>{
  

    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container className='nav'>
        <Navbar.Brand href="#home">Beautify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Skin</Nav.Link>
            <Nav.Link as={Link} to="hair">Hair</Nav.Link>
            <Nav.Link as={Link} to="allproduct">All product</Nav.Link>
           
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="men">Offer</Nav.Link>
            <Nav.Link as={Link} to="women">Trend</Nav.Link>
            <Nav.Link as={Link} to="kids">Baby care</Nav.Link>
            <Nav.Link as={Link} to="cart">My cart</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Face</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Skin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hair</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.4">
                body
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
               Makeup
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
            Fragrence
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
              Nails
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      <div><button   style={{border:"none"}}>Login</button></div>
      </Container>
      
    </Navbar>



    

    
        </>
    )
}

export default TopMenu;