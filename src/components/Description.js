import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Box, Text, Stack } from "@chakra-ui/react";

export default function Description() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const book = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=search+terms`
        );
      } catch (e) {
        console.log("에러 발생");
      }
      setLoading(false);
    };
    book();
  }, []);

  if (loading) return <div>로딩중</div>;

  return (
    <Box>
      <Stack direction={["column", "row"]}>
        <Box>image</Box>
        <Box>
          <Text fontsize="1rem">책 제목</Text>
          <Text>작가/출판사/출판연도</Text>
          <Text>책소개</Text>
          <Text>줄거리줄거리</Text>
        </Box>
      </Stack>
      <Button>미리보기</Button>
      <Button>구매하기</Button>
    </Box>
  );
}
