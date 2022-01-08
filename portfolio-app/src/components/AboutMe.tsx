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
        <Container>
            <Container className="headerContainer">
                <h5 className="aboutMeHeader">About Me</h5>
            </Container>
            <Container style={containerStyle}>
                <Col md={8} className="aboutMeDescription">
                    <p>Hi, I&apos;m Piotr Tomczak! 👋</p>
                    <p>I&apos;m a Computer Science student at TUL. I&apos;m a fullstack developer based in Lodz, Poland. Currently working at TomTom as an intern fullstack software developer.</p>
                    <p>I love working out! 💪 I also love learning new things. As you can see, I like minimalism and dark color palettes. 🤭</p>
                </Col>
                <Col md={4} style={imageStyle}>
                    <Image className="aboutMeImage" src="https://raw.githubusercontent.com/amelinium23/portfolio/main/portfolio-app/src/assets/portfolio_image.png?token=APJ2IWGUPHE5WXYA2T7LXKTB3PT3G" />
                </Col>
            </Container>
        </Container>
    )
}