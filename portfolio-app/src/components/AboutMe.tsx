import { FunctionComponent } from "react"
import { Col, Container, Image } from "react-bootstrap"
import "../css/AboutMe.css"

const AboutMe: FunctionComponent = () => {
  const containerStyle = {
    display: "flex",
    marginTop: "1vh",
  }

  const imageStyle = {
    justifyContent: "center",
    marginTop: "2vh",
  }

  return (
    <Container style={{ marginTop: "2vh" }}>
      <Container className="headerContainer">
        <h5 className="aboutMeHeader">About Me</h5>
      </Container>
      <Container style={containerStyle}>
        <Col md={8} className="aboutMeDescription">
          <p>Hi, I&apos;m Piotr Tomczak! 👋</p>
          <p>
            I&apos;m a Computer Science student at TUL. I&apos;m a fullstack
            developer based in Lodz, Poland. 💻 Currently working at TomTom as
            an intern fullstack software developer.
          </p>
          <p>
            I love working out and learning new things. As you can see, I like
            minimalism and dark color palettes. 😊
          </p>
        </Col>
        <Col md={4} style={imageStyle}>
          <Image
            className="aboutMeImage"
            src="https://o.remove.bg/downloads/f8cd755e-f366-4cc7-b7be-304b452ae84e/Zdj%C4%99cie_portfolio_kolor-removebg-preview.png"
          />
        </Col>
      </Container>
    </Container>
  )
}

export default AboutMe
