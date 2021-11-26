import Description from "../src/components/Description";
import Recommend from "../src/components/Recommend";
import RelatedBook from "../src/components/RelatedBook";
import { Box, Button } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <Recommend />
      <RelatedBook />
      <Description />
    </div>
  );
}
