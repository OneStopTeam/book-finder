import ResultItem from "./ResultItem";

import { Container, Text, Grid, Spinner, Box } from "@chakra-ui/react";

export default function Result({ books, isLoading }) {
  return (
    <Container
      maxW="70rem"
      w="90%"
      mt="4rem"
      mb="4rem"
      display="flex"
      flexDir="column"
    >
      {isLoading ? (
        <Box textAlign="center">
          <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
        </Box>
      ) : !books ? (
        <Box mt="5%" textAlign="center">
          <Text fontSize="xl" fontWeight="bold" color="orange.600" mb={2}>
            찾으시는 책이 없습니다 😢
          </Text>
          <Text fontSize="lg">다른 이름으로 검색해보세요</Text>
        </Box>
      ) : (
        <>
          <Text display="flex" mb="2rem" fontSize="xl" fontWeight="bold">
            <Text color="red.500">{books.length}</Text>개의 책을 찾았어요
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={10}
          >
            {books.map((book) => (
              <ResultItem book={book} />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
