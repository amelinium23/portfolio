import { Col, Container, Image } from "react-bootstrap";
import "../css/AboutMe.css"

export default function AboutMe() {
    const containerStyle = {
        display: "flex",
        marginTop: "1vh"
    }

    const imageStyle = {
        justifyContent: "center",
        marginTop: "2vh"
    }

    return (
        <Container style={{ marginTop: "2vh" }}>
            <Container className="headerContainer">
                <h5 className="aboutMeHeader">About Me</h5>
            </Container>
            <Container style={containerStyle}>
                <Col md={8} className="aboutMeDescription">
                    <p>Hi, I&apos;m Piotr Tomczak! 👋</p>
                    <p>I&apos;m a Computer Science student at TUL. I&apos;m a fullstack developer based in Lodz, Poland. 💻 Currently working at TomTom as an intern fullstack software developer.</p>
                    <p>I love working out and learning new things. As you can see, I like minimalism and dark color palettes. 😊</p>
                </Col>
                <Col md={4} style={imageStyle}>
                    <Image
                        className="aboutMeImage"
                        src="https://raw.githubusercontent.com/amelinium23/portfolio/main/portfolio-app/src/assets/portfolio_image.png?token=GHSAT0AAAAAABQLF646YUP3VOYSEW6HINFWYPFFEBQ" />
                </Col>
            </Container>
        </Container>
    )
}