import { FunctionComponent } from "react"
import { IExperience } from "../types/IExperience"
import { Container, Row } from "react-bootstrap"
import "../css/Experience.css"

interface ExperienceItemProps {
  experience: IExperience
}

export const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({
  experience,
}) => {
  return (
    <Container>
      <Row>
        <h4 style={{ borderBottom: "1px solid grey" }}>
          {experience.position}
        </h4>
      </Row>
      <Row className="experience-container">
        <p>
          {[experience.companyName, experience.duration, experience.place].join(
            " • "
          )}
        </p>
        <p>Description: {experience.description}</p>
        <p>Used build server: {experience.buildServer}.</p>
        <p>Used frameworks: {experience.frameworks.join(" • ")}.</p>
        <p>Project was built with: {experience.languages.join(" • ")}.</p>
        <p>Database that was used: {experience.database}.</p>
      </Row>
    </Container>
  )
}
