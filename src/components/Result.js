import { Container, Text, Grid, Spinner, Box } from "@chakra-ui/react";

import ResultItem from "./ResultItem";

export default function Result({ books, isLoading }) {
  return (
    <Container
      maxW="80%"
      mt="5%"
      mb="5%"
      textAlign="center"
      display="flex"
      flexDir="column"
    >
      {isLoading ? (
        <Box>
          <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
        </Box>
      ) : books.length === 0 ? (
        <Box mt="5%">
          <Text fontSize="xl" fontWeight="bold" color="orange.600" mb={2}>
            찾으시는 책이 없습니다 😢
          </Text>
          <Text fontSize="lg">다른 이름으로 검색해보세요</Text>
        </Box>
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
