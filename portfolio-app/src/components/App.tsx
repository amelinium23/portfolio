import AppWrapper from "./AppWrapper"
import Projects from "./Projects"
import { Route, Routes } from "react-router-dom"
import "../css/App.css"
import { FunctionComponent } from "react"

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppWrapper />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
