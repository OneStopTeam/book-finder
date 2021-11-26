import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Box, Text, Stack, Image, Flex } from "@chakra-ui/react";
const API_KEY = "AIzaSyCgCD-h-9f4xPwqKCAj0pn6f5MPehFWV3I";

export default function Description() {
  const [loading, setLoading] = useState(false);
  const [bookObj, setBookObj] = useState("");
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

  return (
    <Box
      width="80%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction={["column", "row"]}>
        <Image src="https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api" />
        <Box>
          <Text fontsize="xl">{title}</Text>
          <Text>작가/출판사/출판연도</Text>
          <Text>책소개</Text>
          <Text>줄거리</Text>
        </Box>
      </Stack>
      <Box>
        <Button>미리보기</Button>
        <Button>구매하기</Button>
      </Box>
    </Box>
  );
}
