import { FunctionComponent } from "react"
import AboutMe from "./AboutMe"
import Footer from "./Footer"
import Header from "./Header"
import TechnologiesUse from "./Technologies"

const AppWrapper: FunctionComponent = () => {
  const appContainerStyle = {
    marginBottom: "35vh",
  }

  return (
    <div className="appContainer" style={appContainerStyle}>
      <Header />
      <AboutMe />
      <TechnologiesUse />
      <Footer />
    </div>
  )
}

export default AppWrapper
