import Creator from "../../../components/shared/Creator"
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Creator Component tests", () => {
    it("test_render_component", () => {
        const { container } = render(<Creator />);
        expect(container).toBeInTheDocument();
    });

    it('test_author_name_displayed', () => {
        const { getByText } = render(<Creator />);
        expect(getByText('Author applikácie')).toBeInTheDocument();
        expect(getByText('Peter Dinis')).toBeInTheDocument();
    });

    it('test_correct_facebook_link', () => {
        const { getByText } = render(<Creator />);
        const link = getByText('Peter Dinis');
        expect(link).toHaveAttribute('href', 'https://www.facebook.com/peto.dinis/');
    });

    it('test_author_name_link_styling', () => {
        const { getByText } = render(<Creator />);
        const link = getByText('Peter Dinis');
        expect(link).toHaveClass('text-red-400');
        expect(link).toHaveAttribute('href', 'https://www.facebook.com/peto.dinis/');
    });
});