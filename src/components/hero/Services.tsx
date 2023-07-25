import { motion } from "framer-motion";
import { Icon } from '@chakra-ui/react';
import { FaHome, FaSchool, FaThumbsUp } from 'react-icons/fa';


const Services: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-y-hidden mt-4">
      <div className="pb-16">
        <div className="pt-16">
          <div className="py-12 bg-gray-100">
            <div className="max-w-8xl mx-auto container">
              <motion.div
                tabIndex={0}
                aria-label="group of cards"
                className="focus:outline-none flex flex-wrap items-center justify-center sm:justify-between"
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                  variants={cardVariants}
                >
                  <h4
                    tabIndex={0}
                    className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                  >
                    <Icon as={FaHome} boxSize={6} /> Doma Objednáš
                  </h4>
                </motion.div>
                <motion.div
                  tabIndex={0}
                  aria-label="card 2"
                  className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                  variants={cardVariants}
                >
                  <h4
                    tabIndex={0}
                    className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                  >
                    <Icon as={FaSchool} boxSize={6}  /> V škole vyzdhvineš
                  </h4>
                </motion.div>
                <motion.div
                  tabIndex={0}
                  aria-label="card 3"
                  className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                  variants={cardVariants}
                >
                  <h4
                    tabIndex={0}
                    className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                  >
                    <Icon as={FaThumbsUp} boxSize={6} /> Ľahké že 👀
                  </h4>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;