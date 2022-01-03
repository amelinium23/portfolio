import { Col, Container, Image } from "react-bootstrap";
import "../css/AboutMe.css"

export default function AboutMe() {
    const containerStyle = {
        display: "flex",
        marginTop: "1vh"
    }

    return (
        <Container id="#aboutMe">
            <Container className="headerContainer">
                <h5 className="aboutMeHeader">About Me</h5>
            </Container>
            <Container style={containerStyle}>
                <Col md={8} className="aboutMeDescription">
                    <p>Hi, I&apos;m Piotr Tomczak! 👋</p>
                    <p>I&apos;m student of Computer Science at TUL. I&apos;m fullstack developer based in Lodz, Poland. I&apos;m currently working at TomTom as an intern fullstack software developer.</p>
                    <p>I love to workout! 💪 I love to learn new things. As you can see i like dark colors and minimalism. 🤭</p>
                </Col>
                <Col md={4}>
                    <Image className="aboutMeImage" src="https://raw.githubusercontent.com/amelinium23/portfolio/main/portfolio-app/src/assets/portfolio_image.png?token=APJ2IWGUPHE5WXYA2T7LXKTB3PT3G" />
                </Col>
            </Container>
        </Container>
    )
}