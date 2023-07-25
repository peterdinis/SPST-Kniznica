import { NavbarLinks } from "@/components/shared";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cookies from "js-cookie";

describe("Navbar Links tests", () => {
    it('test_render_all_links', () => {
        const { getByText } = render(<NavbarLinks />);
        expect(getByText('Domov')).toBeInTheDocument();
        expect(getByText('Knihy')).toBeInTheDocument();
        expect(getByText('Autori')).toBeInTheDocument();
        expect(getByText('Kategórie')).toBeInTheDocument();
    });

    it('test_render_domov_link', () => {
        const { getByText } = render(<NavbarLinks />);
        expect(getByText('Domov')).toBeInTheDocument();
    });

    it('test_render_student_and_teacher_links', () => {
        const { getByText } = render(<NavbarLinks />);
        expect(getByText('Žiak')).toBeInTheDocument();
        expect(getByText('Učiteľ')).toBeInTheDocument();
    });

    it('test_render_profile_and_notification_links', () => {
        const { getByText } = render(<NavbarLinks />);
        Cookies.set('studentData', JSON.stringify({}));
        expect(getByText('Profil')).toBeInTheDocument();
        expect(getByText('NotificationDropdown')).toBeInTheDocument();
    });

    it('test_render_profile_and_teacher_links', () => {
        const { getByText } = render(<NavbarLinks />);
        Cookies.set('teacherData', JSON.stringify({}));
        expect(getByText('Profil')).toBeInTheDocument();
        expect(getByText('TeacherDropdown')).toBeInTheDocument();
    });

    it('test_render_profile_and_admin_links', () => {
        const { getByText } = render(<NavbarLinks />);
        Cookies.set('adminData', JSON.stringify({}));
        expect(getByText('Profil')).toBeInTheDocument();
        expect(getByText('AdminDropdown')).toBeInTheDocument();
    });
})