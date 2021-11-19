import { Container, Text, Grid } from "@chakra-ui/react";

import ResultItem from "./ResultItem";

export default function Result({ books, isLoading }) {
  return (
    <Container maxW="80%">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : books.length === 0 ? (
        <Text>찾으시는 책이 없습니다 😢</Text>
      ) : (
        <>
          <Text>결과 {books.length}개</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            {books.map((book) => (
              <ResultItem book={book} />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
