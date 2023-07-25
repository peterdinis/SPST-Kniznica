import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/authorQueries";
import Link from "next/link";
import ScrollToTop from "@/hooks/useScroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { Icon } from "@chakra-ui/icons";
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { WarningIcon } from "@chakra-ui/icons";
import { IAuthor } from "@/interfaces/IAuthor";
import { getAllAuthorsError } from "../../constants/errorMessages";
import { motion } from "framer-motion";
import { FallbackLoader, FallbackRender, Header } from "../shared";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const GetAllAuthors: React.FC = () => {
  const [page, setPage] = useState(0);
  const [limit] = useState(12);
  const {
    data: paginatedData,
    isError,
    isFetching,
    isLoading,
    isPreviousData,
  } = useQuery(
    ["paginateAuthors", page],
    () => api.paginateAuthors(page, limit),
    {
      keepPreviousData: true,
      retry: 2,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error={getAllAuthorsError} />;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <Header name="Všetci Autori" />
      <div className="mt-4 font-bold text-center text-red-800 text-xl">
        <Link href="/authors/search">Hľadať konkretného authora </Link>
      </div>
      <div className="grid gap-8 space-x-1 lg:grid-cols-6">
        {paginatedData?.data.result.length === 0 && (
          <div className="text-center font-bold mt-4">
            Žiadných spisovateľov som nenanšiel{" "}
            <WarningIcon />
          </div>
        )}
        {paginatedData?.data.result &&
          paginatedData?.data.result.map((item: IAuthor, index: number) => {
            return (
              <motion.div
                key={item.id}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Center py={6}>
                  <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    // w={{ sm: '100%', md: '540px' }}
                    direction={{ base: 'column', md: 'row' }}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}>
                    <Flex flex={1} bg="blue.200">
                      {item.image == null ? (
                        <>
                          <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={
                              'https://picsum.photos/200/300'
                            }
                            alt="#"
                          />
                        </>
                      ) : (
                        <>
                          <LazyLoadImage
                            alt="Placeholder"
                            className="h-auto w-full rounded-lg"
                            src={item.image}
                          />
                        </>
                      )}
                    </Flex>
                    <Stack
                      flex={1}
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      p={1}
                      pt={2}>
                      <Heading fontSize={'2xl'} fontFamily={'body'}>
                      {item.name}
                      </Heading>
                      <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                      {item.lastName}
                      </Text>
                      <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Button
                          flex={1}
                          fontSize={'sm'}
                          rounded={'full'}
                          bg={'blue.400'}
                          color={'white'}
                          boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                          }
                          _hover={{
                            bg: 'blue.500',
                          }}
                          _focus={{
                            bg: 'blue.500',
                          }}>
                           <Link
                        href={`/authors/detail/${item.externalId}`}
                      >
                        Detail
                      </Link>
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Center>
                <ScrollToTop />
              </motion.div>
            );
          })}
      </div>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            <button
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0}
              className="text-sm ml-3 font-medium leading-none "
            >
              <Icon as={IoArrowBack} boxSize={6} />
            </button>
          </div>
          <span className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            Aktuálna stránka: {page + 1}
          </span>
          <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            <button
              onClick={() => {
                if (!isPreviousData && paginatedData?.data.hasNextPage) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={isPreviousData || !paginatedData?.data.hasNextPage}
              className="text-sm font-medium leading-none mr-3"
            >
              <Icon as={IoArrowForward} boxSize={6} />
            </button>
          </div>
          {isFetching ? <FallbackLoader /> : null}
        </div>
      </div>
    </>
  );
};

export default GetAllAuthors;
