import Link from "next/link";

const NavbarLinks: React.FC = () => {
  const loggedUser = localStorage.getItem("studentEmail");
  console.log(loggedUser);
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
        <Link href="/category/all">Kategórie</Link>
      </li>
      {loggedUser === null || loggedUser === undefined ? (
        <>
          <li className="text-black text-xl">
            <Link href="/student/login">Prihlásenie žiak</Link>
          </li>
          <li className="text-black text-xl">
            <Link href="/teacher/login">Prihlásenie učiteľ</Link>
          </li>
        </>
      ) : (
        <>
          <li className="text-black text-xl">
            <Link href="/student/profile">Profil</Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavbarLinks;
