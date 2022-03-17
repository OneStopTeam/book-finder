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
import RelatedBook from "../../src/components/RelatedBook";
import { ChevronRightIcon } from "@chakra-ui/icons";
import StarRating from "./StarRatings";
import bookCover from "../../public/img/book-cover.png";

export default function Description({ bookData }) {
  const toast = useToast();
  const BuyButton = ({ buyLink }) => {
    if (buyLink) {
      return (
        <Link href={buyLink} colorScheme="orange">
          <Button m={1}>구매하기</Button>
        </Link>
      );
    } else {
      return (
        <Button
          m={1}
          colorScheme="orange"
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
          <Button m={1} colorScheme="orange">
            미리보기
          </Button>
        </Link>
      );
    } else {
      <Button
        m={1}
        colorScheme="orange"
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
      <Box
        boxShadow="base"
        pos="absolute"
        bgColor="white"
        mt="12rem"
        borderWidth="1px"
        borderRadius="lg"
        maxW="70rem"
        minW="40rem"
      >
        <Wrap justify="center">
          <Flex borderRdius="15" justify="center" direction="column">
            <Flex m="2rem" justify="center">
              <Flex direction="column" justify="center">
                {bookData.volumeInfo.imageLinks ? (
                  <Image
                    boxShadow="md"
                    borderRadius="0.5rem"
                    src={bookData.volumeInfo.imageLinks.thumbnail}
                  />
                ) : (
                  <Image src={bookCover.src} boxShadow="md" borderRadius="15" />
                )}
                <Flex mt={2} justify="center">
                  <BuyButton buyLink={bookData.saleInfo.buyLink} />
                  <PreviewButton
                    previewLink={bookData.volumeInfo.previewLink}
                  />
                </Flex>
              </Flex>
              <Box ml="3rem">
                <Heading fontSize="2rem" fontWeight="bolder">
                  {bookData.volumeInfo.title}
                </Heading>
                {bookData.volumeInfo.averageRating ? (
                  <Flex mb={2} alignItems="end">
                    <StarRating
                      voteAverage={bookData.volumeInfo.averageRating}
                    />
                    <Text ml="0.5rem" color="orange">
                      {bookData.volumeInfo.averageRating}
                    </Text>
                  </Flex>
                ) : (
                  ""
                )}
                <Flex alignItems="center">
                  <Text fontSize="0.9rem" color="#868e96" mr="1rem">
                    작가
                  </Text>
                  <Text>{bookData.volumeInfo.authors || "정보 없음"} </Text>
                </Flex>
                <Flex alignItems="center">
                  <Text fontSize="0.9rem" color="#868e96" mr="1rem">
                    출판사
                  </Text>
                  <Text>{bookData.volumeInfo.publisher || " 정보 없음"} </Text>
                </Flex>
                <Flex alignItems="center">
                  <Text fontSize="0.9rem" color="#868e96" mr="1rem">
                    출판 날짜
                  </Text>
                  <Text>
                    {bookData.volumeInfo.publishedDate || " 정보 없음"}
                  </Text>
                </Flex>

                <Text fontSize="0.9rem" color="#868e96" mr="1rem">
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
                            color="orange.600"
                            w={5}
                            h={5}
                          />
                          {category}
                        </ListItem>
                      )
                    )}
                </List>
              </Box>
            </Flex>
            <Text ml="2rem" fontSize="1.2rem">
              책소개
            </Text>
            <Box ml="2rem" mr="2rem">
              {bookData.volumeInfo.description || "없음"}
            </Box>
          </Flex>
        </Wrap>
        <RelatedBook author={bookData.volumeInfo.authors} />
      </Box>
    );
  }
}
