import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MesModal from "./Modal";

export default function ImagewithText() {
  return (
    <Box position={"relative"}>
      <Box
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="600px"
        pt="100px"
        bg={"rgb(4,21,39)"}
        textAlign="center"
        width="100%"
        margin="auto">
        <Flex flexDirection={"column"} alignItems={"center"} gap={50}>
          <Heading
            width={"78%"}
            fontFamily={"Georgia, seri"}
            fontSize={"70px"}
            color={"rgb(242,243,244)"}>
            The only AI customer service solution you need
          </Heading>
          <Text width={"62%"} fontSize={"25px"} color={"rgb(199,202,206)"}>
            The only solution that combines an AI chatbot, help desk, and
            proactive support—so you can keep costs low, support teams happy,
            and customers satisfied.
          </Text>
          <Stack direction={"row"} spacing={10} alignItems={"center"}>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              color={"white"}
              fontSize={"16px"}
              fontWeight={700}
              variant={"ghost"}
              href={"#"}
              paddingLeft={7}
              paddingRight={7}
              bg={"rgb(0,87,255)"}
              borderRadius={"50px"}
              _hover={{}}>
              Start Free Trial
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"16px"}
              fontWeight={700}
              color={"white"}
              variant={"outline"}
              borderRadius={"50px "}
              border={"3px solid white"}
              bg={"none"}
              href={"#"}
              px="6"
              py="5"
              _hover={{
                bg: "grey.300",
              }}>
              View Demo
            </Button>
          </Stack>
        </Flex>
      </Box>
      <Box position={"absolute"} zIndex={1} right={"50px"} bottom={"175px"}>
        <MesModal />
      </Box>
    </Box>
  );
}
