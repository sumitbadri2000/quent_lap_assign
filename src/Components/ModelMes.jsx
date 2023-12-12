import { Box, Text } from "@chakra-ui/react";

export default function ModelMes() {
  return (
    <Box>
      <Box
        borderTopLeftRadius={20}
        textAlign={"center"}
        bg={"rgb(0,87,255)"}
        color={"white"}
        p={4}>
        <Text fontWeight={700} mb={6}>
          Intercom Message
        </Text>
        <Text>We typically reply within a day</Text>
        <Text mt={2} color={"grey"}>
          We help your business grow by connecting you to your customers. For
          more support, tips & tricks, check out the Community
          https://community.intercom.com
        </Text>
      </Box>
    </Box>
  );
}
