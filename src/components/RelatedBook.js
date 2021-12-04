import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Flex, Grid, Box, Text, Spinner, Image } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";

export default function Recommend({ author }) {
  const [bookObj, setBookObj] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(author);
  useEffect(() => {
    const book = async () => {
      setLoading(true);
      if (author) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${author}`
        );
        setBookObj(response.data.items);
      }
      setLoading(false);
    };
    book();
    console.log(bookObj);
  }, []);

  if (loading)
    return (
      <Flex justify="center">
        <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
      </Flex>
    );
  return (
    <Grid templateColumns="repeat(4,1fr)" m={10}>
      {bookObj.map((book, index) => (
        <Link
          book={book}
          href={{
            pathname: `/detail/[id]`,
            query: {
              id: book.id,
              title: book.volumeInfo.title,
              buylink: book.saleInfo.buyLink,
              description: book.volumeInfo.description,
              preview: book.volumeInfo.previewLink,
              thumbnail: book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : bookCover.src,
              date: book.volumeInfo.publishedDate,
              publisher: book.volumeInfo.publisher,
              authors: book.volumeInfo.authors,
            },
          }}
        >
          <Box key={index} position="relative" visibility="">
            {book.volumeInfo.imageLinks ? (
              <Image
                h="15rem"
                key={index}
                alt={book.volumeInfo.title}
                src={book.volumeInfo.imageLinks.thumbnail}
                borderRadius="15"
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
