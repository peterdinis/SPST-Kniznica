"use client"

import { motion } from "framer-motion";
function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="relative pt-8 pb-6 mt-1"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <a
                href="https://www.spsbj.sk/"
                className="text-blueGray-500 text-2xl hover:text-gray-800"
              >
                <motion.span className="inline-block" whileHover={{ scale: 1.1 }}>
                &copy; SPŠT Knižnica 2023
                </motion.span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;