import { useState } from "react";
import Link from "next/link";
import { Icon } from '@chakra-ui/react';
import { HiMenuAlt1, HiX } from 'react-icons/hi'; 
import { NavbarLinks } from "..";

export default function Navbar() {
  const [navbar, setNavbar] = useState<Boolean>(false);

  return (
    <nav className="w-full bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-xl text-black font-bold">SPŠT Knižnica</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Icon as={HiX} boxSize={6} className="font-bold" />
                ) : (
                  <Icon as={HiMenuAlt1} boxSize={6} className="font-bold" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <NavbarLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
