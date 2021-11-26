import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, Grid, Box, Text, Spinner, Image } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";
const API_KEY = "AIzaSyCvt99_fFgPgG1nkMgli_HCXxD0d-MTFFo";

export default function Recommend() {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);

  function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }

  useEffect(() => {
    const book = async () => {
      setLoading(true);
      if (randomItem(recommendKeyword)) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${randomItem(
            recommendKeyword
          )}`
        );
        setRelated(response.data.items);
      }
      setLoading(false);
    };
    book();
    console.log(related);
  }, []);

  if (loading)
    return (
      <Flex justify="center">
        <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
      </Flex>
    );
  return (
    <Grid templateColumns="repeat(4,1fr)" m={10}>
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
            positon="absolute"
          >
            {value.volumeInfo.title}
          </Text>
        </Box>
      ))}
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
];
