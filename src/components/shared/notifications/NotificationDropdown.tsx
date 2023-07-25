import React, { useState } from "react";
import { Icon } from '@chakra-ui/react';
import { HiBell } from 'react-icons/hi'; 
import { logoutToast } from "../toasts/adminToasts";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/notificationsQueries";
import useStudent from "@/hooks/useStudent";
import FallbackLoader from "../FallbackLoader";
import FallbackRender from "../errors/FallbackRender";
import { HiOutlineEmojiSad } from 'react-icons/hi';

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { studentPersonalInfo } = useStudent();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("studentAccessToken", {
      path: "/",
    });
    Cookies.remove("studentData", {
      path: "/",
    });
    Cookies.remove("studentRegisterData", {
      path: "/",
    });
    Cookies.remove("studentPersonalData", {
      path: "/",
    });
    window.location.replace("/student/login");
  };

  const studentUsername = studentPersonalInfo?.username;

  const { data, isLoading, isError } = useQuery(
    ["myNotifications", studentUsername],
    async () => {
      const response = await api.getMyNotifications(studentUsername as string);
      return response?.data ?? [];
    }
  );

  if (isError) {
    return <FallbackRender error={"Nepodarilo sa načítať notifikácie"} />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  return (
    <div className="relative z-20">
      <button
        className="flex items-center justify-center text-gray-800"
        onClick={toggleDropdown}
      >
        <Icon as={HiBell} boxSize={6} className="w-6 h-6" /> 0
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow z-30">
          <ul className="py-2">
            <li className="px-6 w-32 py-2 hover:bg-gray-100">
              {data.length === 0 && (
                <div>
                  {" "}
                  <dd className="mt-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Žiadne správy <Icon as={HiOutlineEmojiSad} boxSize={6} />
                  </dd>
                </div>
              )}
              {data.map((notification: any) => (
                <li key={notification.id}>
                  <p>{notification.message}</p>
                </li>
              ))}
              <br />
            </li>
            <span onClick={logoutFromApp} className="text-lg text-center text-red-700">
              Odlhásenie
            </span>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
