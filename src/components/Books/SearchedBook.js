import { Text } from "@chakra-ui/react";

export default function SearchedBook(book) {
  return (
    <>
      <Image
        src={book.volumeInfo.imageLinks.smallThumbnail}
        alt={book.volumeInfo.title}
      />
      <Text>{book.volumeInfo.title}</Text>
      <Text>{book.volumeInfo.authors.join(", ")}</Text>
    </>
  );
}
