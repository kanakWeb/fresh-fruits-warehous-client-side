import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        className="nav-style py-3 shadow-lg  text-light  fixed-top"
        bg=""
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="text-info fw-bold">Fresh Fruits</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-bar mb-0">
              <Nav.Link
                as={CustomLink}
                className="fw-bold  m-1 fs-6  "
                to="/"
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={CustomLink}
                className="fw-bold m-1   fs-6 "
                to="/blogs"
              >
                Blogs
              </Nav.Link>

              {user ? (
                <>
                  <Nav.Link
                    as={CustomLink}
                    className="fw-bold m-1   fs-6 "
                    to="/myItems"
                  >
                    My Items
                  </Nav.Link>
                  <Nav.Link
                    as={CustomLink}
                    className="fw-bold m-1   fs-6 "
                    to="/addItems"
                  >
                    Add Items
                  </Nav.Link>

                  <Nav.Link
                    as={CustomLink}
                    className="fw-bold m-1   fs-6 y "
                    to="AllInventoryItems"
                  >
                    AllInventoryManage
                  </Nav.Link>
                  <Nav.Link
                    as={CustomLink}
                    className="fw-bold m-1   fs-6 y "
                    to="profile"
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    onClick={handleSignOut}
                    className="fw-bold m-1 text-dark fs-6 y "
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as={CustomLink}
                  className="fw-bold  m-1  fs-6 y "
                  to="/login"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
