import { Image, Text } from "@chakra-ui/react";

export default function SearchedBook({ book }) {
  const {
    volumeInfo: { imageLinks, title, authors },
  } = book;

  return (
    <>
      <Image
        src={imageLinks ? imageLinks.smallThumbnail : "img/book-cover.png"}
        alt={title}
      />
      <Text>{title}</Text>
      <Text>{authors.join(", ")}</Text>
    </>
  );
}
