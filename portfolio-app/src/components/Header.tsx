import { Container, Navbar } from "react-bootstrap";
import { Keyboard } from "react-bootstrap-icons";

export default function Header() {
    const navBarStyle = {
        borderBottom: "1px solid #292929",
        justifyContent: "center",
    }

    const brandStyle = {
        marginLeft: "1vw"
    }

    return (
        <Navbar bg="dark" variant="dark" style={navBarStyle}>
            <Container>
                <Navbar.Brand style={brandStyle}><Keyboard width={42} height={42} /></Navbar.Brand>
            </Container>
        </Navbar>
    )
}