import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Container,Nav,Navbar} from 'react-bootstrap';


const Header = () => {


    return (
        <header>
    
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
    <LinkContainer to="/">
    <Navbar.Brand >Shop</Navbar.Brand>
    </LinkContainer>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/SignIn'>
                <Nav.Link>
                  <i className='fas fa-user'></i> SignIn
                </Nav.Link>
              </LinkContainer>

    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar> 
        
        </header>
    )
}

export default Header;

{/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}