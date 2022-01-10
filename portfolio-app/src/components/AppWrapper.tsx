import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import TechnologiesUse from "./Technologies";

export default function AppWrapper() {
    const appContainerStyle = {
        marginBottom: "30vh"
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