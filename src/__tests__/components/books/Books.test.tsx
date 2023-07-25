import { AllBooks } from "@/components/books";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as api from "@/api/queries/bookQueries"

describe("Books tests", () => {
    it('test_render_component', () => {
        const { getByText } = render(<AllBooks />);
        expect(getByText('Všetky knihy')).toBeInTheDocument();
    });

    it('test_render_search_link', () => {
        const { getByText } = render(<AllBooks />);
        expect(getByText('Hľadať konkretnú knihu')).toBeInTheDocument();
    });

    it('test_render_book_items', () => {
        const { getAllByText } = render(<AllBooks />);
        expect(getAllByText(/Random Name/)).toHaveLength(3);
    });

    it('test_render_pagination', () => {
        const { getByText } = render(<AllBooks />);
        expect(getByText('Aktuálna stránka: 1')).toBeInTheDocument();
    });

    it('test_fallback_loader', () => {
        const { getByRole } = render(<AllBooks />);
        expect(getByRole('progressbar')).toBeInTheDocument();
    });

    it('test_fallback_error', () => {
        api.paginateBooks = jest.fn(() => {
            throw new Error();
        });
        const { getByText } = render(<AllBooks />);
        expect(getByText('Nastala chyba pri načitaní kníh z databázy')).toBeInTheDocument();
    });
})