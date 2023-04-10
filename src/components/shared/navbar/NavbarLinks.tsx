import Link from "next/link";
import useStudent from "@/hooks/useStudent";
import useTeacher from "@/hooks/useTeacher";

const NavbarLinks: React.FC = () => {
  const { student } = useStudent();
  const { teacher } = useTeacher();

  return (
    <>
      <li className="text-black text-xl">
        <Link href="/">Domov</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/about">O Stránke</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/books/all">Knihy</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/authors/all">Autor</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/category/all">Kategórie</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/student/login">Žiak</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/teacher/login">Učiteľ</Link>
      </li>

      {student !== null && (
          <>
          <li className="text-black text-xl">
            <Link href="/student/profile">Profil</Link>
          </li>
        </>
      )}

      {teacher !== null && (
        <>
          <li className="text-black text-xl">
            <Link href="/teacher/profile">Profil</Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavbarLinks;
