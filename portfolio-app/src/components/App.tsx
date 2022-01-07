import AppWraper from "./AppWraper"
import Projects from "./Projects";
import { Route, Routes } from "react-router-dom";
import "../css/App.css"


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<AppWraper />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}