import { FC } from "react"
import { Container, Col, Image, Row } from "react-bootstrap"
import { IProject } from "../types/IProject"
import "../css/Projects.css"
import { Github } from "react-bootstrap-icons"

interface IProps {
    project: IProject;
}

const ProjectContainer: FC<IProps> = ({ project }) => {

    const iconStyle = {
        color: "white"
    }

    return (
        <Container className="projectContainer">
            <Container className="headerContainer">
                <h5>{project.name}</h5>
            </Container>
            <Container className="projectContainer" >
                <Row>
                    <Col md={8}>
                        <p>{project.description}</p>
                        {
                            project.repo === "" ?
                                null :
                                <p>Repo: {" "}
                                    <a href={project.repo} target="blank">
                                        <Github style={iconStyle} width={30} height={30} />
                                    </a>
                                </p>
                        }
                    </Col>
                    <Col md={4}>
                        <Image src={`${project.image}`} width={400} height={490} />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ProjectContainer