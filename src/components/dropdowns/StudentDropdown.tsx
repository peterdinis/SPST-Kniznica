import React, { useState } from "react";
import { Icon } from '@chakra-ui/react';
import Cookies from "js-cookie";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { logoutToast } from "@/components/shared/toasts/adminToasts";

const StudentDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <div className="relative z-20">
            <button
                className="flex items-center justify-center text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={toggleDropdown}
            >
                <Icon as={HamburgerIcon} boxSize={6} className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute right-0 mt-2 bg-white border rounded shadow z-30"
                    >
                        <ul className="py-2">
                            <dd onClick={logoutFromApp} className="text-lg p-2 text-center text-red-700">
                                Odlhásenie
                            </dd>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StudentDropdown;