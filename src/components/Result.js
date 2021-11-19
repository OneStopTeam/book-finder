import { Container, Text, Grid, Flex } from "@chakra-ui/react";

import ResultItem from "./ResultItem";

export default function Result({ books, isLoading }) {
  return (
    <Container maxW="80%" mt="5%" mb="5%">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : books.length === 0 ? (
        <Text fontSize="xl" fontWeight="bold">
          찾으시는 책이 없습니다 😢
        </Text>
      ) : (
        <>
          <Text display="flex" mb="2rem" fontSize="xl" fontWeight="bold">
            결과 <Text color="red.500">{books.length}</Text>개
          </Text>
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
