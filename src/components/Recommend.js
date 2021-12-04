import axios from "axios";
import Link from "next/link"
import {useRecoilState}from "recoil";
import { useEffect, useState } from "react";
import { Flex, Grid, Box, Text, Spinner, Image } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";
import { relatedState } from "./stage";

export default function Recommend() { 
  const [related, setRelated] = useRecoilState(relatedState);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }

  useEffect(() => {
    const book = async () => {
      setLoading(true);
      try {
        if (randomItem(recommendKeyword)) {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${randomItem(
              recommendKeyword
            )}`
          );
          setRelated(response.data.items);
          setLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    };
    book();
   
  }, [setRelated]);
  console.log(related);
console.log(relatedState.default);
  if (loading)
    return (
      <Flex justify="center">
        <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
      </Flex>
    );
  return (
    <Grid templateColumns="repeat(4,1fr)" m={10}>
<<<<<<< HEAD
      {related &&
        related.map((book, index) => (
          <Link book={book} href={{pathname:`/detail/[id]`, query:{id:book.id,
          title:book.volumeInfo.title,
          buylink:book.saleInfo.buyLink,
          description:book.volumeInfo.description,
          preview:book.volumeInfo.previewLink,
          img:((book.volumeInfo.imageLinks)? book.volumeInfo.imageLinks.small: bookCover.src),
          date : book.volumeInfo.publishedDate,
          publisher:book.volumeInfo.publisher,
          authors:book.volumeInfo.authors}}}>
            <Box key={index} book={book} position="relative" visibility="">
              {book.volumeInfo.imageLinks ? (
                <Image
                  h="15rem"
                  alt={book.volumeInfo.title}
                  src={book.volumeInfo.imageLinks.thumbnail}
                  borderRadius="15"
                  boxShadow="md"
                />
              ) : (
                <Image
                  src={bookCover.src}
                  h="15rem"
                  boxShadow="md"
                  borderRadius="15"
                />
              )}
              <Text
                p={1}
                display="flex"
                justify="center"
                fontSize="0.7rem"
                w="10rem"
                color="#868e96"
                positon="absolute"
              >
                {book.volumeInfo.title}
              </Text>
            </Box>
          </Link>
        ))}
=======
      {related.map((value, index) => (
        <Box key={index} position="relative" visibility="">
          {value.volumeInfo.imageLinks ? (
            <Image
              h="15rem"
              key={index}
              alt={value.volumeInfo.title}
              src={value.volumeInfo.imageLinks.thumbnail}
              borderRadius="15"
              boxShadow="md"
            />
          ) : (
            <Image
              src={bookCover.src}
              h="15rem"
              boxShadow="md"
              borderRadius="15"
            />
          )}
          <Text
            p={1}
            display="flex"
            justify="center"
            fontSize="0.7rem"
            w="10rem"
            color="#868e96"
            position="absolute"
          >
            {value.volumeInfo.title}
          </Text>
        </Box>
      ))}
>>>>>>> 22fc909de6a5195d1c5a3d9b8998b4bf04f17695
    </Grid>
  );
}

const recommendKeyword = [
  "시",
  "소설",
  "유아",
  "에세이",
  "경제",
  "여행",
  "사회",
  "컴퓨터",
  "뷰티",
  "건강",
  "전공",
  "만화",
  "역사",
  "문화",
  "경영",
  "세계",
  "기술",
  "미술",
  "음악",
  "체육",
  "취미",
  "외국어",
];
