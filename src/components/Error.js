import { Center } from "@chakra-ui/react";

export default function Error({ message }) {
  return (
    <Center
      py=".5rem"
      px="10rem"
      borderRadius="1rem"
      color="accent"
      border="1px"
      borderColor="accent"
    >
      {message}
    </Center>
  );
}
