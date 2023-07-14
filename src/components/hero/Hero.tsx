import { motion } from "framer-motion";
import DateTimePicker from "../shared/DateTimePicker";
import HeroImage from "../../images/heroImage.png";
import Image from "next/image";
import {socket} from "@/lib/socket"
import { useEffectOnce } from "@/hooks/useEffectOnce";

const Hero: React.FC = () => {

  useEffectOnce(() =>{
    const message = "Connected to the Socket.io server";
    console.log(message);
    return () => {
      socket.disconnect();
    };
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const imageVariants = {
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
    <motion.div
      className="pt-32 lg:flex items-center relative z-10 container mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full mb-8 lg:w-1/2 h-full lg:pr-10 xl:pr-0"
        variants={imageVariants}
      >
        <Image
          className="mx-auto"
          src={HeroImage}
          alt="Hero Image"
          width={700}
          height={700}
          priority={true}
        />
      </motion.div>
      <motion.div
        role="contentinfo"
        className="w-full lg:w-1/2 h-full"
        variants={containerVariants}
      >
        <h1 className="ml-8 text-indigo-700 text-4xl lg:text-6xl font-black mb-8">
          Školská Knižnica
        </h1>
        <DateTimePicker />
        <motion.div
          className="ml-8 text-gray-800 text-xl font-regular mb-8 mt-6"
          variants={containerVariants}
        >
          Knihy sú jedinečne prenosné kúzlo -{" "}
          <span className="font-bold">Stephen King</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;