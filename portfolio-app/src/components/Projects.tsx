import { Container } from "react-bootstrap"
import "../css/App.css"
import "../css/Projects.css"
import Footer from "./Footer"
import Header from "./Header"

export default function Projects() {
    const projects = [
        {
            name: "Food ordering and delivering service - Glove",
            descrption: "That is fun project for Software Engineering course on TUL. ",
            image: ""
        }
    ]

    return (
        <div className="appContainer">
            <Header />
            {projects.map(project => {
                return (
                    <Container key={project.name} className="projectContainer">
                        haha
                    </Container>
                )
            })}
            <Footer />
        </div>
    )
}