import { Col, Container, Image, Row } from "react-bootstrap";
import "../css/App.css"

export default function AboutMe() {

    return (
        <Container id="#aboutMe">
            <h5 className="aboutMeHeader">About Me</h5>
            <Container>
                <Row>
                    <Col md={6} className="aboutMeDescription">
                        <p>👋 Hi, I&apos;m Piotr Tomczak!</p>
                        <p>I&apos;m software engineer based in Lodz, Poland. I&apos;m currently working at TomTom in Poland.</p>
                    </Col>
                    <Col md={6}>
                        <Image src="../assets/portfolio_image.png" />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}