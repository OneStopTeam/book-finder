import Description from "../src/components/Description";
import Recommend from "../src/components/Recommend";
import { Box, Button } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <Recommend />
      <Description />
    </div>
  );
}
