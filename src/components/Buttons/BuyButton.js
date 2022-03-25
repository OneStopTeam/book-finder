import { Button } from "@chakra-ui/react";

// link: 구매 링크
// isDisabled (boolean): 링크가 없으면 버튼 비활성화

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
