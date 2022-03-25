import { Button } from "@chakra-ui/react";

export default function BuyButton({ link }) {
  const onClick = () => {
    window.open(link);
  };

  return (
    <Button bg="accent" color="white" size="sm" onClick={onClick}>
      구매하기
    </Button>
  );
}
