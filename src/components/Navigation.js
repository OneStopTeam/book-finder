import { Flex, Spacer, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import Link from "next/link";

export default function Navigation() {
  return (
    <Flex gap={30} paddingX={100} paddingY={0.7} alignItems="center">
      <Link href="/">
        <Image
          src={logo.src}
          boxSize="12rem"
          objectFit="contain"
          mr={2}
          cursor="pointer"
        />
      </Link>
      <Spacer />
      <Link href={`/about`}>
        <Text
          cursor="pointer"
          _focus={{ outline: 0 }}
          _hover={{ color: "#F74900" }}
        >
          About
        </Text>
      </Link>
      <Link href={`https://github.com/OneStopTeam`}>
        <Text
          ml="3rem"
          cursor="pointer"
          _focus={{ outline: 0 }}
          _hover={{ color: "#F74900" }}
        >
          Github
        </Text>
      </Link>
    </Flex>
  );
}
