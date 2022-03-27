import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import BuyButton from "../Buttons/BuyButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function SearchedBook({ book }) {
  const {
    volumeInfo: { imageLinks, title, authors },
    saleInfo: { retailPrice, buyLink },
  } = book;

  return (
    <Flex alignItems="center" justifyContent="center" mb="2rem">
      {/* 책 표지 */}
      <Image
        src={imageLinks ? imageLinks.smallThumbnail : "img/book-cover.png"}
        alt={title}
        mr="1rem"
        w={["6rem", "8rem", "8rem"]}
        h={["9rem", "12rem", "12rem"]}
        objectFit="cover"
      />
      {/* 책 정보 */}
      <Stack spacing={2} w={["14rem", "18rem", "18rem"]}>
        <Text fontSize={["lg", "xl", "xl"]} as="b" isTruncated>
          {title}
        </Text>
        <Text>{authors ? authors.join(", ") : "작자 미상"} / 평점</Text>
        <Text display="flex" alignItems="center">
          판매가 &nbsp;
          {retailPrice ? (
            <Text color="accent" as="b">
              {retailPrice.amount}원
            </Text>
          ) : (
            "정보없음"
          )}
          &nbsp;
          <IoLogoGooglePlaystore />
        </Text>
        <BuyButton link={buyLink} isDisabled={retailPrice ? false : true} />
      </Stack>
    </Flex>
  );
}
