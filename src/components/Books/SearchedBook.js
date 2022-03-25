import { Image, Text } from "@chakra-ui/react";
import BuyButton from "../Buttons/BuyButton";

export default function SearchedBook({ book }) {
  console.log(book);
  const {
    volumeInfo: { imageLinks, title, authors },
    saleInfo: { retailPrice, buyLink },
  } = book;

  return (
    <>
      <Image
        src={imageLinks ? imageLinks.smallThumbnail : "img/book-cover.png"}
        alt={title}
      />
      <Text>{title}</Text>
      <Text>{authors ? authors.join(", ") : "작자 미상"} / 평점</Text>
      <Text display="flex">
        판매가 &nbsp;
        {retailPrice ? (
          <Text color="accent">{retailPrice.amount}원</Text>
        ) : (
          "알수없음"
        )}
      </Text>
      <BuyButton link={buyLink} />
    </>
  );
}
