import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import classNames from "@/helpers/classNames";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../../api/queries/studentQueries";
import FallbackLoader from "../FallbackLoader";
import FallbackRender from "../errors/ErrorRender"
import { ILoginStudentInfo } from "@/interfaces/IStudent";
import Cookies from "js-cookie";
import { placeholderNotification } from "@/data/placeholderNotification";

const StudentDropdown: React.FC = () => {
  const [student, setStudent] = useState<ILoginStudentInfo | null>(null);
  useEffect(() => {
      const currentStudent = Cookies.get("studentData");
      if (currentStudent) {
          setStudent(JSON.parse(currentStudent));
      }
  }, []);
  
  const studentUsername = student?.data.user.username as unknown as string;
  const {data, isLoading, isError} = useQuery(["studentNotification", studentUsername], () => api.getMyNotifications(studentUsername), {
    placeholderData: placeholderNotification,
    retry: 2
  })


  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  console.log("Notification", data);

  const notificationNum = data.length as unknown as number;
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <NotificationsActiveIcon /> {notificationNum}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {notificationNum === 0 ? (
           <div className="py-1">
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                   "block px-4 py-2 text-sm"
                 )}
               >
                 Žiadne upozornenia
               </a>
             )}
           </Menu.Item>
         </div>
          ): (
            <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Random Message
                </a>
              )}
            </Menu.Item>
          </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default StudentDropdown;
