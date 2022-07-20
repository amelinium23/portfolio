import { FunctionComponent } from "react"
import { Container } from "react-bootstrap"
import experiences from "../assets/experience.json"
import { ExperienceItem } from "../components/ExperienceItem"

import "../css/Experience.css"

export const Experience: FunctionComponent = () => {
  return (
    <Container className="main-experience-container appContainer">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </Container>
  )
}
