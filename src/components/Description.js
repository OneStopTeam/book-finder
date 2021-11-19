import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Box, Text, Stack } from "@chakra-ui/react";

export default function Description() {
  const [loading, setLoading] = useState(false);
  const [bookObj, setBookObj] = useState("");

  useEffect(() => {
    const book = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=search+terms`
      );
      setBookObj({
        title: response.title,
        authors: response.authors,
        publisher: publishedDate,
        description,
        pageCount,
        averageRating,
        imageLinks,
        buyLink,
      });
      setLoading(false);
    };
    book();
  }, []);

  if (loading) return <div>로딩중</div>;

  return <div></div>;
}
