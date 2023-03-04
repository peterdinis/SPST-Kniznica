import { ILoginStudentInfo } from "@/interfaces/IStudent";
import Link from "next/link";
import {useState, useEffect} from "react";
import Cookies from "js-cookie";

const NavbarLinks: React.FC = () => {
  const [user, setUser] = useState<ILoginStudentInfo |null>(null);

  useEffect(() => {
    const currentUser = Cookies.get("studentData");
    if(currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);
  
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
