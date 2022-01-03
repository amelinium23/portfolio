import { render } from "@testing-library/react";
import Header from "../components/Header";

test("Render header", () => {
    const headerRender = render(<Header />).baseElement
    const links = headerRender.querySelectorAll(`a`)
    console.log(links)
})