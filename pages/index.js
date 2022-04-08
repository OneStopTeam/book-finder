import { Box, Flex, Heading, Img, Stack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Search from "../src/components/Search";

export default function Home({ bestSellersData }) {
  console.log(bestSellersData);
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
        {/* {bestSellersData.map((data) => (
          <Stack>
            <Img src={data.coverSmallUrl} />
            <Text>{data.title}</Text>
          </Stack>
        ))} */}
      </Box>
    </Stack>
  );
}

export async function getServerSideProps({ query }) {
  const { item } = query;
  const bestSellersData = item.map((book) => {
    return { title: book.title, imgUrl: book.coverSmallUrl };
  });

  return {
    props: { bestSellersData }, // will be passed to the page component as props
  };
}
