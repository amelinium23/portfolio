import { Container, Nav, Navbar } from "react-bootstrap"
import { Keyboard } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

export const Header = () => {
  const navBarStyle = {
    borderBottom: "1px solid #464646",
  }

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "large",
    fontFamily: "Cascadia Code",
    marginRight: "0.3vw",
  }

  return (
    <Navbar bg="dark" variant="dark" style={navBarStyle}>
      <Container>
        <Navbar.Brand>
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
