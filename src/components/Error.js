import { Center, Link, Text } from "@chakra-ui/react";

export default function Error({ message }) {
  return (
    <>
      <Center
        py=".5rem"
        px="10rem"
        mb="1rem"
        borderRadius="1rem"
        color="accent"
        border="1px"
        borderColor="accent"
      >
        {message}
      </Center>
      <Text>
        <Link color="accent" href="/">
          홈으로 돌아가기 ⬅
        </Link>
      </Text>
    </>
  );
}
