import { FunctionComponent } from "react"
import { IExperience } from "../types/IExperience"
import { Container, Row } from "react-bootstrap"

interface ExperienceItemProps {
  experience: IExperience
}

const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({
  experience,
}) => {
  return (
    <Container>
      <Row>
        <h3>{experience.position}</h3>
      </Row>
      <Row>
        <p>
          {[experience.companyName, experience.duration, experience.place].join(
            ", "
          )}
        </p>
        <p>{experience.description}</p>
      </Row>
    </Container>
  )
}

export default ExperienceItem
