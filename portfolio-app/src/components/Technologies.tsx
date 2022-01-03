import { Container, Image } from "react-bootstrap"
import "../css/Technologies.css"

export default function TechnologiesUse() {
    return (
        <Container>
            <Container className="technologiesHeaderContainer">
                <h5 className="technologiesHeader">Frameworks and languages</h5>
            </Container>
            <Container className="technologiesHeaderContainer">
                <p>In this section I included the frameworks and languages that I use on everyday basis.</p>
                <Container className="frameworkContainer">
                    <Image
                        width={60}
                        height={60}
                        alt="javaScript"
                        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                    <Image
                        width={60}
                        height={60}
                        alt="typeScript"
                        src="https://iconape.com/wp-content/png_logo_vector/typescript.png" />
                    <Image
                        width={60}
                        height={60}
                        alt="java"
                        src="https://cdn-icons-png.flaticon.com/512/226/226777.png" />
                    <Image
                        width={60}
                        height={60}
                        alt="python"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" />
                    <Image
                        width={60}
                        height={60}
                        alt="kotlin"
                        src="../assets/Kotlin.png" />
                </Container>
            </Container>
        </Container>
    )
}