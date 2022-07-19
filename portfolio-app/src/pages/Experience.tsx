import { FunctionComponent } from "react"
import { Container } from "react-bootstrap"
import experiences from "../assets/experience.json"
import ExperienceItem from "../components/ExperienceItem"

const Experience: FunctionComponent = () => {
  return (
    <Container className="appContainer">
      <Container>
        <h3>Experience</h3>
      </Container>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </Container>
  )
}

export default Experience
