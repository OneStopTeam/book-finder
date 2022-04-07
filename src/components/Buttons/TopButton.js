import { Circle } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";

export default function TopButton() {
  const onClick = () => {
    window.scroll(0, 0);
  };

  return (
    <Circle
      pos="fixed"
      bottom={10}
      right={10}
      bg="#c1c1c1"
      p={4}
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <TriangleUpIcon color="white" />
    </Circle>
  );
}
