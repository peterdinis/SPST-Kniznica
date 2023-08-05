import Header from "../shared/Header";
import * as api from "../../api/queries/authorQueries";
import Link from "next/link";
import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
import { WarningIcon } from "@chakra-ui/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollToTop from "@/hooks/useScroll";
import { IAuthor } from "@/interfaces/IAuthor";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Box,
  Progress,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import defaultImage from "@/images/noImage.png";

const SearchAuthorsForm: React.FC = () => {
  const initialSearchValue: never[] = [];
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any>(initialSearchValue);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      api.searchForAuthors(debouncedSearchTerm).then((results: any) => {
        setIsSearching(false);
        setResults(results);
      });
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Header name="Hľadanie konkretného spisovateľa" />
      <div className="flex justify-center align-top">
        <form className="mt-4">
          <input
            name="form"
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            placeholder="Hľadaj knihu.."
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {isSearching && (
            <div className="text-center mt-4 font-bold text-xl">
              <Box sx={{ display: "flex" }}>
                <Progress variant="determinate" value={progress} />
              </Box>
              <Text>Vyhľadám...</Text>
            </div>
          )}

          {results.data === undefined ||
            (results.data.length === 0 && (
              <div className="text-center font-bold mt-4">
                Spisovateľ/ka nebol/a najdený/á <WarningIcon />
              </div>
            ))}
        </form>
      </div>

      <>
        {results.data === undefined ? (
          <></>
        ) : (
          <>
            <div className="grid gap-8 space-x-1 lg:grid-cols-6">
              {results.data.map &&
                results.data.map((item: IAuthor) => {
                  return (
                    <>
                      <Center py={6}>
                        <Stack
                          borderWidth="1px"
                          borderRadius="lg"
                          direction={{ base: "column", md: "row" }}
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          bg={useColorModeValue("white", "gray.900")}
                          boxShadow={"2xl"}
                        >
                          <Flex flex={1} bg="blue.200">
                            {item.image == null ? (
                              <>
                                <Image
                                  objectFit="cover"
                                  boxSize="100%"
                                  src={defaultImage as unknown as string}
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
                            pt={2}
                          >
                            <Heading fontSize={"2xl"} fontFamily={"body"}>
                              {item.name}
                            </Heading>
                            <Text
                              fontWeight={600}
                              color={"gray.500"}
                              size="sm"
                              mb={4}
                            >
                              {item.lastName}
                            </Text>
                            <Stack
                              width={"100%"}
                              mt={"2rem"}
                              direction={"row"}
                              padding={2}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              <Button
                                flex={1}
                                fontSize={"sm"}
                                rounded={"full"}
                                bg={"blue.400"}
                                color={"white"}
                                boxShadow={
                                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                }
                                _hover={{
                                  bg: "blue.500",
                                }}
                                _focus={{
                                  bg: "blue.500",
                                }}
                              >
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
                    </>
                  );
                })}
            </div>
            <ScrollToTop />
          </>
        )}
      </>
    </>
  );
};

export default SearchAuthorsForm;
