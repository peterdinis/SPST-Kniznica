import React from "react";
import { motion } from "framer-motion";
import { Container, Text } from "@chakra-ui/react"
import Link from "next/link";

const Creator: React.FC = () => {
  const creatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={creatorVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Text mt={3} fontSize={20}>
          Author applikácie{" "}
          <Link className="text-red-400" href="https://www.facebook.com/peto.dinis/">
            Peter Dinis
          </Link>
        </Text>
      </Container>
    </motion.div>
  );
};

export default Creator;