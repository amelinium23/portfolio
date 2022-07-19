import { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom"
import AppWrapper from "./AppWrapper"
import Projects from "../pages/Projects"
import Experience from "../pages/Experience"
import "../css/App.css"

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppWrapper />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  )
}

export default App
