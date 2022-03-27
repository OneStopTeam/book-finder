import Link from "next/link";
import SimpleCard from "./SimpleCard";
import { Flex, Grid, Box, Text, Spinner, Image } from "@chakra-ui/react";
import bookCover from "../../public/img/book-cover.png";
import useRelatedBook from "../hooks/useRelatedBook";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

export default function RelatedBook({ author }) {
  const { isLoading, isError, relatedBook } = useRelatedBook(author);
  if (isLoading)
    return (
      <Flex justify="center">
        <Spinner mt="10%" color="red.500" thickness="4px" size="xl" />
      </Flex>
    );
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        className="swiper_navigation"
      >
        {relatedBook.map((book, index) => (
          <SwiperSlide key={index} className="swiper_card">
            <Link
              book={book}
              href={{
                pathname: `/detail/[id]`,
                query: {
                  id: book.id,
                },
              }}
            >
              <Box maxW="15rem" cursor="pointer">
                <SimpleCard book={book} />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
