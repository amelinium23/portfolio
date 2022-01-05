import { Container, Image } from "react-bootstrap"
import "../css/Technologies.css"

export default function TechnologiesUse() {
    return (
        <Container>
            <Container className="technologiesHeaderContainer">
                <h5 className="technologiesHeader">Frameworks and languages</h5>
            </Container>
            <Container className="technologiesHeaderContainer">
                <p>All frameworks and languages that I use on everyday basis.</p>
                <Container className="frameworkContainer">
                    <Image
                        width={70}
                        height={70}
                        alt="javaScript"
                        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="typeScript"
                        src="https://iconape.com/wp-content/png_logo_vector/typescript.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="java"
                        src="https://cdn-icons-png.flaticon.com/512/226/226777.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="python"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="kotlin"
                        src="https://raw.githubusercontent.com/amelinium23/portfolio/main/portfolio-app/src/assets/Kotlin.png?token=APJ2IWBHGN3WLME4MT25PCDB3QDWA" />
                    <Image
                        width={70}
                        height={70}
                        alt="react"
                        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="react"
                        src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="bootstrap"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="flask"
                        src="https://seeklogo.com/images/F/flask-logo-44C507ABB7-seeklogo.com.png" />
                    <Image
                        width={70}
                        height={70}
                        alt="jasmine"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/1200px-Logo_jasmine.svg.png" />
                </Container>
            </Container>
            <Container className="technologiesHeaderContainer">
                <p>IDEs of my choice.</p>
                <Container className="frameworkContainer" style={{ borderTop: "1px solid #464646" }}>
                    <p>I created a theme for Visual Studio Code! Simply click the VSC logo to check it out.</p>
                    <Container className="frameworkContainer">
                        <a
                            href="https://marketplace.visualstudio.com/items?itemName=amelinium23.proper-dark-theme"
                            target="blank">
                            <Image
                                width={70}
                                height={70}
                                alt="jetbrains"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" />
                        </a>
                        <Image
                            width={70}
                            height={70}
                            alt="jetbrains"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png" />
                        <Image
                            width={70}
                            height={70}
                            alt="jetbrains"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/2048px-PyCharm_Icon.svg.png" />
                        <Image
                            width={70}
                            height={70}
                            alt="git"
                            src="https://git-scm.com/images/logos/logomark-orange@2x.png" />
                        <Image
                            width={70}
                            height={70}
                            alt="postman"
                            src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" />
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}