import { render, screen } from '@testing-library/react'
import Hero from '@/components/hero/Hero';

describe("Homepage Test", () => {
    it("Render SPŠT Knižnica heading", () => {
        const {container} = render(<Hero />);

        const heading = screen.getByRole("heading", {
            name: "SPŠT Knižnica"
        })

        expect(heading).toBeInTheDocument()

        expect(container).toMatchSnapshot()
    })
})