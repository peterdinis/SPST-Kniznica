import {  Text } from "@chakra-ui/react"
import Link from "next/link";

const Creator: React.FC = () => {
  return (
    <>
      <Text mt={3} fontSize={20}>
        Autor applikácie{" "}
        <Link className="text-red-400" href="https://www.facebook.com/peto.dinis/">
          Peter Dinis
        </Link>
      </Text>
    </>
  );
};

export default Creator;