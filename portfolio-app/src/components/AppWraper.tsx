import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Header from "./Header";
import TechnologiesUse from "./Technologies";

export default function AppWraper() {

    return (
        <div className="appContainer">
            <Header />
            <AboutMe />
            <TechnologiesUse />
            <ContactMe />
            <Footer />
        </div>
    )
}