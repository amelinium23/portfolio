import { FunctionComponent } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { IProject } from "../types/IProject"
import "../css/Projects.css"
import { Github } from "react-bootstrap-icons"

interface IProps {
  project: IProject
}

export const ProjectContainer: FunctionComponent<IProps> = ({ project }) => {
  const iconStyle = {
    color: "white",
    marginTop: "0.5vh",
  }

  return (
    <Container className="projectContainer">
      <Container className="headerContainer">
        <h5>{project.name}</h5>
      </Container>
      <Container className="projectContainer">
        <Row>
          <Col md={9}>
            <p>{project.description}</p>
          </Col>
          <Col md={3}>
            {project.repo === "" ? null : (
              <Container
                style={{
                  display: "flex",
                  textAlign: "center",
                  flexDirection: "column",
                }}>
                <p style={{ alignSelf: "center" }}>Repo</p>
                <a href={project.repo} target="blank">
                  <Github style={iconStyle} width={70} height={70} />
                </a>
              </Container>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
