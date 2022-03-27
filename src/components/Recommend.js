import Link from "next/link";
import { Flex, Grid, Box, Text, Spinner, Image } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";
import useRecommendBook from "../hooks/useRecommendBook";

export default function Recommend() {
  const { isLoading, isError, recommend } = useRecommendBook();
  if (isLoading)
    return (
      <Flex justify="center">
        <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
      </Flex>
    );

  return (
    <Grid templateColumns="repeat(4,1fr)" m={10}>
      {recommend &&
        recommend.map((book, index) => (
          <Link
            book={book}
            href={{
              pathname: `/detail/[id]`,
              query: {
                id: book.id,
              },
            }}
          >
            <Box key={index} book={book} cursor="pointer">
              {book.volumeInfo.imageLinks ? (
                <Image
                  h="15rem"
                  alt={book.volumeInfo.title}
                  src={book.volumeInfo.imageLinks.thumbnail}
                  borderRadius="0.5rem"
                  boxShadow="md"
                />
              ) : (
                <Image
                  src={bookCover.src}
                  h="15rem"
                  boxShadow="md"
                  borderRadius="15"
                />
              )}
              <Text
                p={1}
                display="flex"
                justify="center"
                fontSize="0.7rem"
                w="10rem"
                color="#868e96"
                positon="absolute"
              >
                {book.volumeInfo.title}
              </Text>
            </Box>
          </Link>
        ))}
    </Grid>
  );
}
