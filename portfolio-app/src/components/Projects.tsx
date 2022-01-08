import React, { useEffect } from "react"
import axios from "axios"
import { IProject } from "../types/IProject"
import Footer from "./Footer"
import Header from "./Header"
import ProjectContainer from "./ProjectContainer"
import "../css/App.css"
import "../css/Projects.css"

export default function Projects() {
    const [projects, setProjects] = React.useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            const res = axios.get('https://api.jsonbin.io/v3/b/61d9e3ad2675917a628c8e19/latest', {
                headers: {
                    "X-master-key": "$2b$10$Vh8O/VTaKC88yeAXXUohmutj1KNGVnU47h5kLtdcVFfStrBW2xq9e"
                }
            })
            const json = (await res).data
            setProjects(json.record)
        }
        fetchProjects()
    }, [])

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