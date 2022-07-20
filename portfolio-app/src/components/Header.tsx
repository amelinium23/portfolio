import { Container, Nav, Navbar } from "react-bootstrap"
import { Keyboard } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

export const Header = () => {
  const navBarStyle = {
    borderBottom: "1px solid #464646",
    marginBottom: "1vh",
  }

  const brandStyle = {
    marginLeft: "0.55vw",
  }

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "large",
    fontFamily: "Cascadia Code",
    margin: "0 0.25vw",
  }

  return (
    <Navbar bg="dark" variant="dark" style={navBarStyle}>
      <Container>
        <Navbar.Brand style={brandStyle}>
          <Link to="/" style={linkStyle}>
            <Keyboard width={32} height={32} />
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link style={linkStyle} to="/projects">
            Projects
          </Link>
          <Link style={linkStyle} to="/experience">
            Experience
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
