import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Box, Text, Stack, Image, Flex } from "@chakra-ui/react";

export default function Description() {
  const [loading, setLoading] = useState(false);
  const [bookObj, setBookObj] = useState("");
  const BuyButton = () => {
    return (
      <Link href={bookList[0].saleInfo.buyLink}>
        <Button m={1}>구매하기</Button>
      </Link>
    );
  };

  const PreviewButton = () => {
    return (
      <Link href={bookList[0].volumeInfo.previewLink}>
        <Button m={1}>미리보기</Button>
      </Link>
    );
  };

  const Author = () => {
    if (bookList[0].volumeInfo.authors) {
      const authorList = [];
      console.log();
      for (let i = 0; i < bookList[0].volumeInfo.authors.length; i++) {
        authorList.push(bookList[0].volumeInfo.authors[i].trim());
      }
      return authorList;
    }
  };

  return (
    <Box>
      <Flex borderRdius="15" justify="center" direction="column">
        <Flex direction="row" p={20} m="1rem" justify="center">
          <Box>
            <Image
              boxShadow="md"
              borderRadius="1rem"
              src={bookList[0].volumeInfo.imageLinks.small}
              p={1}
            />
            <Flex m={2} justify="center">
              <BuyButton />
              <PreviewButton />
            </Flex>
          </Box>
          <Box m={3}>
            <Text fontSize="2rem" fontWeight="bolder">
              {bookList[0].volumeInfo.title}
            </Text>
            <Text m={1} color="#868e96">
              <Flex direction="row">
                {Author(bookList[0].volumeInfo.authors).map((authors) => (
                  <Box>{authors}</Box>
                ))}
                |{bookList[0].volumeInfo.publisher} |
                {bookList[0].volumeInfo.publishedDate}
              </Flex>
            </Text>
            <Box m={2}>
              <Text m={1}>책소개</Text>
              <Box h="17rem" maxW="40rem" overflow="auto">
                {bookList[0].volumeInfo.description}
                {bookList[0].volumeInfo.description}
                {bookList[0].volumeInfo.description}
                {bookList[0].volumeInfo.description}
                {bookList[0].volumeInfo.description}
                {bookList[0].volumeInfo.description}
                {bookList[0].volumeInfo.description}
                {bookList[0].volumeInfo.description}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

const bookList = [
  {
    volumeInfo: {
      title: "The Google story",
      authors: ["David A. Vise", "Mark Malseed"],
      publisher: "Random House Digital, Inc.",
      publishedDate: "2005-11-15",
      description:
        "Here is the story behind one of the most remarkable Internet successes of our time. Based on scrupulous research and extraordinary access to Google",
      pageCount: 207,
      mainCategory: "Business & Economics / Entrepreneurship",
      averageRating: 3.5,
      ratingsCount: 136,
      previewLink:
        "http://books.google.co.kr/books?id=WxoaAQAAIAAJ&q=inauthor%3D%ED%99%A9%EC%88%9C%EC%9B%90&dq=inauthor%3D%ED%99%A9%EC%88%9C%EC%9B%90&hl=&cd=8&source=gbs_api",
      imageLinks: {
        smallThumbnail:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        small:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api",
        medium:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api",
        large:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api",
        extraLarge:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=6&edge=curl&source=gbs_api",
      },
      infoLink:
        "https://books.google.com/books?id=zyTCAlFPjgYC&ie=ISO-8859-1&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/The_Google_story.html?id=zyTCAlFPjgYC",
    },
    saleInfo: {
      country: "US",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 11.99,
        currencyCode: "USD",
      },
      retailPrice: {
        amount: 11.99,
        currencyCode: "USD",
      },
      buyLink:
        "https://books.google.com/books?id=zyTCAlFPjgYC&ie=ISO-8859-1&buy=&source=gbs_api",
    },
    accessInfo: {
      country: "US",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "https://books.google.com/books/download/The_Google_story-sample-epub.acsm?id=zyTCAlFPjgYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: false,
      },
      accessViewStatus: "SAMPLE",
    },
  },
];
