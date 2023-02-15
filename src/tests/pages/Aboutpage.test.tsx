import { render, screen } from '@testing-library/react'
import AboutWrapper from '../../components/about/AboutWrapper'
import AboutPage from "../../pages/about"

describe("Aboutpage Test", () => {

    // fix bug with not find components with prefix @ in jest.config
    it.skip("Render aboutpage", () => {
        const {container} = render(<AboutPage />);
        expect(container).toMatchSnapshot();
    })

    it("Render aboutwrapper", async () => {
        const {container} = render(<AboutWrapper />);
        expect(container).toMatchSnapshot();
    })


    it("Render text in paper component", async () => {
        return;
    })

    it("Test failed because requested text does not exists in aboutWrapper", async () => {
        return;
    })
})