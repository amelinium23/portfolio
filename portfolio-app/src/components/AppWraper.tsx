import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import TechnologiesUse from "./Technologies";

export default function AppWraper() {

    return (
        <div className="appContainer">
            <Header />
            <AboutMe />
            <TechnologiesUse />
            <Footer />
        </div>
    )
}