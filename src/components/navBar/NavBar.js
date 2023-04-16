import "./NavBar.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">NEWS HUB</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/ReadLater"> READ LATER</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}
export default NavBar;