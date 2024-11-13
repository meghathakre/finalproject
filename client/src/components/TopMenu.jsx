import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




const TopMenu=()=>{
  
    return(
        <>
        <div id="topmenu">
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MiniStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
       
            
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link  as={Link}  to="service">Service</Nav.Link>
            <Nav.Link  as={Link}  to="products">Products</Nav.Link>
            <Nav.Link   as={Link} to="shop">Shop</Nav.Link>
            <Nav.Link as={Link}  to="offer">Offer</Nav.Link>
            <Nav.Link as={Link}  to="blog">Blog</Nav.Link> 
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="rings"> Rings</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="bengles"> Bengles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="earings">Earings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="premium">
                Premium jewellary
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          
           
            <Nav.Link href="#deets">
            <FaSearch onClick={handleSearch} />
            </Nav.Link>
            <Nav.Link href="#deets">
            <FaUser />
            </Nav.Link>
            <Nav.Link  href="#memes">
            <a href='#' onClick={myCart}>
            <FaShoppingCart />
            </a>
            


            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
        </>
    )
}

export default TopMenu;