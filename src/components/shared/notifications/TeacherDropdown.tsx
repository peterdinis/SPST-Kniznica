import React, { useState } from "react";
import { Icon } from '@chakra-ui/react';
import { HiBell } from 'react-icons/hi';
import { logoutToast } from "@/components/shared/toasts/adminToasts";
import Cookies from "js-cookie";
const TeacherDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("teacherAccessToken", {
      path: "/",
    });
    Cookies.remove("teacherData", {
      path: "/",
    });
    Cookies.remove("teacherPersonalInfo", {
      path: "/",
    });
    Cookies.remove("teacherRegisterData", {
      path: "/",
    });
    window.location.replace("/teacher/login");
  };

  return (
    <div className="relative z-20">
      <button
        className="flex items-center justify-center text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={toggleDropdown}
      >
       <Icon as={HiBell} boxSize={6} className="w-6 h-6" /> 0
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow z-30">
          <ul className="py-2">
            <li className="px-6 w-32 py-2 hover:bg-gray-100">
              Žiadne správy
            </li>
            <dd onClick={logoutFromApp} className="text-lg text-center text-red-700">
              Odlhásenie
            </dd>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeacherDropdown;
