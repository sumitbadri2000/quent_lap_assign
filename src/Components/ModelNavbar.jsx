import { Flex } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { PiArticle } from "react-icons/pi";
import { CiChat2 } from "react-icons/ci";

export default function ModelNavbar({ data }) {
  return (
    <Flex justifyContent="space-around" alignItems="center" width="100%">
      <Flex
        flexDirection="column"
        alignItems="center"
        _hover={{ color: "blue" }}
        onClick={() => data("home")}>
        <GoHome fontSize="30px" />
        <a href="#">Home</a>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        _hover={{ color: "blue" }}
        onClick={() => data("messages")}>
        <PiArticle fontSize="30px" />
        <a href="#">Messages</a>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        _hover={{ color: "blue" }}
        onClick={() => data("article")}>
        <CiChat2 fontSize="30px" />
        <a href="#">Article</a>
      </Flex>
    </Flex>
  );
}
