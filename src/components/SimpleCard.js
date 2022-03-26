import { Box, Text, Image, Flex } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";

export default function SimpleCard({ book }) {
  return (
    <Flex direction="column">
      {book.volumeInfo.imageLinks ? (
        <Flex>
          <Image
            h="15rem"
            alt={book.volumeInfo.title}
            src={book.volumeInfo.imageLinks.thumbnail}
            borderRadius="0.5rem"
            boxShadow="md"
          />
        </Flex>
      ) : (
        <Image
          src={bookCover.src}
          h="15rem"
          boxShadow="md"
          borderRadius="0.5rem"
        />
      )}
      <Text mt={1} display="flex" fontSize="0.9rem" maxW="10rem">
        {book.volumeInfo.title}
      </Text>
      <Text display="flex" fontSize="0.7rem" maxW="10rem" color="#868e96">
        {book.volumeInfo.authors}
      </Text>
    </Flex>
  );
}
