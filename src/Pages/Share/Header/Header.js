import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import Logo from '../../../images/Logo2.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar className="nav-style py-3  text-light position-top fixed-top"  bg="" expand="lg">
        
        <Container>
          <Navbar.Brand  href="#home"><h2 className="text-warning fw-bold">Fresh Fruits</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-0">
              <Nav.Link as={Link} className="fw-bold  m-1  fs-6 y text-warning" to="/">Home</Nav.Link>
              <Nav.Link as={Link} className="fw-bold m-1  fs-6 y text-warning" to="/items">InventoryItems</Nav.Link>
              <Nav.Link as={Link} className="fw-bold m-1  fs-6 y text-warning" to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} className="fw-bold m-1  fs-6 y text-warning" to="/ManageItem">InventoryManage</Nav.Link>
              {
                user?<Nav.Link onClick={handleSignOut}  className="fw-bold m-1   fs-6 y text-warning">Logout</Nav.Link>:<Nav.Link as={Link} className="fw-bold  m-1  fs-6 y text-warning" to="/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
