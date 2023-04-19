import { useState, useContext } from 'react';
import { useAuth } from "../Hooks/AuthContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Modal } from 'react-bootstrap';
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import { removeUserToken } from "../Auth/authLocalStorage";
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const { isVerified } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async()=>{
    const logoutResult = await removeUserToken();
    if(logoutResult) navigate("/login");
  }
  const cart = useContext(CartContext);
	//we need this in the navbar, so that we can log out
	//instead of passing logout through props,
	// we are importing the useAuth which is Auth's 
	// contxt which allows us to call logout()
	const auth = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkout = async () =>{
    await fetch('http://localhost:5001/checkout', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response)=>{
      return response.json();
    }).then((response)=>{
      if(response.url){
        window.location.assign(response.url); //Forwarding user to Stripe
      }
    })
  }

  const productsCount = cart.items.reduce((sum, product)=> sum + product.quantity, 0);

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
        {/* <Navbar.Text>
            Signed in as: <a href="#login"></a>
          </Navbar.Text> */}
          <Button onClick={handleShow}> Cart ({productsCount}) items</Button>
        <button className="btn btn-danger navbar-btn"onClick={()=>{
				auth.logout()
			}}>Logout</button>
        {/* <button class="btn btn-sm btn-outline-secondary" type="button"onClick={()=>{
				auth.logout()
			}}>Logout</button> */}
      </Navbar>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {productsCount > 0 ?
              <>
                <p>Items in your cart:</p>
                {cart.items.map((currentProduct, idx) =>(

                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                ))}

                  <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                  <Button variant="success" onClick={checkout}>
                    Purchase items!
                  </Button>
              </>
            
            :
                  <h1>There are no items in your cart!</h1>
            }
        </Modal.Body>
      </Modal>
	</div>
	);
  }

export default NavBar

