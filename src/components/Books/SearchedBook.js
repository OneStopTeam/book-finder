import { Image, Text } from "@chakra-ui/react";
import BuyButton from "../Buttons/BuyButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";

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
      <Text display="flex" alignItems="center">
        판매가 &nbsp;
        {retailPrice ? (
          <Text color="accent">{retailPrice.amount}원</Text>
        ) : (
          "정보없음"
        )}
        &nbsp;
        <IoLogoGooglePlaystore />
      </Text>
      <BuyButton link={buyLink} isDisabled={retailPrice ? false : true} />
    </>
  );
}
