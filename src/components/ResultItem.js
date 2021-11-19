import { WrapItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import bookCover from "../../assets/book-cover.png";

export default function ResultItem({ book }) {
  const {
    volumeInfo: { imageLinks, title },
  } = book;
  console.log(bookCover);

  return (
    <WrapItem>
      {imageLinks ? (
        <Image src={imageLinks.smallThumbnail} alt={title} />
      ) : (
        <Image src={bookCover.src} alt={title} />
      )}
    </WrapItem>
  );
}
