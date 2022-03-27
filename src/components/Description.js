import Link from "next/link";
import {
  Button,
  Box,
  Text,
  Wrap,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import StarRating from "./StarRatings";
import bookCover from "../../public/img/book-cover.png";

export default function Description({ bookData }) {
  const toast = useToast();
  const BuyButton = ({ buyLink }) => {
    if (buyLink) {
      return (
        <Link href={buyLink}>
          <Button m={1} bgColor="#F74900" textColor="white">
            구매하기
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          m={1}
          bgColor="#F74900"
          textColor="white"
          onClick={() =>
            toast({
              position: "top",
              status: "warning",
              description: "구매링크가 존재하지 않습니다.",
              isClosable: true,
            })
          }
        >
          구매하기
        </Button>
      );
    }
  };

  const PreviewButton = ({ previewLink }) => {
    if (previewLink) {
      return (
        <Link href={previewLink}>
          <Button m={1} borderWidth={1.5} borderColor="#F74900" bgColor="white">
            미리보기
          </Button>
        </Link>
      );
    } else {
      <Button
        m={1}
        borderColor="#F74900"
        bgColor="white"
        onClick={() =>
          toast({
            position: "top",
            status: "warning",
            description: "미리보기 링크가 존재하지 않습니다.",
            isClosable: true,
          })
        }
      >
        미리보기
      </Button>;
    }
  };

  const trimCategory = (categories) => {
    if (categories) {
      const list = categories[0].split("/");
      const trimed = [];
      for (let i = 0; i < list.length; i++) {
        trimed.push(list[i].trim());
      }
      return trimed;
    }
  };

  if (bookData !== null) {
    return (
      <Wrap justify="center">
        <Flex justify="center" direction="column">
          <Flex m="2rem" justify="center" alignItems="center">
            <Flex direction="column" justify="center">
              {bookData.volumeInfo.imageLinks ? (
                <Image
                  minW="15rem"
                  boxShadow="md"
                  borderRadius="0.5rem"
                  src={bookData.volumeInfo.imageLinks.thumbnail}
                />
              ) : (
                <Image
                  minW="15rem"
                  src={bookCover.src}
                  boxShadow="md"
                  borderRadius="15"
                />
              )}
            </Flex>
            <Box ml="3rem">
              <Heading mb="0.5rem" color="#F74900" fontWeight="bolder">
                {bookData.volumeInfo.title}
              </Heading>
              {bookData.volumeInfo.averageRating ? (
                <Flex mb="0.5rem" alignItems="end">
                  <StarRating voteAverage={bookData.volumeInfo.averageRating} />
                  <Text ml="0.5rem" color="#F74900">
                    {bookData.volumeInfo.averageRating}
                  </Text>
                </Flex>
              ) : (
                ""
              )}
              <Flex mb={1} alignItems="center">
                <Text fontSize="1rem" color="#868e96" mr="1rem">
                  작가
                </Text>
                <Text>{bookData.volumeInfo.authors || "정보 없음"} </Text>
              </Flex>
              <Flex mb={1} alignItems="center">
                <Text fontSize="1rem" color="#868e96" mr="1rem">
                  출판사
                </Text>
                <Text>{bookData.volumeInfo.publisher || " 정보 없음"} </Text>
              </Flex>
              <Flex mb={1} alignItems="center">
                <Text fontSize="1rem" color="#868e96" mr="1rem">
                  출판 날짜
                </Text>
                <Text>{bookData.volumeInfo.publishedDate || " 정보 없음"}</Text>
              </Flex>

              <Text mb={1} fontSize="1rem" color="#868e96" mr="1rem">
                장르
              </Text>
              <List>
                {trimCategory(bookData.volumeInfo.categories) &&
                  trimCategory(bookData.volumeInfo.categories).map(
                    (category) => (
                      <ListItem
                        fontSize="1rem"
                        display="flex"
                        alignItems="center"
                      >
                        <ListIcon
                          as={ChevronRightIcon}
                          color="#F74900"
                          w={5}
                          h={5}
                        />
                        {category}
                      </ListItem>
                    )
                  )}
              </List>
              <Flex mt={3}>
                <PreviewButton previewLink={bookData.volumeInfo.previewLink} />
                <BuyButton buyLink={bookData.saleInfo.buyLink} />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Wrap>
    );
  }
}
