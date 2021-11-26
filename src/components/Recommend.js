import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Box, Text, Stack, Image } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";

export default function Recommend() {
  const [bookObj, setBookObj] = useState([]);
  const [loading, setLoading] = useState(false);
  const author = "황순원";

  useEffect(() => {
    const book = async () => {
      setLoading(true);
      if (author) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor=${author}`
        );
        setBookObj(response.data.items);
      }
      setLoading(false);
    };
    book();
    console.log(bookObj);
  }, []);

  if (loading) return <div>로딩중</div>;
  return (
    <Box width="80%">
      {bookObj.map((value, index) => (
        <Box position="relative" visibility="">
          {value.volumeInfo.imageLinks ? (
            <Image
              w="10rem"
              key={index}
              alt={value.volumeInfo.title}
              src={value.volumeInfo.imageLinks.thumbnail}
              borderRadius="15"
            />
          ) : (
            <Image src={bookCover.src} w="10rem" borderRadius="15" />
          )}
          <Text positon="absolute">{value.volumeInfo.title}</Text>
        </Box>
      ))}
    </Box>
  );
}
