import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

export default function Chevron({ direction, size, onClick }) {
  if (direction === "left") {
    return (
      <ChevronLeftIcon
        boxSize={size}
        color="accent"
        _hover={{ cursor: "pointer" }}
        onClick={onClick}
      />
    );
  } else if (direction === "right") {
    return (
      <ChevronRightIcon
        boxSize={size}
        color="accent"
        _hover={{ cursor: "pointer" }}
        onClick={onClick}
      />
    );
  }
}
