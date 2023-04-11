import { useAuth } from "../Hooks/Auth";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
	//we need this in the navbar, so that we can log out
	//instead of passing logout through props,
	// we are importing the useAuth which is Auth's 
	// contxt which allows us to call logout()
	const auth = useAuth();

	return (
		<div>
		<p>{auth.userEmail && `Current User: ${auth.userEmail}`}</p>
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Catalog">Dino Toys!!!</Nav.Link>
            <Nav.Link href="/Videos">Raptor Videos</Nav.Link>
			      <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Registration">Register</NavDropdown.Item>
              <NavDropdown.Item href="/ShoppingCart">
                Shopping Cart
              </NavDropdown.Item>
			      <NavDropdown.Divider />
              <NavDropdown.Item href="Contact">Contact</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        <Navbar.Text>
            Signed in as: <a href="#login"></a>
          </Navbar.Text>
        <button className="btn btn-danger navbar-btn"onClick={()=>{
				auth.logout()
			}}>Logout</button>
        {/* <button class="btn btn-sm btn-outline-secondary" type="button"onClick={()=>{
				auth.logout()
			}}>Logout</button> */}
      </Navbar>
	</div>
	);
  }

export default NavBar