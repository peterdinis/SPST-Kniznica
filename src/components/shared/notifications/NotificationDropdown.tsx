import React, { useState} from "react";
import { Notifications } from "@mui/icons-material";
import { logoutToast } from "../toasts/adminToasts";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/notificationsQueries";
import useStudent from "@/hooks/useStudent"
import FallbackLoader from "../FallbackLoader";
import FallbackRender from "../errors/FallbackRender";

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

/*   const studentUsername = studentPersonalInfo?.username;

  const {data, isLoading, isError} = useQuery(["myNotifications", studentUsername], () => {
    api.getMyNotifications(studentUsername as unknown as string)
  })

  if (isError) {
    return <FallbackRender error={"Nepodarilo sa načítať notifikácie"} />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  console.log(data); */
  
  return (
    <div className="relative z-20">
      <button
        className="flex items-center justify-center text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={toggleDropdown}
      >
        <Notifications className="w-6 h-6" /> 0
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow z-30">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">
             {/*  {notifications.map((notification: any) => (
                <li key={notification.id}>
                  <h3>{notification.title}</h3>
                  <p>{notification.message}</p>
                </li>
              ))} */}

              <hr />
              <li onClick={logoutFromApp} className="text-red-700">
                Odlhásenie
              </li>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
