import { Flex, Image, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bg="black"
      color="white"
      alignItems="center"
      justifyContent="space-between"
      p="3rem"
    >
      <Text>Copyright&copy; OneStop</Text>
      <Image w="8rem" src="/logo-white.png" alt="책잉" />
    </Flex>
  );
}
