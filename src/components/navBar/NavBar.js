import './NavBar.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavBar () {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">World news</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/readLater">Read Later</Nav.Link>
                <NavDropdown title="Channels" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Washington News</NavDropdown.Item>
                  <NavDropdown.Item href="/aljazeera">
                    Aljazeera News
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/bbcnews">BBC News</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}
