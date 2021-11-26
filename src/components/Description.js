import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Box, Text, Stack, Image, Flex } from "@chakra-ui/react";
const API_KEY = "AIzaSyCgCD-h-9f4xPwqKCAj0pn6f5MPehFWV3I";

export default function Description() {
  const [loading, setLoading] = useState(false);
  const [bookObj, setBookObj] = useState("");

  const BuyButton = () => {
    return (
      <Link href={bookList[0].saleInfo.buyLink}>
        <Button>구매하기</Button>
      </Link>
    );
  };

  return (
    <Box>
      <Flex borderRdius="15" justify="center" direction="column">
        <Stack direction={["column", "row"]} p={20} m="1rem">
          <Image
            src={bookList[0].volumeInfo.imageLinks.small}
            h="30rem"
            p={5}
          />
          <Box>
            <Text fontSize="2rem" fontWeight="bolder" p={1}>
              {bookList[0].volumeInfo.title}
            </Text>
            <Text>
              {bookList[0].volumeInfo.authors[0]},
              {bookList[0].volumeInfo.authors[1]}/
              {bookList[0].volumeInfo.publisher}/
              {bookList[0].volumeInfo.publishedDate}
            </Text>
            <Box h="30rem" maxW="40rem" overflow="auto">
              <Text>책소개</Text>
              <Box>
                {bookList[0].volumeInfo.description}
                ooooooooooooooooooooooooooooooooㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ
              </Box>
            </Box>
          </Box>
        </Stack>
        <Box>
          <BuyButton />
        </Box>
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
