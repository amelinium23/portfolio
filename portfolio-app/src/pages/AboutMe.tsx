import { FunctionComponent } from "react"
import { Col, Container, Image } from "react-bootstrap"

import "../css/AboutMe.css"

export const AboutMe: FunctionComponent = () => {
  const containerStyle = {
    display: "flex",
  }

  const imageStyle = {
    justifyContent: "center",
  }

  return (
    <>
      <Container>
        <h5 style={{ borderBottom: "1px solid #464646" }}>About Me</h5>
      </Container>
      <Container style={containerStyle}>
        <Col md={6} className="aboutMeDescription">
          <p>
            Hi, there! 👋 <br /> I&apos;m Piotr Tomczak. I&apos;m a Computer
            Science student at TUL. I&apos;m a fullstack developer based in
            Lodz, Poland. Currently working at Ericsson as Junior Software
            Engineer. <br /> I love working out and learning new things. As you
            can see, I like minimalism and dark color palettes. 😊
          </p>
        </Col>
        <Col md={5} style={imageStyle}>
          <Image
            className="aboutMeImage"
            src="https://avatars.githubusercontent.com/u/64201816?v=4"
          />
        </Col>
      </Container>
    </>
  )
}
