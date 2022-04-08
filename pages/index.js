import { Box, Flex, Heading, Img, Stack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Search from "../src/components/Search";

export default function Home({ bestSellersData }) {
  console.log(bestSellersData); // undefined

  return (
    <Stack>
      <Search />
      <Box>
        <Heading
          display="flex"
          alignItems="center"
          size="lg"
          fontFamily="Jal_Haru"
          color="accent"
        >
          베스트셀러 <ChevronRightIcon w={10} h={10} />
        </Heading>
      </Box>
    </Stack>
  );
}

export async function getServerSideProps({ query }) {
  const { item } = query;
  const bestSellersData = item.map((book) => {
    return { title: book.title, imgUrl: book.coverSmallUrl };
  });

  console.log(bestSellersData);

  return {
    props: { bestSellersData }, // will be passed to the page component as props
  };
}
