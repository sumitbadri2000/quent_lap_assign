import { Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      display={{ base: "none", xl: "flex" }}
      justifyContent={"space-around"}
      alignItems={"center"}
      bgGradient="linear(to-r,rgb(189,171,255),rgb(208,182,254), rgb(246,201,230),rgb(238,199,199))">
      <Image
        // ml={"-2%"}
        w={"20%"}
        src="https://images.ctfassets.net/xny2w179f4ki/5pUWFlrJ6Q2jwgCz3Jjrtl/946304e959e674009b2eae56719ef6d7/banner-image.png?w=472&h=254&fm=webp"
        alt=""></Image>
      <Flex flexDirection={"column"} alignItems={"start"} ml={"-5%"}>
        <Text fontWeight={"700"} color={"rgb(4,21,39)"} fontSize={"30px"}>
          Meet Fin, a breakthrough AI bot.
        </Text>
        <Text fontSize={"35px"} color={"rgb(103,94,118)"}>
          Resolve 50% of your support questions. Instantly.
        </Text>
      </Flex>
      <Button>Learn More</Button>
    </Flex>
  );
}
