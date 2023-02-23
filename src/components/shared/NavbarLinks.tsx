import { IStudent } from "@/api/interfaces/IUser";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Link from "next/link";

const NavbarLinks: React.FC = () => {
  const [student, setStudent] = useState<IStudent | null>(null);

  const currentStudent = Cookies.get("currentStudent");
  useEffect(() => {
    if (currentStudent) {
      setStudent(JSON.parse(currentStudent));
    }
  }, [currentStudent]);
  
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
      {currentStudent === null || currentStudent === undefined ? (
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
