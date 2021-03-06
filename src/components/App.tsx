import { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Projects from "../pages/Projects"
import { Experience } from "../pages/Experience"
import { Header } from "./Header"
import { Footer } from "./Footer"

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
