import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Envelope, Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "../css/Footer.css"

export default function Footer() {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
    }

    const iconStyle = {
        color: "grey",
        marginLeft: "0.5vw"
    }

    const colStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: 0,
        marginRight: "0.5vw"
    }

    return (
        <Navbar bg="dark" variant="dark" className="footer" style={containerStyle}>
            <Container style={containerStyle}>
                <Row>
                    <p className="footerText">2022, Piotr Tomczak ©, MIT</p>
                    <Col style={colStyle}>
                        <a href="https://github.com/amelinium23" target={"blank"}>
                            <Github style={iconStyle} height={20} width={20} />
                        </a>
                        <a href="https://www.instagram.com/amelinium23/" target={"blank"}>
                            <Instagram style={iconStyle} height={20} width={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/piotr-tomczak-565666209/" target={"blank"}>
                            <Linkedin style={iconStyle} height={20} width={20} />
                        </a>
                        <a href="mailto:piotr.tomczak.praca@gmail.com">
                            <Envelope style={iconStyle} height={20} width={20} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}