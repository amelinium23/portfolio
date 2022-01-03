import { Container, Navbar } from "react-bootstrap";
import "../css/Footer.css"

export default function Footer() {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
    }

    return (
        <Navbar bg="dark" variant="dark" className="footer">
            <Container style={containerStyle}>
                <p className="footerText">2022, Piotr Tomczak ©, MIT</p>
            </Container>
        </Navbar>
    )
}