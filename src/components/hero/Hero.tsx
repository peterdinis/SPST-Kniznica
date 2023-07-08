import React, {useEffect} from "react";
import { motion } from "framer-motion";
import DateTimePicker from "../shared/DateTimePicker";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/exampleQuery";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/FallbackRender";
import HeroImage from "../../images/heroImage.png";
import Image from "next/image";
import { queryClient } from "@/api/queryClient";
import {socket} from "@/lib/socket"
import { apiError } from "../shared/errors/constants/errorMessages";

const Hero: React.FC = () => {
  useEffect(() => {
    console.log('Connected to the Socket.io server');

    return () => {
      socket.disconnect();
    };
  }, []);

  const { data, isLoading, isError } = useQuery(
    ["example"],
    api.getExampleData,
    {
      retry: 2,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error={apiError} />;
  }

  queryClient.setQueryData(["Example Data"], data);

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