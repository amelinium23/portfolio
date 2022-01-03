import { Container, Navbar } from "react-bootstrap";
import "../css/App.css"

export default function Footer() {
    const containerStyle = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <Navbar bg="dark" variant="dark" className="footer">
            <Container style={containerStyle}>

            </Container>
        </Navbar>
    )
}