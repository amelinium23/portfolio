import { Container, Navbar, Image } from "react-bootstrap";

export default function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Image src="../../public/images/portfolio_image.jpg" />
                <Navbar.Brand style={{ float: "left" }}>Software developer</Navbar.Brand>
            </Container>
        </Navbar >
    )
}