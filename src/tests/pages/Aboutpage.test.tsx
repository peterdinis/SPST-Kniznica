import { render} from '@testing-library/react'
import AboutWrapper from "../../components/about/AboutWrapper";
import AboutPage from "../../pages/about"

describe("Aboutpage Test", () => {
    it("Render aboutpage", () => {
        const {container} = render(<AboutPage />);
        expect(container).toMatchSnapshot();
    })

    it("Render aboutwrapper", async () => {
        const {container} = render(<AboutWrapper />);
        expect(container).toMatchSnapshot();
    })


    it.skip("Render text in paper component", async () => {
        return;
    })

    it.skip("Test failed because requested text does not exists in aboutWrapper", async () => {
        return;
    })
})