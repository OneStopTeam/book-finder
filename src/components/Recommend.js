import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, Grid, Box, Text, Spinner, Image } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";
const API_KEY = "AIzaSyCvt99_fFgPgG1nkMgli_HCXxD0d-MTFFo";
export default function Recommend() {
  const [bookObj, setBookObj] = useState([]);
  const [loading, setLoading] = useState(false);
  const author = "라면";

  useEffect(() => {
    const book = async () => {
      setLoading(true);
      if (author) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${author}`
        );
        setBookObj(response.data.items);
      }
      setLoading(false);
    };
    book();
    console.log(bookObj);
  }, []);

  if (loading)
    return (
      <Flex justify="center">
        <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
      </Flex>
    );
  return (
    <Grid templateColumns="repeat(4,1fr)" m={10}>
      {bookObj.map((value, index) => (
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
