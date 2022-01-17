import React from "react"
import { IProject } from "../types/IProject"
import Footer from "./Footer"
import Header from "./Header"
import ProjectContainer from "./ProjectContainer"
import "../css/App.css"
import "../css/Projects.css"
import jsonProjects from "../projects.json"

export default function Projects() {
    const [projects,] = React.useState(jsonProjects)

    return (
        <div className="appContainer">
            <Header />
            {
                projects.map((project: IProject) => {
                    return (
                        <ProjectContainer key={`${project.id}-${project.name}`} project={project} />
                    )
                })
            }
            <Footer />
        </div>
    )
}