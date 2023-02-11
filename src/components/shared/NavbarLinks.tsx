import Link from "next/link";

const NavbarLinks: React.FC = () => {
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
        <Link href="/category">Kategórie</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/student/login">Prihlásenie žiak</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/teacher/login">Prihlásenie učiteľ</Link>
      </li>
    </>
  );
};

export default NavbarLinks;
