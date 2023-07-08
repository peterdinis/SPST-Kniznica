import React, { useState, useEffect } from "react";
import { Notifications } from "@mui/icons-material";
import { logoutToast } from "../toasts/adminToasts";
import Cookies from "js-cookie";
import {socket} from "@/lib/socket";

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [notification, setNotification] = useState("");

  useEffect(() => {
    // Listen for the 'notification' event from the server
    socket.on("notification", (message: string) => {
      setNotification(message);
    });

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off("notification");
    };
  }, []);

  console.log(notification);

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
              <p>{notification}</p>
              <hr />
              <button onClick={logoutFromApp} className="text-red-700">
                Odlhásenie
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
