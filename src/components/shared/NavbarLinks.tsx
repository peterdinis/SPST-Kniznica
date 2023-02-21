import Cookies from "js-cookie";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavbarLinks: React.FC = () => {
  const [user, setUser] = useState<any>(); // TODO: Update later;
  const currentUser = Cookies.get("currentUser");
  useEffect(() => {
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, [currentUser]);
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
      {user === null || user === undefined ? (
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
