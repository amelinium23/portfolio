import { Container } from "react-bootstrap";
import { Envelope, Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "../css/ContactMe.css"

export default function ContactMe() {
    const sectionStyle = {
        borderTop: "1px solid #464646",
        marginBottom: "2vh",
    }

    const iconStyle = {
        color: "white",
        marginLeft: "1vw"
    }


    return (
        <Container className="contactMeContainer">
            <Container className="">
                <h5 className="technologiesHeader">Contact me</h5>
            </Container>
            <Container style={sectionStyle}>
                <p>You can contact me via: </p>
                <a href="https://github.com/amelinium23" target={"blank"}>
                    <Github style={iconStyle} height={70} width={70} />
                </a>
                <a href="https://www.instagram.com/amelinium23/" target={"blank"}>
                    <Instagram style={iconStyle} height={70} width={70} />
                </a>
                <a href="https://www.linkedin.com/in/piotr-tomczak-565666209/" target={"blank"}>
                    <Linkedin style={iconStyle} height={70} width={70} />
                </a>
                <a href="mailto:piotr.tomczak.praca@gmail.com">
                    <Envelope style={iconStyle} height={70} width={70} />
                </a>
            </Container>
        </Container>
    )
}