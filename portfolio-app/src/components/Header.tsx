import { Container, Navbar } from "react-bootstrap";
import { Keyboard } from "react-bootstrap-icons";

export default function Header() {
    const navBarStyle = {
        borderBottom: "1px solid #464646",
        justifyContent: "center",
    }

    const brandStyle = {
        marginLeft: "1vw"
    }

    return (
        <Navbar bg="dark" variant="dark" style={navBarStyle}>
            <Container>
                <Navbar.Brand style={brandStyle}><Keyboard width={32} height={32} /></Navbar.Brand>
            </Container>
        </Navbar>
    )
}