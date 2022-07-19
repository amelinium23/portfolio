import React from "react"
import { IProject } from "../types/IProject"
import ProjectContainer from "../components/ProjectContainer"
import jsonProjects from "../assets/projects.json"
import "../css/App.css"
import "../css/Projects.css"

export default function Projects() {
  const [projects] = React.useState(jsonProjects)

  return (
    <div className="appContainer">
      {projects.map((project: IProject) => {
        return (
          <ProjectContainer
            key={`${project.id}-${project.name}`}
            project={project}
          />
        )
      })}
    </div>
  )
}
