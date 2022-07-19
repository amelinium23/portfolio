import { FunctionComponent } from "react"
import AboutMe from "./AboutMe"
import TechnologiesUse from "../components/Technologies"

const HomePage: FunctionComponent = () => {
  return (
    <div className="appContainer">
      <AboutMe />
      <TechnologiesUse />
    </div>
  )
}

export default HomePage
