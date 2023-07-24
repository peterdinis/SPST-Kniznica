import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "@/components/shared/navbar/Navbar";

describe("Navbar tests", () => {
    it('test_navbar_renders_without_crashing', () => {
        render(<Navbar />);
    });

    it('test_navbar_displays_title', () => {
        render(<Navbar />);
        const title = screen.getByText('SPŠT Knižnica');
        expect(title).toBeInTheDocument();
    });

    it('test_navbar_menu_icon_changes_to_close_icon_when_clicked', () => {
        render(<Navbar />);
        const menuIcon = screen.getByRole('button');
        fireEvent.click(menuIcon);
        const closeIcon = screen.getByRole('button');
        expect(closeIcon).toHaveClass('MuiClose-root');
    });

    it('test_navbar_displays_correctly_on_different_screen_sizes', () => {
        render(<Navbar />);
        const navbar = screen.getByRole('navigation');
        expect(navbar).toHaveClass('w-full bg-white');
        expect(navbar).toHaveClass('lg:max-w-7xl');
        expect(navbar).toHaveClass('md:flex');
        expect(navbar).toHaveClass('md:px-8');
    });

    it('test_navbar_menu_links_navigate_to_correct_pages', () => {
        render(<Navbar />);
        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About');
        const contactLink = screen.getByText('Contact');
        expect(homeLink).toHaveAttribute('href', '/');
        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(contactLink).toHaveAttribute('href', '/contact');
    });
})