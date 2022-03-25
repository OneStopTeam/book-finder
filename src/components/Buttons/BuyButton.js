import { Button } from "@chakra-ui/react";

export default function BuyButton({ link, isDisabled }) {
  const onClick = () => {
    window.open(link);
  };

  return (
    <Button
      bg="accent"
      color="white"
      size="sm"
      onClick={onClick}
      isDisabled={isDisabled}
    >
      구매하기
    </Button>
  );
}
