import React from "react";
import {
  NavDropdown,
  Nav,
  FormControl,
  Navbar,
  Button,
  Form,
} from "react-bootstrap";
import Avatar from "react-avatar";
import "./Vnavbar.css";

function Vnavbar() {
  return (
    <div className="corousel">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Vidy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Genres" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/favourites" eventKey="link-1">
                Favourites
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/rented-movies" eventKey="link-1">
                Rent/Buy
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/addmovie" eventKey="link-1">
                AddMovie
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button className="avatar__nav" href="/login" variant="primary">Login</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Vnavbar;
