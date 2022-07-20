import { FunctionComponent } from "react"
import { IExperience } from "../types/IExperience"
import { Row } from "react-bootstrap"
import "../css/Experience.css"
import { ArrowReturnRight } from "react-bootstrap-icons"

interface ExperienceItemProps {
  experience: IExperience
}

export const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({
  experience,
}) => {
  return (
    <>
      <h5 style={{ borderBottom: "1px solid grey" }}>{experience.position}</h5>
      <Row className="experience-container">
        <p>
          {[experience.companyName, experience.duration, experience.place].join(
            " • "
          )}
        </p>
        <p>Description: {experience.description}</p>
        <p>
          <ArrowReturnRight /> Used build server: {experience.buildServer}.
        </p>
        <p>
          <ArrowReturnRight /> Used frameworks:{" "}
          {experience.frameworks.join(" • ")}.
        </p>
        <p>
          <ArrowReturnRight /> Project was built with:{" "}
          {experience.languages.join(" • ")}.
        </p>
        <p>
          <ArrowReturnRight /> Database that was used: {experience.database}.
        </p>
      </Row>
    </>
  )
}
