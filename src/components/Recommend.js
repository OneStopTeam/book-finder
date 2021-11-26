import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Box, Text, Stack, Image } from "@chakra-ui/react";
const API_KEY = "AIzaSyCgCD-h-9f4xPwqKCAj0pn6f5MPehFWV3I";

export default function Recommend() {
  const [bookObj, setBookObj] = useState([]);
  const [loading, setLoading] = useState(false);
  const author = "andy";

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
  }, []);

  if (loading) return <div>로딩중</div>;
  return (
    <Box width="80%">
      {bookObj.map((value, index) => (
        <Text key={index}>{value.volumeInfo.title}</Text>
      ))}
    </Box>
  );
}
