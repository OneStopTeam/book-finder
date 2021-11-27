import { Box, ListIcon } from "@chakra-ui/layout";
import { Image, Text, List, ListItem, AspectRatio } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import bookCover from "../../assets/book-cover.png";

export default function ResultItem({ book }) {
  const {
    volumeInfo: {
      imageLinks,
      title,
      authors,
      publisher,
      publishedDate,
      categories,
    },
  } = book;

  const trimCategory = (categories) => {
    if (categories) {
      const list = categories[0].split("&");
      const trimed = [];
      for (let i = 0; i < list.length; i++) {
        trimed.push(list[i].trim());
      }
      return trimed;
    }
  };

  return (
    <Box display="flex" boxShadow="md" borderRadius="15">
      <AspectRatio minW="10rem" ratio={3 / 4}>
        {imageLinks ? (
          <Image
            src={imageLinks.smallThumbnail}
            alt={title}
            objectFit="scaleDown"
            borderRadius="15"
          />
        ) : (
          <Image
            src={bookCover.src}
            alt={title}
            objectFit="scaleDown"
            borderRadius="15"
          />
        )}
      </AspectRatio>

      <Box p={5}>
        <Text mb={2}>{title}</Text>
        <Text fontSize="sm" color="gray.500">
          {authors} / {publisher}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {publishedDate}
        </Text>
        <List mt={3}>
          {trimCategory(categories) &&
            trimCategory(categories).map((category) => (
              <ListItem fontSize="sm" display="flex" alignItems="flex-start">
                <ListIcon
                  as={ChevronRightIcon}
                  color="orange.600"
                  w={5}
                  h={5}
                />
                {category}
              </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
}
