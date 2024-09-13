import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import  {Link}  from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import WishlistContext from '../WishlistContext (1)';

function CustomNavbar (){
  const { cart} = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

    return(
<>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Ecmmerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link  to="/">Home</Link>
            <Link to="/login"> Login</Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"  as={Link} to="cart"> 
              Cart{" "} 
                <Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary" text="dark">
        {cart.length}
      </Badge>
      </Stack>  </NavDropdown.Item>
              <NavDropdown.Item href="#action4"  as={Link} to="/wishlist">
Wishlist
<Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary" text="dark">
        {wishlist.length}
      </Badge>
      </Stack> 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>



</>
    )

};
export default CustomNavbar;