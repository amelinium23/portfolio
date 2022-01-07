import { Container, Nav, Navbar } from "react-bootstrap";
import { Keyboard } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Header() {
    const navBarStyle = {
        borderBottom: "1px solid #464646",
    }

    const brandStyle = {
        marginLeft: "1vw",
    }

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "large",
        fontFamily: "Cascadia Code"
    }

    return (
        <Navbar bg="dark" variant="dark" style={navBarStyle}>
            <Container>
                <Navbar.Brand style={brandStyle}><Link to="/" style={linkStyle}><Keyboard width={32} height={32} /></Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link style={linkStyle} to="/projects">Projects</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}