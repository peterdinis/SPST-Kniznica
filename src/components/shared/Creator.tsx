import React from "react";
import { Container, Text } from "@chakra-ui/react"
import Link from "next/link";

const Creator: React.FC = () => {
  return (
    <Container>
      <Text mt={3} fontSize={20}>
        Author applikácie{" "}
        <Link className="text-red-400" href="https://www.facebook.com/peto.dinis/">
          Peter Dinis
        </Link>
      </Text>
    </Container>
  );
};

export default Creator;